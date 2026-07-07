import { getSupabaseServerClient } from "@/features/core/infraestructure/adapters/supabase";
import { Mailer } from "@/features/core/domain/services/mailer";
import { AuthDatasource, RawAuthResponse } from "@/features/auth/domain/datasources/auth.datasource";

type AuthDatasourceProps = {
  mailer: Mailer;
};

export class AuthDatasourceSupabase implements AuthDatasource {
  private readonly mailer: Mailer;

  constructor({ mailer }: AuthDatasourceProps) {
    this.mailer = mailer;
  }

  async login(email: string, password: string): Promise<RawAuthResponse> {
    const supabase = await getSupabaseServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return {
      user: data.user
        ? {
          id: data.user.id,
          email: data.user.email,
          user_metadata: (data.user.user_metadata as Record<string, unknown>) || {},
          created_at: data.user.created_at,
        }
        : null,
      session: data.session
        ? {
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
          expires_in: data.session.expires_in,
        }
        : null,
    };
  }

  forgotPassword(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  resetPassword(token: string, password: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
