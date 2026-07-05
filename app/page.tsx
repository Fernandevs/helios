"use client";

import React, { useState, useRef, useEffect } from "react";

// Helper component for mouse-responsive spotlight effect on cards
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`card-satellite relative overflow-hidden group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(192, 193, 255, 0.12), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Home() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"api" | "css">("api");
  const [activeTimelineNode, setActiveTimelineNode] = useState<number>(0);

  const colors = [
    { name: "Primary (Nebula Indigo)", hex: "#c0c1ff", class: "bg-[#c0c1ff] text-[#1000a9]" },
    { name: "Secondary (Stellar Violet)", hex: "#ddb7ff", class: "bg-[#ddb7ff] text-[#490080]" },
    { name: "Tertiary (Quantum Teal)", hex: "#4fdbc8", class: "bg-[#4fdbc8] text-[#003731]" },
    { name: "Error (Nova Red)", hex: "#ffb4ab", class: "bg-[#ffb4ab] text-[#690005]" },
    { name: "Surface Lowest", hex: "#0e0e10", class: "bg-[#0e0e10] text-[#e5e1e4] border border-white/5" },
    { name: "Surface Low", hex: "#1c1b1d", class: "bg-[#1c1b1d] text-[#e5e1e4] border border-white/5" },
    { name: "Surface Base", hex: "#131315", class: "bg-[#131315] text-[#e5e1e4] border border-white/5" },
    { name: "Surface High", hex: "#2a2a2c", class: "bg-[#2a2a2c] text-[#e5e1e4]" },
    { name: "Surface Highest", hex: "#353437", class: "bg-[#353437] text-[#e5e1e4]" },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const timelineEvents = [
    {
      year: "2024",
      title: "Deep Space Launch",
      role: "Lead Platform Engineer",
      desc: "Designed the serverless core engine routing planetary telemetries with sub-millisecond latencies.",
    },
    {
      year: "2025",
      title: "Constellation Router",
      role: "Principal Infrastructure Architect",
      desc: "Architected a global peer-to-peer Edge network resolving routing matrixes with graph theory.",
    },
    {
      year: "2026",
      title: "Luminance Engine",
      role: "Director of Systems Engineering",
      desc: "Formulated the next-generation canvas renderer delivering hardware-accelerated shaders.",
    },
  ];

  const codeSnippets = {
    api: `// Constructing a new Quantum Orbit Connection
import { OrbitManager } from "@constellation/routing";

const connection = await OrbitManager.establish("NEBULA-IX", {
  frequency: "QuantumTeal", // #4fdbc8
  encryption: "TonalLayering",
  allowBloom: true,
});

connection.on("bloom", (flare) => {
  console.log(\`[ORBIT] Metric spike detected: \${flare.amplitude}dB\`);
});`,
    css: `/* Custom Glassmorphic Satellite Card Definition */
.card-satellite {
  background-color: rgba(20, 19, 22, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(144, 143, 160, 0.12);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`
  };

  return (
    <div className="relative min-h-screen bg-background text-on-background bg-star-map bg-noise selection:bg-primary selection:text-on-primary">
      
      {/* Background Nebulae Blurs */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full nebula-indigo filter blur-[100px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full nebula-purple filter blur-[120px] opacity-70" />
      </div>

      <div className="absolute bottom-0 right-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] rounded-full nebula-teal filter blur-[100px] opacity-60" />
        <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] rounded-full nebula-indigo filter blur-[90px]" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-12 md:py-24 z-10">
        
        {/* Header / Hero */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="text-label-caps text-on-surface-variant font-medium">DESIGN SYSTEM // ACTIVE DEV</span>
          </div>
          <h1 className="text-display text-white mb-6 max-w-4xl tracking-tight leading-none">
            Obsidian Orbit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              Design System Showcase
            </span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            A premium, high-fidelity dark design language engineered to reflect the precision of senior-level software architecture. It fuses technical minimalism with a deep-space aesthetic.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="h-12 px-6 rounded bg-primary text-on-primary font-semibold text-body-md hover:bg-primary-container transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(192,193,255,0.25)] cursor-pointer">
              Deploy Mission
            </button>
            <button className="h-12 px-6 rounded border border-outline hover:border-white text-white font-medium text-body-md bg-transparent transition-all hover:bg-white/5 cursor-pointer">
              Read Documentation
            </button>
          </div>
        </header>

        {/* Section Break Link Line */}
        <div className="w-full h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent mb-16" />

        {/* 2-Column Grid for Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Palette & Typography */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Color Palette Showcase */}
            <section>
              <h2 className="text-headline-md text-white mb-2">Tonal Color Palette</h2>
              <p className="text-body-md text-on-surface-variant mb-6">
                Dark-first palette optimized for long technical editing sessions. Click to copy hex value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleCopyColor(color.hex)}
                    className={`flex flex-col justify-between p-4 h-28 rounded text-left transition-all hover:scale-[1.03] cursor-pointer ${color.class}`}
                  >
                    <span className="text-label-caps font-bold text-[10px] opacity-90">{color.name}</span>
                    <div className="flex items-center justify-between w-full mt-auto">
                      <span className="text-code-md font-semibold tracking-wide">{color.hex}</span>
                      {copiedColor === color.hex ? (
                        <span className="text-[10px] text-label-caps font-bold px-1.5 py-0.5 rounded bg-white/20">Copied!</span>
                      ) : (
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Typography Hierarchy */}
            <section>
              <h2 className="text-headline-md text-white mb-6">Typography Scale</h2>
              <div className="border border-outline-variant rounded p-6 bg-surface-container-low flex flex-col gap-6">
                <div>
                  <span className="text-label-caps text-primary block mb-2">Display (Poppins)</span>
                  <p className="text-display text-white">Orbit 64px</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-label-caps text-secondary block mb-2">Headline Large (Poppins)</span>
                  <p className="text-headline-lg text-white">Headline 40px</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-label-caps text-tertiary block mb-2">Headline Medium (Poppins)</span>
                  <p className="text-headline-md text-white">Subtitle 24px</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-label-caps text-on-surface-variant block mb-2">Body Large (Poppins)</span>
                  <p className="text-body-lg text-on-surface">Readable body paragraph text at 18px.</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-label-caps text-on-surface-variant block mb-2">Code Medium & Labels (JetBrains Mono)</span>
                  <div className="flex flex-col gap-2 mt-1">
                    <p className="text-code-md text-tertiary">const routingEngine = new ConstellationRouter();</p>
                    <p className="text-label-caps text-on-surface-variant">METADATA-STAMP // 05.07.26</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Glassmorphic Cards & Code Snippets */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Interactive Cards Showcase */}
            <section>
              <h2 className="text-headline-md text-white mb-2">Glassmorphic Components</h2>
              <p className="text-body-md text-on-surface-variant mb-6">
                Cards react with a subtle cursor bloom spotlight gradient on hover.
              </p>
              
              <div className="flex flex-col gap-4">
                <SpotlightCard className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-label-caps text-primary">MODULE // 01</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(192,193,255,0.8)]" />
                  </div>
                  <h3 className="text-headline-md text-white mb-2 font-medium">Nebula Edge Router</h3>
                  <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                    Designed as a glassmorphic container utilizing tonal layering and inner glows instead of heavy shadows.
                  </p>
                  <div className="text-label-caps text-outline text-[11px] font-semibold">
                    STATUS: SYNCED // SHADER-V4
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-6 border-l-2 border-l-secondary">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-label-caps text-secondary">MODULE // 02</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(221,183,255,0.8)]" />
                  </div>
                  <h3 className="text-headline-md text-white mb-2 font-medium">Stellar Registry</h3>
                  <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                    Components feature a precise 1px highlighted top-border to mimic real-world glass structural edges.
                  </p>
                  <div className="text-label-caps text-outline text-[11px] font-semibold">
                    METRIC: 99.98% SPEED
                  </div>
                </SpotlightCard>
              </div>
            </section>

            {/* Terminal Snippet Box */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-headline-md text-white">Terminal Code Panel</h2>
                <div className="flex bg-surface-container rounded-lg p-0.5 border border-outline-variant">
                  <button
                    onClick={() => setActiveTab("api")}
                    className={`px-3 py-1 text-label-caps text-[11px] rounded transition-all cursor-pointer ${
                      activeTab === "api" ? "bg-surface-container-highest text-white" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    API.TS
                  </button>
                  <button
                    onClick={() => setActiveTab("css")}
                    className={`px-3 py-1 text-label-caps text-[11px] rounded transition-all cursor-pointer ${
                      activeTab === "css" ? "bg-surface-container-highest text-white" : "text-on-surface-variant hover:text-white"
                    }`}
                  >
                    GLASS.CSS
                  </button>
                </div>
              </div>

              {/* Terminal Frame */}
              <div className="rounded-lg bg-[#0c0c0e] border border-outline-variant overflow-hidden shadow-2xl">
                <div className="bg-[#121214] border-b border-outline-variant px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-[11px] font-mono text-outline ml-4">obsidian-shell --active</span>
                </div>
                <div className="p-5 font-mono text-code-md text-on-surface overflow-x-auto select-all whitespace-pre">
                  {codeSnippets[activeTab]}
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Section Break Link Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent my-20" />

        {/* Career Timeline Section */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-headline-lg text-white mb-3">Interactive Orbit Path</h2>
            <p className="text-body-lg text-on-surface-variant">
              Hover or click the orbit nodes to visualize carrier progress and architecture milestones.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 py-8 md:py-16">
            
            {/* Horizontal progress path bar for desktop, vertical for mobile */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-transparent -translate-y-1/2 hidden md:block z-0" />
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:hidden z-0" />

            {timelineEvents.map((ev, index) => {
              const isActive = activeTimelineNode === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTimelineNode(index)}
                  className="relative z-10 flex flex-row md:flex-col items-start gap-4 md:gap-0 md:w-1/3 cursor-pointer group"
                >
                  {/* Timeline Glow Indicator Node */}
                  <div className="flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-primary border-2 border-white shadow-[0_0_15px_rgba(192,193,255,0.8)]" 
                        : "bg-[#1c1b1d] border border-outline hover:border-primary"
                    }`}>
                      <span className={`text-[12px] font-mono font-bold ${isActive ? "text-on-primary" : "text-outline group-hover:text-primary"}`}>
                        {ev.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className={`mt-0 md:mt-6 transition-all duration-300 flex-1 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-60 md:opacity-50 group-hover:opacity-80"
                  }`}>
                    <h3 className="text-headline-md text-white font-medium mt-1">{ev.title}</h3>
                    <div className="text-label-caps text-secondary text-[11px] mb-2 font-semibold">
                      {ev.role}
                    </div>
                    <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

