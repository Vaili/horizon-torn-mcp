export interface TornConfig {
  apiKey: string;
  baseUrl: string;
  openApiUrl: string;
  timeoutMs: number;
}

export function getConfig(): TornConfig {
  const apiKey = process.env.TORN_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Missing TORN_API_KEY. Set it in your environment or .env file.");
  }

  const baseUrl = process.env.TORN_BASE_URL?.trim() || "https://api.torn.com/v2";
  const openApiUrl =
    process.env.TORN_OPENAPI_URL?.trim() || "https://www.torn.com/swagger/openapi.json";
  const timeoutMs = Number.parseInt(process.env.TORN_REQUEST_TIMEOUT_MS || "30000", 10);

  return {
    apiKey,
    baseUrl,
    openApiUrl,
    timeoutMs: Number.isFinite(timeoutMs) && timeoutMs > 0 ? timeoutMs : 30000
  };
}
