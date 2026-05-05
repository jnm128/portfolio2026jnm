
import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Observe package cards for natural fall animation
    const packageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-natural-fall');
            element.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe project cards for fall animation (same as FAQ cards)
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-natural-fall');
            element.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Setup package cards
    setTimeout(() => {
      const packageCards = document.querySelectorAll('[data-package-card]');
      packageCards.forEach((card, index) => {
        const element = card as HTMLElement;
        element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        element.style.transitionDelay = `${index * 150}ms`;
        packageObserver.observe(element);
      });
    }, 100);

    // Setup project cards with fall animation
    setTimeout(() => {
      const projectCards = document.querySelectorAll('[data-project-card]');
      projectCards.forEach((card, index) => {
        const element = card as HTMLElement;
        element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        element.style.transitionDelay = `${index * 200}ms`;
        projectObserver.observe(element);
      });
    }, 100);

    // Observe divider lines for expand animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const dividerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (!prefersReducedMotion) {
              element.classList.add('animate-expand-width');
              element.classList.remove('scale-x-0');
            } else {
              element.classList.remove('scale-x-0');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Setup divider lines
    const dividers = document.querySelectorAll('[data-section-divider]');
    dividers.forEach((divider) => {
      const element = divider as HTMLElement;
      element.classList.add('scale-x-0', 'origin-left');
      dividerObserver.observe(element);
    });

    return () => {
      observer.disconnect();
      packageObserver.disconnect();
      projectObserver.disconnect();
      dividerObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimations;
