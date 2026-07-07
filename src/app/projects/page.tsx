import type { Metadata } from 'next';
import { Header } from '@/features/home/presentation/components/Header';
import { Footer } from '@/features/home/presentation/components/Footer';
import { ProjectsGrid } from '@/features/projects/presentation/components/ProjectsGrid';
import { ParticlesBackground } from '@/core/presentation/components/ParticlesBackground';
import { projectsRepositoryImpl } from '@/features/projects/infrastructure/repositories/projects.repository.impl';

export const metadata: Metadata = {
  title: 'Projects | Iván Fernando',
  description: 'All projects, experiments, and missions from the software frontier.',
};

export default async function ProjectsPage() {
  const projects = await projectsRepositoryImpl.getAll();

  return (
    <div className="relative min-h-screen bg-background text-on-background bg-star-map bg-noise selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <ParticlesBackground />
      <Header currentLang="en" />
      <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-3 py-1 inline-block mb-4">
            MISSION ARCHIVE
          </span>
          <h1 className="text-display text-on-surface font-bold mb-4">All Projects</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Every system engineered, every mission launched — documented from concept to production.
          </p>
        </div>
        <ProjectsGrid projects={projects} />
      </main>
      <Footer currentLang="en" />
    </div>
  );
}

