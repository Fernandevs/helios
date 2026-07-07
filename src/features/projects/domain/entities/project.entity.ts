export interface ProjectEntity {
  id: string;
  slug: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  status: 'active' | 'archived' | 'wip';
  imageUrl?: string;
  accentColor: string;
  featured: boolean;
  year: string;
  githubUrl?: string;
  demoUrl?: string;
}
