export interface UserEntity {
  id: string;
  email: string;
  metadata: Record<string, unknown>;
  createdAt: string;
}
