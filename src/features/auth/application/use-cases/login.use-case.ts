import { AuthRepository } from "../../domain/repositories/auth.repository";
import { User } from "../../domain/entities/user.entity";

type LoginUseCaseProps = {
  repository: AuthRepository;
}

export class LoginUseCase {
  private readonly repository: AuthRepository;

  constructor({ repository }: LoginUseCaseProps) {
    this.repository = repository;
  }

  async execute(email: string, password: string): Promise<User> {
    return this.repository.login(email, password);
  }
}
