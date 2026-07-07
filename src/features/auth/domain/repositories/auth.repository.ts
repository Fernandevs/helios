import { User } from "../entities/user.entity";

export interface AuthRepository {
  login(email: string, password: string): Promise<User>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(token: string, password: string): Promise<void>;
}
