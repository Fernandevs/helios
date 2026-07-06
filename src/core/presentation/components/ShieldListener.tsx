'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function ShieldListener() {
  const [isOpen, setIsOpen] = useState(false);
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const lastDoubleClick = React.useRef<number>(0);

  useEffect(() => {
    const handleDoubleClick = () => {
      lastDoubleClick.current = Date.now();
    };

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      // Check if Space was pressed within 2 seconds of a double click
      if (e.code === 'Space' && Date.now() - lastDoubleClick.current < 2000) {
        e.preventDefault();
        
        // Check if user is locked out
        const lockUntil = localStorage.getItem('_h_shield_lock');
        if (lockUntil && Date.now() < parseInt(lockUntil, 10)) {
          return; // Silently ignore if locked
        }

        setIsOpen((prev) => !prev);
        setSecret('');
        setError(false);
        lastDoubleClick.current = 0; // Reset to avoid multiple triggers
      }
      
      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch('/api/shield/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.redirectUrl) {
          setIsOpen(false);
          router.push(data.redirectUrl);
          router.refresh();
        } else {
          handleInvalidAttempt();
        }
      } else {
        handleInvalidAttempt();
      }
    } catch (err) {
      handleInvalidAttempt();
    }
  };

  const handleInvalidAttempt = () => {
    // Lock for 5 minutes
    localStorage.setItem('_h_shield_lock', (Date.now() + 5 * 60 * 1000).toString());
    setIsOpen(false);
    setSecret('');
    router.push('/404');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="bg-background border border-on-background/20 rounded-lg p-6 w-full max-w-sm shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            autoFocus
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter access sequence"
            className="w-full bg-transparent border-b border-on-background/40 focus:border-primary outline-none px-2 py-1 font-mono text-sm"
          />
          {error && (
            <p className="text-red-500 text-xs">Invalid sequence.</p>
          )}
          <button type="submit" className="hidden">Unlock</button>
        </form>
      </div>
    </div>
  );
}
