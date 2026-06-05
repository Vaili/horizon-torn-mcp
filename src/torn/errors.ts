export class TornApiError extends Error {
  readonly status: number;
  readonly endpoint: string;
  readonly details: unknown;

  constructor(message: string, status: number, endpoint: string, details: unknown) {
    super(message);
    this.name = "TornApiError";
    this.status = status;
    this.endpoint = endpoint;
    this.details = details;
  }
}

export class TornRequestError extends Error {
  readonly endpoint: string;
  readonly causeValue: unknown;

  constructor(message: string, endpoint: string, causeValue: unknown) {
    super(message);
    this.name = "TornRequestError";
    this.endpoint = endpoint;
    this.causeValue = causeValue;
  }
}
