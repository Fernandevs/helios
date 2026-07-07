export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      inicio: "Home",
      projects: "Featured Projects",
      techZenith: "Technological Zenith",
      career: "Career Trajectory",
      contact: "Contact Mission Control",
    },
    hero: {
      tag: "System Architect / V0.4.2-Alpha",
      title: "Building scalable systems and exploring complex digital universes.",
      description: "Iván Fernando crafts high-density software architectures that bridge the gap between abstract mathematical models and production-ready resilience.",
      stats: {
        experience: "Years Experience",
        projects: "Projects Launched",
        certifications: "Certifications",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected mission logs from the software frontier.",
      viewAll: "View All Archives ->",
    },
    techZenith: {
      title: "Technological Zenith",
      description: "Navigating the vast expanse of modern development with a specialized toolset calibrated for precision and scale.",
      skills: {
        distributed: "Distributed Systems",
        cloud: "Cloud Architecture",
        fullstack: "Full-stack Frameworks",
      },
      coreEngine: "CORE ENGINE",
    },
    career: {
      title: "Career Trajectory",
      jobs: [
        {
          period: "2021 — PRESENT",
          title: "Lead Systems Engineer",
          company: "Astra-Tech Solutions",
          description: "Spearheading the migration of monolith services to a decentralized micro-frontend architecture using Next.js and Go.",
        },
        {
          period: "2018 — 2021",
          title: "Senior Backend Developer",
          company: "CloudScale Data",
          description: "Architected a proprietary data streaming platform that handles 500k events/sec with minimal jitter.",
        },
        {
          period: "2014 — 2018",
          title: "Software Engineer",
          company: "Innova Soft",
          description: "Implemented responsive dashboard systems and integrated 3rd party financial APIs for global fintech clients.",
        },
      ],
    },
    footer: {
      copy: "© 2024 Engineering the Digital Universe. System Status: Nominal.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        docs: "Documentation",
        changelog: "Changelog",
      },
    },
  },
  es: {
    nav: {
      inicio: "Inicio",
      projects: "Proyectos Destacados",
      techZenith: "Cénit Tecnológico",
      career: "Trayectoria Profesional",
      contact: "Contactar a Control de Misión",
    },
    hero: {
      tag: "Arquitecto de Sistemas / V0.4.2-Alpha",
      title: "Construyendo sistemas escalables y explorando universos digitales complejos.",
      description: "Iván Fernando diseña arquitecturas de software de alta densidad que cierran la brecha entre los modelos matemáticos abstractos y la resiliencia lista para producción.",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Lanzados",
        certifications: "Certificaciones",
      },
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Registros de misión seleccionados de la frontera del software.",
      viewAll: "Ver Todos los Archivos ->",
    },
    techZenith: {
      title: "Cénit Tecnológico",
      description: "Navegando por la vasta extensión del desarrollo moderno con un conjunto de herramientas especializadas calibradas para la precisión y la escala.",
      skills: {
        distributed: "Sistemas Distribuidos",
        cloud: "Arquitectura Cloud",
        fullstack: "Frameworks Full-stack",
      },
      coreEngine: "MOTOR CENTRAL",
    },
    career: {
      title: "Trayectoria Profesional",
      jobs: [
        {
          period: "2021 — PRESENTE",
          title: "Ingeniero de Sistemas Principal",
          company: "Astra-Tech Solutions",
          description: "Liderando la migración de servicios monolíticos a una arquitectura de microfrontends descentralizada utilizando Next.js y Go.",
        },
        {
          period: "2018 — 2021",
          title: "Desarrollador Backend Senior",
          company: "CloudScale Data",
          description: "Diseño de una plataforma de transmisión de datos patentada que maneja 500k eventos/seg con una fluctuación (jitter) mínima.",
        },
        {
          period: "2014 — 2018",
          title: "Ingeniero de Software",
          company: "Innova Soft",
          description: "Implementación de sistemas de paneles de control adaptables e integración de APIs financieras de terceros para clientes globales de tecnología financiera (fintech).",
        },
      ],
    },
    footer: {
      copy: "© 2024 Diseñando el Universo Digital. Estado del Sistema: Nominal.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        docs: "Documentación",
        changelog: "Historial de Cambios",
      },
    },
  },
} as const;
