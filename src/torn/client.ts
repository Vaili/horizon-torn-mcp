import { TornApiError, TornRequestError } from "./errors.js";
import type { TornToolParam } from "./tools/generated.js";

export interface TornClientOptions {
  apiKey: string;
  baseUrl: string;
  timeoutMs: number;
}

export interface TornRequestArgs {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  pathTemplate: string;
  params: TornToolParam[];
  args: Record<string, unknown>;
}

export class TornClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly timeoutMs: number;

  constructor(options: TornClientOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.timeoutMs = options.timeoutMs;
  }

  async request(input: TornRequestArgs): Promise<unknown> {
    const endpoint = this.buildEndpoint(input.pathTemplate, input.params, input.args);
    const url = `${this.baseUrl}${endpoint}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url, {
        method: input.method,
        headers: {
          Authorization: `ApiKey ${this.apiKey}`,
          Accept: "application/json"
        },
        signal: controller.signal
      });

      const body = await parseBody(response);
      if (!response.ok) {
        throw new TornApiError(
          `Torn API request failed with status ${response.status}`,
          response.status,
          endpoint,
          body
        );
      }

      return body;
    } catch (error) {
      if (error instanceof TornApiError) {
        throw error;
      }

      throw new TornRequestError("Torn API request failed", endpoint, error);
    } finally {
      clearTimeout(timeout);
    }
  }

  private buildEndpoint(
    pathTemplate: string,
    params: TornToolParam[],
    args: Record<string, unknown>
  ): string {
    let path = pathTemplate;
    const query = new URLSearchParams();

    for (const parameter of params) {
      const rawValue = args[parameter.name];
      if (rawValue === undefined || rawValue === null || rawValue === "") {
        continue;
      }

      const value = String(rawValue);
      if (parameter.in === "path") {
        path = path.replace(`{${parameter.name}}`, encodeURIComponent(value));
      } else {
        query.set(parameter.name, value);
      }
    }

    const queryText = query.toString();
    return queryText ? `${path}?${queryText}` : path;
  }
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
