import Link from 'next/link';
import { GitFork, ExternalLink } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { project: ProjectEntity }

export function ProjectDetailBody({ project }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="md:col-span-2">
        <h2 className="text-headline-md text-on-surface font-semibold mb-stack-md">Overview</h2>
        {project.longDescription.split('\n\n').map((para, i) => (
          <p key={i} className="text-body-lg text-on-surface-variant leading-relaxed mb-5">
            {para}
          </p>
        ))}

        {project.highlights.length > 0 && (
          <div className="mt-stack-lg">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-stack-md">
              Key Highlights
            </h3>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: project.accentColor }}
                  />
                  <span className="text-body-md text-on-surface-variant">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-gutter">
        <div className="card-satellite p-stack-lg">
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-stack-md">
            Tech Stack
          </p>
          <div className="flex flex-col gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-label-caps text-sm border-l-2 pl-3 py-1"
                style={{ borderColor: project.accentColor, color: project.accentColor }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {(project.githubUrl ?? project.demoUrl) && (
          <div className="card-satellite p-stack-lg flex flex-col gap-3">
            <p className="font-label-caps text-label-caps text-on-surface-variant">Links</p>
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                <GitFork className="w-4 h-4" /> Source Code
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
