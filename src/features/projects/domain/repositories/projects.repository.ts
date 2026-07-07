import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

export interface ProjectsRepository {
  getAll(): Promise<ProjectEntity[]>;
  getFeatured(): Promise<ProjectEntity[]>;
  getBySlug(slug: string): Promise<ProjectEntity | null>;
}
