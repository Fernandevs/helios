import { Network, Database } from "lucide-react";
import { LanguageSwitcher } from "@/core/components/LanguageSwitcher";
import { translations, Language } from "@/core/translations/dictionary";

interface HeaderProps {
  currentLang: Language;
}

export function Header({ currentLang }: HeaderProps) {
  const t = translations[currentLang].nav;

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-margin-desktop h-20 bg-surface/60 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center gap-stack-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-8 h-8 hover:rotate-12 transition-transform duration-500 cursor-pointer">
          <defs>
            <linearGradient id="headerSunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c0c1ff" />
              <stop offset="50%" stopColor="#ddb7ff" />
              <stop offset="100%" stopColor="#4fdbc8" />
            </linearGradient>
            <radialGradient id="headerGlowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#131315" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="16" cy="16" r="16" fill="url(#headerGlowGradient)" />
          <circle cx="16" cy="16" r="13" stroke="#c0c1ff" strokeWidth={0.75} strokeOpacity={0.3} strokeDasharray="2 2" />
          <path d="M10,6 C13,10 13,22 10,26" stroke="url(#headerSunGradient)" strokeWidth={2} strokeLinecap="round" />
          <path d="M22,6 C19,10 19,22 22,26" stroke="url(#headerSunGradient)" strokeWidth={2} strokeLinecap="round" />
          <path d="M12.3,16 L19.7,16" stroke="url(#headerSunGradient)" strokeWidth={2} strokeLinecap="round" />
          <circle cx="16" cy="16" r="3.5" fill="#c0c1ff" />
          <circle cx="16" cy="16" r="2" fill="#e5e1e4" />
          <circle cx="16" cy="7.5" r="1" fill="#4fdbc8" />
          <circle cx="16" cy="24.5" r="1" fill="#4fdbc8" />
          <circle cx="7.5" cy="16" r="1" fill="#ddb7ff" />
          <circle cx="24.5" cy="16" r="1" fill="#ddb7ff" />
        </svg>
        <span className="text-headline-md font-bold tracking-tighter text-primary">
          Helios
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-stack-lg">
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#inicio"
        >
          {t.inicio}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#featured-projects"
        >
          {t.projects}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#technological-zenith"
        >
          {t.techZenith}
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#career-trajectory"
        >
          {t.career}
        </a>
      </nav>
      <div className="flex items-center gap-stack-md">
        <LanguageSwitcher />
        <button
          aria-label="Settings Ethernet"
          className="text-on-surface-variant hover:text-primary transition-all p-2 flex items-center justify-center"
        >
          <Network className="w-5 h-5" />
        </button>
        <button
          aria-label="Database Status"
          className="text-on-surface-variant hover:text-primary transition-all p-2 flex items-center justify-center"
        >
          <Database className="w-5 h-5" />
        </button>
        <button className="hidden lg:block bg-primary text-on-primary font-label-caps text-label-caps px-stack-lg py-stack-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
          {t.contact}
        </button>
      </div>
    </header>
  );
}

