import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { project: ProjectEntity }

const STATUS: Record<ProjectEntity['status'], string> = {
  active: 'Active',
  archived: 'Archived',
  wip: 'In Progress',
};

export function ProjectDetailHero({ project }: Props) {
  return (
    <div className="mb-stack-lg">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors mb-stack-lg group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Projects
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span
          className="font-label-caps text-label-caps px-2 py-1"
          style={{ color: project.accentColor, background: `${project.accentColor}15` }}
        >
          {project.tag}
        </span>
        <span className="font-label-caps text-label-caps text-on-surface-variant/40">{project.year}</span>
        <span className="text-on-surface-variant/30">·</span>
        <span className="font-label-caps text-label-caps text-on-surface-variant/40">
          {STATUS[project.status]}
        </span>
      </div>

      <h1 className="text-display text-on-surface font-bold mb-8">{project.title}</h1>

      <div className="w-full h-80 rounded-xl overflow-hidden relative border border-outline-variant/20">
        {project.imageUrl ? (
          <Image
            alt={project.title}
            src={project.imageUrl}
            fill
            className="object-cover opacity-60"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${project.accentColor}22 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, ${project.accentColor}12 0%, transparent 60%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>
    </div>
  );
}
