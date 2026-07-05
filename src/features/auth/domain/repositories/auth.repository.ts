import { UserEntity } from "../entities/user.entity";

export interface AuthRepository {
  login(email: string, password: string): Promise<UserEntity>;
}
