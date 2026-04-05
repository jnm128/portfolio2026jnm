import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/animations/FadeIn';

interface SplitSectionProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({ label, children, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-12', className)}>
      <FadeIn>
        <div className="flex items-start md:sticky md:top-32">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            {label}
          </span>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div>{children}</div>
      </FadeIn>
    </div>
  );
};

export default SplitSection;
