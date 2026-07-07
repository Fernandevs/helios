import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { project: ProjectEntity }

export function FeaturedMediumCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="md:col-span-8 card-satellite p-stack-lg group flex flex-col justify-center"
    >
      <div className="flex flex-col md:flex-row gap-gutter">
        <div className="md:w-1/3">
          <div
            className="w-full h-full min-h-[120px] rounded border border-outline-variant/20 flex items-center justify-center p-stack-md"
            style={{
              background: `radial-gradient(ellipse at center, ${project.accentColor}15 0%, transparent 70%)`,
            }}
          >
            <span
              className="font-label-caps text-label-caps text-center"
              style={{ color: project.accentColor }}
            >
              {project.tag}
            </span>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-stack-sm">
            <h3 className="text-headline-md text-on-surface font-semibold">{project.title}</h3>
            <ArrowUpRight
              className="text-on-surface-variant group-hover:text-primary transition-colors w-5 h-5 shrink-0 ml-2"
            />
          </div>
          <p className="text-body-md text-on-surface-variant mb-stack-lg">{project.description}</p>
          <div className="flex flex-wrap gap-stack-md">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-label-caps text-on-surface-variant border border-outline-variant/30 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
