import { AppError } from "./app-error";

export class NotFoundError extends AppError {
  public readonly code = "NOT_FOUND";

  constructor(message = "Recurso no encontrado", details?: Record<string, unknown>) {
    super(message, details);
  }
}
