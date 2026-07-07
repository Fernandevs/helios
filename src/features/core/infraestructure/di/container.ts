// src/core/di/container.ts
import { SupabaseClient } from "@supabase/supabase-js";
import { LoginUseCase } from "@/modules/auth/application/login.usecase";

type SupabaseClientFactory = () => Promise<SupabaseClient> | SupabaseClient;

class AppContainer {
  private _supabaseServerFactory!: SupabaseClientFactory;
  private _supabaseBrowserFactory!: SupabaseClientFactory;

  public init(config: {
    supabaseServerFactory: SupabaseClientFactory;
    supabaseBrowserFactory: SupabaseClientFactory;
  }) {
    this._supabaseServerFactory = config.supabaseServerFactory;
    this._supabaseBrowserFactory = config.supabaseBrowserFactory;
  }

  public async getServerClient(): Promise<SupabaseClient> {
    return this._supabaseServerFactory();
  }

  public async getBrowserClient(): Promise<SupabaseClient> {
    return this._supabaseBrowserFactory();
  }

  public get auth() {
    return {
      getLoginUseCase: async () => {
        const supabase = await this.getServerClient();
        return new LoginUseCase(supabase.auth);
      }
    };
  }
}

export const container = new AppContainer();
