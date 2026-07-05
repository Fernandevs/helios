import React from "react";
import { Network, Database } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-margin-desktop h-20 bg-surface/60 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center gap-stack-md">
        <span className="text-headline-md font-bold tracking-tighter text-primary">
          Digital Universe
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-stack-lg">
        <a
          className="text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps"
          href="#"
        >
          Trajectory
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#"
        >
          Manifest
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#"
        >
          Terminal
        </a>
        <a
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors"
          href="#"
        >
          Logs
        </a>
      </nav>
      <div className="flex items-center gap-stack-md">
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
          Contact Mission Control
        </button>
      </div>
    </header>
  );
}
