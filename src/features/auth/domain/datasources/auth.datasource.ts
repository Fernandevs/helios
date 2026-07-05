export interface RawUser {
  id: string;
  email?: string;
  user_metadata: Record<string, unknown>;
  created_at: string;
}

export interface RawAuthResponse {
  user: RawUser | null;
  session: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  } | null;
}

export interface AuthDatasource {
  login(email: string, password: string): Promise<RawAuthResponse>;
}
