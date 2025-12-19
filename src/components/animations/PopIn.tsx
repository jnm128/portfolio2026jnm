import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface PopInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const PopIn: React.FC<PopInProps> = ({
  children,
  className,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
          } else if (!entry.isIntersecting && !once && hasAnimated.current) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.85)';
            hasAnimated.current = false;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: 0,
        transform: 'scale(0.85)',
        transition: `opacity ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default PopIn;
