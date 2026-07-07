import { AppError } from "./app-error";

export class UnexpectedError extends AppError {
  public readonly code = "UNEXPECTED_ERROR";

  constructor(message = "Error inesperado del sistema", details?: Record<string, unknown>) {
    super(message, details);
  }
}
