import { AppError } from "./app-error";

export interface ValidationErrorField {
  field: string;
  message: string;
}

export class ValidationError extends AppError {
  public readonly code = "VALIDATION_ERROR";

  constructor(
    message: string,
    public readonly fields?: ValidationErrorField[],
    details?: Record<string, unknown>
  ) {
    super(message, { ...details, fields });
  }
}
