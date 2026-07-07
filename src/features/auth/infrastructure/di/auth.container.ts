import { LoginUseCase } from "@/features/auth/application/use-cases/login.use-case";
import {AuthDatasource} from "@/features/auth/domain/datasources/auth.datasource";
import {AuthRepository} from "@/features/auth/domain/repositories/auth.repository";
import {AuthDatasourceSupabase} from "@/features/auth/infrastructure/datasources/auth.datasource.supabase";
import {AuthRepositoryImpl} from "@/features/auth/infrastructure/repositories/auth.repository.impl";
import {Mailer} from "@/core/domain/services/mailer";

type AuthContainerProps = {
  mailer: Mailer;
};

class AuthContainer {
  private readonly _datasource: AuthDatasource;
  private readonly _repository: AuthRepository;
  private readonly _loginUseCase: LoginUseCase;

  constructor({ mailer }: AuthContainerProps) {
    this._datasource = new AuthDatasourceSupabase({ mailer: mailer });
    this._repository = new AuthRepositoryImpl({ datasource: this._datasource });
    this._loginUseCase = new LoginUseCase({ repository: this._repository });
  }

  public get loginUseCase(): LoginUseCase {
    return this._loginUseCase;
  }
}
