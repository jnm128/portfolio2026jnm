import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const MinoLoader: React.FC = () => {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const fadeT = window.setTimeout(() => setLeaving(true), 1100);
    const unmountT = window.setTimeout(() => setMounted(false), 1600);
    return () => {
      window.clearTimeout(fadeT);
      window.clearTimeout(unmountT);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={cn(
        'fixed inset-0 z-[300] flex items-center justify-center bg-background transition-opacity duration-500',
        leaving ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
    >
      <div className="relative flex items-center justify-center">
        {/* ripple rings */}
        <span
          className="absolute h-16 w-16 rounded-full border border-foreground/40 animate-ripple"
          style={{ animationDelay: '0s' }}
        />
        <span
          className="absolute h-16 w-16 rounded-full border border-foreground/40 animate-ripple"
          style={{ animationDelay: '0.5s' }}
        />
        <span
          className="absolute h-16 w-16 rounded-full border border-foreground/40 animate-ripple"
          style={{ animationDelay: '1s' }}
        />
        {/* the o */}
        <span className="relative font-sans font-bold text-title text-5xl leading-none">
          o
        </span>
      </div>
    </div>
  );
};

export default MinoLoader;
