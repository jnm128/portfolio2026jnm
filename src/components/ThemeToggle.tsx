import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme, ThemeMode } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const SWATCHES: { mode: ThemeMode; label: string; color: string }[] = [
  { mode: 'blue', label: 'Blue', color: '#4F6A80' },
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
        'fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center gap-4',
        className,
      )}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
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
                'relative z-10 rounded-full transition-all duration-200 border border-foreground/30',
                isActive
                  ? 'h-[18px] w-[18px] ring-2 ring-foreground ring-offset-2 ring-offset-background'
                  : 'h-3.5 w-3.5 hover:scale-110',
              )}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;
