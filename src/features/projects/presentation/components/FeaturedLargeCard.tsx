import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { project: ProjectEntity }

export function FeaturedLargeCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="md:col-span-8 card-satellite group overflow-hidden relative flex flex-col"
    >
      <div className="p-stack-lg pb-4">
        <div className="flex justify-between items-start mb-4">
          <span
            className="font-label-caps text-label-caps px-stack-sm py-1 inline-block"
            style={{ color: project.accentColor, background: `${project.accentColor}14` }}
          >
            {project.tag}
          </span>
          <ArrowUpRight
            className="text-on-surface-variant group-hover:text-primary group-hover:scale-110 transition-all w-5 h-5 shrink-0"
          />
        </div>
        <h3 className="text-headline-md text-on-surface font-semibold">{project.title}</h3>
      </div>

      <div className="w-full h-52 relative overflow-hidden">
        {project.imageUrl ? (
          <Image
            alt={project.title}
            src={project.imageUrl}
            fill
            className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${project.accentColor}20 0%, transparent 70%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent" />
      </div>

      <div className="p-stack-lg pt-4">
        <p className="text-body-md text-on-surface-variant mb-stack-md line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-stack-md flex-wrap">
          {project.tech.slice(0, 3).map((t) => (
            <code key={t} className="text-label-caps" style={{ color: project.accentColor }}>
              {t}
            </code>
          ))}
        </div>
      </div>
    </Link>
  );
}
