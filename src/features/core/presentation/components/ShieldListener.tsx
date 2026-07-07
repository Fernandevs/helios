'use client';

import { ShieldEffects } from '@/features/core/presentation/components/ShieldEffects';
import { ShieldLetterBurst } from '@/features/core/presentation/components/ShieldLetterBurst';
import { useShieldListener } from '@/features/core/presentation/hooks/useShieldListener';

export function ShieldListener() {
  const {
    isOpen,
    secret,
    setSecret,
    activeEffect,
    burstWord,
    setBurstWord,
    handleSubmit,
  } = useShieldListener();

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 px-8 py-6 rounded-xl bg-black/70 border border-white/10 shadow-2xl"
          >
            <input
              type="text"
              autoFocus
              autoComplete="off"
              spellCheck={false}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="rain · snow · particles · fireworks · stars"
              className="w-72 bg-transparent border-b border-white/20 focus:border-white/50 outline-none px-2 py-1 font-mono text-sm text-center text-white/70 placeholder:text-white/25 transition-colors"
            />
            <button type="submit" className="hidden">Go</button>
          </form>
        </div>
      )}
    </>
  );
}

