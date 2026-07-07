import Link from 'next/link';
import { Activity, Terminal } from 'lucide-react';
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
  const [large, small1, small2, medium] = projects;

  return (
    <section
      id="featured-projects"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap scroll-mt-24"
    >
      <div className="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 className="text-headline-lg text-on-surface font-semibold">{t.title}</h2>
          <p className="text-body-md text-on-surface-variant">{t.subtitle}</p>
        </div>
        <Link
          href="/projects"
          className="font-label-caps text-label-caps text-primary hover:underline transition-all"
        >
          {t.viewAll}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {large && <FeaturedLargeCard project={large} />}
        {small1 && <FeaturedSmallCard project={small1} icon={Activity} />}
        {small2 && <FeaturedSmallCard project={small2} icon={Terminal} />}
        {medium && <FeaturedMediumCard project={medium} />}
      </div>
    </section>
  );
}
