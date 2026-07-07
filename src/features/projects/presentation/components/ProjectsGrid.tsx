'use client';

import { useState, useMemo } from 'react';
import { ProjectFilterBar } from '@/features/projects/presentation/components/ProjectFilterBar';
import { ProjectListCard } from '@/features/projects/presentation/components/ProjectListCard';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface Props { projects: ProjectEntity[] }

export function ProjectsGrid({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allTechs = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    [projects]
  );

  const filtered = useMemo(
    () => (activeFilter ? projects.filter((p) => p.tech.includes(activeFilter)) : projects),
    [projects, activeFilter]
  );

  return (
    <div>
      <ProjectFilterBar techs={allTechs} active={activeFilter} onChange={setActiveFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-on-surface-variant text-body-md text-center py-24">
          No projects found for this technology.
        </p>
      )}
    </div>
  );
}
