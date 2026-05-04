import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme, ThemeMode } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const SWATCHES: { mode: ThemeMode; label: string; color: string }[] = [
  { mode: 'blue', label: 'Blue', color: '#F5F2EE' },
  { mode: 'neutral', label: 'Neutral', color: '#E6DFD2' },
  { mode: 'dark', label: 'Dark', color: '#211B16' },
];

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-4',
        className,
      )}
    >
      <div className="relative flex items-center">
        {/* connecting line */}
        <span
          aria-hidden
          className="absolute left-2 right-2 top-1/2 h-px -translate-y-1/2 bg-foreground/30"
        />
        <div className="relative flex items-center gap-5">
          {SWATCHES.map(({ mode, label, color }) => {
            const isActive = theme === mode;
            return (
              <button
                key={mode}
                type="button"
                role="radio"
                aria-checked={isActive}
                aria-label={label}
                title={label}
                onClick={() => setTheme(mode)}
                className={cn(
                  'relative rounded-full transition-all duration-200 border border-foreground/30',
                  isActive
                    ? 'h-[18px] w-[18px] ring-2 ring-foreground ring-offset-2 ring-offset-transparent'
                    : 'h-3.5 w-3.5 opacity-70 hover:opacity-100',
                )}
                style={{ backgroundColor: color }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
