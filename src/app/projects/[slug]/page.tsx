import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/features/home/presentation/components/Header';
import { Footer } from '@/features/home/presentation/components/Footer';
import { ProjectDetailHero } from '@/features/projects/presentation/components/ProjectDetailHero';
import { ProjectDetailBody } from '@/features/projects/presentation/components/ProjectDetailBody';
import { ParticlesBackground } from '@/core/presentation/components/ParticlesBackground';
import { projectsRepositoryImpl } from '@/features/projects/infrastructure/repositories/projects.repository.impl';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await projectsRepositoryImpl.getBySlug(slug);
  if (!project) return { title: 'Project Not Found | Iván Fernando' };
  return {
    title: `${project.title} | Iván Fernando`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { lang = 'en' } = await searchParams;
  const currentLang = lang === 'es' ? 'es' : 'en';
  const project = await projectsRepositoryImpl.getBySlug(slug);

  if (!project) notFound();

  return (
    <div className="relative min-h-screen bg-background text-on-background bg-star-map bg-noise selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <ParticlesBackground />
      <Header currentLang={currentLang} />
      <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ProjectDetailHero project={project} />
        <ProjectDetailBody project={project} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}
