import Link from 'next/link';
import { ArrowUpRight, Circle } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { project: ProjectEntity }

const STATUS: Record<ProjectEntity['status'], string> = {
  active: 'Active',
  archived: 'Archived',
  wip: 'In Progress',
};

export function ProjectListCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-satellite p-stack-lg group flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span
            className="font-label-caps text-label-caps px-2 py-1"
            style={{ color: project.accentColor, background: `${project.accentColor}12` }}
          >
            {project.tag}
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant/40">
            {project.year}
          </span>
        </div>
        <h3 className="text-headline-md text-on-surface font-semibold mb-2">{project.title}</h3>
        <p className="text-body-md text-on-surface-variant line-clamp-3 mb-4">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-label-caps text-xs text-on-surface-variant border border-outline-variant/30 px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-stack-md border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Circle
              className="w-2 h-2 fill-current"
              style={{ color: project.status === 'active' ? '#34d399' : project.status === 'wip' ? '#fb923c' : '#908fa0' }}
            />
            <span className="font-label-caps text-xs text-on-surface-variant/50">
              {STATUS[project.status]}
            </span>
          </div>
          <ArrowUpRight
            className="text-on-surface-variant group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all w-5 h-5"
          />
        </div>
      </div>
    </Link>
  );
}
