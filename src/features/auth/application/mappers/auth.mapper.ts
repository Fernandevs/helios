import { RawUser } from "../../domain/datasources/auth.datasource";
import { User } from "../../domain/entities/user.entity";

export class AuthMapper {
  static toEntity(rawUser: RawUser): User {
    return {
      id: rawUser.id,
      email: rawUser.email || "",
      metadata: rawUser.user_metadata,
      createdAt: rawUser.created_at,
    };
  }
}
