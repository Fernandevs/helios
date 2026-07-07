export interface User {
  id: string;
  email: string;
  metadata: Record<string, unknown>;
  createdAt: string;
}
