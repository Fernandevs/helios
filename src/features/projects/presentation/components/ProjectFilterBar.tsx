'use client';

interface Props {
  techs: string[];
  active: string | null;
  onChange: (tech: string | null) => void;
}

const btnBase =
  'font-label-caps text-label-caps px-3 py-1.5 border transition-all cursor-pointer';
const btnActive = 'border-primary text-primary bg-primary/10';
const btnIdle =
  'border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-primary';

export function ProjectFilterBar({ techs, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-stack-lg">
      <button
        id="filter-all"
        onClick={() => onChange(null)}
        className={`${btnBase} ${active === null ? btnActive : btnIdle}`}
      >
        All
      </button>
      {techs.map((t) => (
        <button
          key={t}
          id={`filter-${t.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => onChange(active === t ? null : t)}
          className={`${btnBase} ${active === t ? btnActive : btnIdle}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
