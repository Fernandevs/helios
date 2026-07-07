import { AppError } from "./app-error";

export class UnauthorizedError extends AppError {
  public readonly code = "UNAUTHORIZED";

  constructor(message = "No autorizado", details?: Record<string, unknown>) {
    super(message, details);
  }
}
