export function Helios({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Glow / Halo */}
      <circle cx="50" cy="50" r="48" fill="url(#haloGradient)" />

      {/* Grid / Tech pattern */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

      {/* Core Energy */}
      <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.1" />

      {/* Orbital Rings */}
      <ellipse cx="50" cy="50" rx="40" ry="12" transform="rotate(30 50 50)" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="40" ry="12" transform="rotate(-30 50 50)" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="40" ry="12" transform="rotate(90 50 50)" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" />

      {/* The H (Helios) */}
      <path
        d="M 40 36 L 40 64 M 60 36 L 60 64 M 40 50 L 60 50"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small Stars / Nodes */}
      <circle cx="20" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="80" cy="70" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="75" cy="35" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="25" cy="65" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="15" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="50" cy="85" r="1.5" fill="currentColor" opacity="0.5" />

      <defs>
        <radialGradient id="haloGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
