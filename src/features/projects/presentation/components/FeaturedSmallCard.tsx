import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props {
  project: ProjectEntity;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

export function FeaturedSmallCard({ project, icon: Icon }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="md:col-span-4 card-satellite p-stack-lg group flex flex-col justify-between"
    >
      <div>
        <div
          className="mb-stack-md p-2.5 w-11 h-11 rounded-lg flex items-center justify-center"
          style={{ background: `${project.accentColor}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
        </div>
        <h3 className="text-headline-md text-on-surface mb-stack-sm font-semibold">
          {project.title}
        </h3>
        <p className="text-body-md text-on-surface-variant">{project.description}</p>
      </div>

      <div className="mt-stack-lg pt-stack-lg border-t border-white/5">
        <div className="flex justify-between items-center">
          <span className="font-label-caps text-on-surface-variant">
            {project.tech.slice(0, 2).join(' / ')}
          </span>
          <ArrowUpRight
            className="text-on-surface-variant group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all w-5 h-5"
          />
        </div>
      </div>
    </Link>
  );
}
