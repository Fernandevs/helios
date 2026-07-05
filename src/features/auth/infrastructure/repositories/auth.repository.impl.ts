import { AuthDatasource } from "../../domain/datasources/auth.datasource";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { UserEntity } from "../../domain/entities/user.entity";
import { AuthMapper } from "../../application/mappers/auth.mapper";
import {
  UnauthorizedError,
  UnexpectedError,
  ValidationError,
} from "@/core/domain/errors";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDatasource) {}

  async login(email: string, password: string): Promise<UserEntity> {
    try {
      const response = await this.datasource.login(email, password);
      
      if (!response.user) {
        throw new UnauthorizedError("Usuario no encontrado en la sesión de autenticación.");
      }

      return AuthMapper.toEntity(response.user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message;
        
        // Supabase error mapping
        if (message.includes("Invalid login credentials") || message.includes("invalid_credentials")) {
          throw new UnauthorizedError("Credenciales de acceso inválidas.");
        }
        
        if (message.includes("Email not confirmed")) {
          throw new UnauthorizedError("El correo electrónico no ha sido confirmado.");
        }

        if (message.includes("Validation failed") || message.includes("bad_request")) {
          throw new ValidationError("Los datos enviados no son válidos.", undefined, { error: message });
        }

        throw new UnexpectedError(`Error inesperado durante la autenticación: ${message}`);
      }

      throw new UnexpectedError("Error desconocido durante la autenticación.");
    }
  }
}
