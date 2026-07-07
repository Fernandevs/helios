'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldEffects, EffectType } from '@/core/presentation/components/ShieldEffects';
import { ShieldLetterBurst } from '@/core/presentation/components/ShieldLetterBurst';

const VISUAL_EFFECTS: EffectType[] = ['rain', 'snow', 'particles', 'fireworks', 'stars'];

export function ShieldListener() {
  const [isOpen, setIsOpen] = useState(false);
  const [secret, setSecret] = useState('');
  const [activeEffect, setActiveEffect] = useState<EffectType | null>(null);
  const [burstWord, setBurstWord] = useState<string | null>(null);
  const lastDoubleClick = React.useRef<number>(0);
  const router = useRouter();

  const closeInput = useCallback(() => {
    setIsOpen(false);
    setSecret('');
  }, []);

  useEffect(() => {
    const handleDoubleClick = () => {
      lastDoubleClick.current = Date.now();
    };

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.code === 'Space' && Date.now() - lastDoubleClick.current < 2000) {
        e.preventDefault();
        const lockUntil = localStorage.getItem('_h_shield_lock');
        if (lockUntil && Date.now() < parseInt(lockUntil, 10)) return;
        setIsOpen((prev) => !prev);
        setSecret('');
        lastDoubleClick.current = 0;
      }
      if (e.key === 'Escape' && isOpen) closeInput();
    };

    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeInput]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = secret.trim().toLowerCase();
    if (!value) { closeInput(); return; }

    // Toggle visual effect
    if (VISUAL_EFFECTS.includes(value as EffectType)) {
      const typed = value as EffectType;
      setActiveEffect((prev) => (prev === typed ? null : typed));
      closeInput();
      return;
    }

    // Try shield secret
    try {
      const response = await fetch('/api/shield/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secret.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.redirectUrl) {
          closeInput();
          router.push(data.redirectUrl);
          router.refresh();
          return;
        }
      }
    } catch {
      // silently fail
    }

    // Invalid: show letter burst and close
    setBurstWord(value);
    closeInput();
  };

  return (
    <>
      <ShieldEffects effect={activeEffect} />

      {burstWord && (
        <ShieldLetterBurst
          word={burstWord}
          onDone={() => setBurstWord(null)}
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center pb-12 pointer-events-none">
          <form
            onSubmit={handleSubmit}
            className="pointer-events-auto"
          >
            <input
              type="text"
              autoFocus
              autoComplete="off"
              spellCheck={false}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="rain · snow · particles · fireworks · stars"
              className="w-80 bg-transparent border-b border-on-background/30 focus:border-primary/70 outline-none px-2 py-1 font-mono text-xs text-center text-on-background/60 placeholder:text-on-background/25 transition-colors"
            />
            <button type="submit" className="hidden">Go</button>
          </form>
        </div>
      )}
    </>
  );
}
