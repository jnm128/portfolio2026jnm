import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme, ThemeMode } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  onDark?: boolean;
}

const SWATCHES: { mode: ThemeMode; label: string; color: string }[] = [
  { mode: 'blue', label: 'Blue', color: '#F5F2EE' },
  { mode: 'neutral', label: 'Neutral', color: '#E6DFD2' },
  { mode: 'dark', label: 'Dark', color: '#130F0C' },
];

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, onDark }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        'inline-flex items-center gap-1 rounded-full border p-1 transition-colors',
        onDark ? 'border-background/30' : 'border-border',
        className,
      )}
    >
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
              'h-4 w-4 rounded-full transition-all duration-200',
              isActive
                ? onDark
                  ? 'ring-2 ring-background ring-offset-1 ring-offset-transparent'
                  : 'ring-2 ring-title ring-offset-1 ring-offset-transparent'
                : 'opacity-70 hover:opacity-100',
              mode !== 'dark' && 'border border-border/60',
            )}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

export default ThemeToggle;
