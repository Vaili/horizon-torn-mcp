import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

type OpenApiParameter = {
  name: string;
  in: string;
  required?: boolean;
  description?: string;
};

type OpenApiParameterRef = {
  $ref: string;
};

type OpenApiParameterLike = OpenApiParameter | OpenApiParameterRef;

type OpenApiOperation = {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: OpenApiParameterLike[];
};

type OpenApiPathItem = Partial<Record<HttpMethod, OpenApiOperation>> & {
  parameters?: OpenApiParameterLike[];
};

type OpenApiSchema = {
  paths?: Record<string, OpenApiPathItem>;
  components?: {
    parameters?: Record<string, OpenApiParameter>;
  };
};

const OPENAPI_URL =
  process.env.TORN_OPENAPI_URL?.trim() || "https://www.torn.com/swagger/openapi.json";

async function main(): Promise<void> {
  const spec = await fetchSpec(OPENAPI_URL);
  const tools = toToolDefinitions(spec);

  const outputPath = resolve(process.cwd(), "src/torn/tools/generated.ts");
  const content = buildFileContent(OPENAPI_URL, tools);
  await writeFile(outputPath, content, "utf8");

  console.log(`Generated ${tools.length} tools at src/torn/tools/generated.ts`);
}

async function fetchSpec(url: string): Promise<OpenApiSchema> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "horizon-torn-mcp-generator/0.1"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch OpenAPI: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as OpenApiSchema;
  return data;
}

function toToolDefinitions(spec: OpenApiSchema): Array<{
  name: string;
  description: string;
  method: string;
  path: string;
  category: string;
  params: Array<{ name: string; in: "path" | "query"; required: boolean; description?: string }>;
}> {
  const methods: HttpMethod[] = ["get", "post", "put", "patch", "delete"];
  const tools: Array<{
    name: string;
    description: string;
    method: string;
    path: string;
    category: string;
    params: Array<{ name: string; in: "path" | "query"; required: boolean; description?: string }>;
  }> = [];

  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    for (const method of methods) {
      const operation = pathItem[method];
      if (!operation) {
        continue;
      }

      const operationId = operation.operationId || `${method}_${path}`;
      const normalizedOperationId = operationId.replace(/[^a-zA-Z0-9_]/g, "_");
      const description =
        operation.summary || operation.description || `${method.toUpperCase()} ${path}`;
      const category = operation.tags?.[0] || "Uncategorized";

      const allParameters = [...(pathItem.parameters || []), ...(operation.parameters || [])];

      const params = allParameters
        .map((parameterLike) => resolveParameter(spec, parameterLike))
        .filter((parameter): parameter is OpenApiParameter => Boolean(parameter))
        .filter((parameter) => parameter.in === "path" || parameter.in === "query")
        .map((parameter) => ({
          name: parameter.name,
          in: parameter.in as "path" | "query",
          required: Boolean(parameter.required),
          description: parameter.description
        }));

      tools.push({
        name: `horizon_torn_${normalizedOperationId}`,
        description,
        method: method.toUpperCase(),
        path,
        category,
        params
      });
    }
  }

  tools.sort((a, b) => a.name.localeCompare(b.name));
  return tools;
}

function resolveParameter(
  spec: OpenApiSchema,
  parameterLike: OpenApiParameterLike
): OpenApiParameter | null {
  if ("$ref" in parameterLike) {
    const marker = "#/components/parameters/";
    if (!parameterLike.$ref.startsWith(marker)) {
      return null;
    }

    const key = parameterLike.$ref.slice(marker.length);
    return spec.components?.parameters?.[key] || null;
  }

  return parameterLike;
}

function buildFileContent(
  sourceUrl: string,
  tools: Array<{
    name: string;
    description: string;
    method: string;
    path: string;
    category: string;
    params: Array<{ name: string; in: "path" | "query"; required: boolean; description?: string }>;
  }>
): string {
  const header = `export type TornToolParam = {\n  name: string;\n  in: "path" | "query";\n  required: boolean;\n  description?: string;\n};\n\nexport type TornToolDefinition = {\n  name: string;\n  description: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  category: string;\n  params: TornToolParam[];\n};\n\n`;

  const metadata = `export const GENERATED_FROM = ${JSON.stringify(sourceUrl)};\nexport const GENERATED_AT = ${JSON.stringify(new Date().toISOString())};\n`;
  const toolsJson = JSON.stringify(tools, null, 2)
    .replace(/"method": "(GET|POST|PUT|PATCH|DELETE)"/g, '"method": "$1"')
    .replace(/\\u003c/g, "<")
    .replace(/\\u003e/g, ">");

  const body = `\nexport const TOOL_DEFINITIONS: TornToolDefinition[] = ${toolsJson};\n`;
  return `${header}${metadata}${body}`;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
