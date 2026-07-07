"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { FeaturedLargeCard } from '@/features/projects/presentation/components/FeaturedLargeCard';
import { FeaturedSmallCard } from '@/features/projects/presentation/components/FeaturedSmallCard';
import { FeaturedMediumCard } from '@/features/projects/presentation/components/FeaturedMediumCard';
import { translations, Language } from '@/core/application/translations/dictionary';
import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';

interface ProjectsSectionProps {
  currentLang: Language;
  projects: ProjectEntity[];
}

export function ProjectsSection({ currentLang, projects }: ProjectsSectionProps) {
  const t = translations[currentLang].projects;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / 4);
  const startIndex = currentPage * 4;
  const currentProjects = projects.slice(startIndex, startIndex + 4);

  const [large, small1, small2, medium] = currentProjects;

  const next = () => {
    setCurrentPage((p) => (p + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="featured-projects"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">
        <div>
          <h2 className="text-headline-lg text-on-surface font-semibold">{t.title}</h2>
          <p className="text-body-md text-on-surface-variant">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-4 self-end md:self-auto">
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Next projects"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
          <Link
            href="/projects"
            className="font-label-caps text-label-caps text-primary hover:underline transition-all hidden md:block ml-2"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {large && <FeaturedLargeCard project={large} />}
        {small1 && <FeaturedSmallCard project={small1} icon={Activity} />}
        {small2 && <FeaturedSmallCard project={small2} icon={Terminal} />}
        {medium && <FeaturedMediumCard project={medium} />}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/projects"
          className="font-label-caps text-label-caps text-primary hover:underline transition-all"
        >
          {t.viewAll}
        </Link>
      </div>
    </section>
  );
}
