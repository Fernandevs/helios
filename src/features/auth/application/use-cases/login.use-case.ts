import { AuthRepository } from "../../domain/repositories/auth.repository";
import { UserEntity } from "../../domain/entities/user.entity";

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<UserEntity> {
    // We can add application business logic here if needed (e.g. tracking, logs)
    return this.authRepository.login(email, password);
  }
}
