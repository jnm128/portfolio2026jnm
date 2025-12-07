
import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            element.classList.add('animate-fade-in-up');
            element.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

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

    // Parallax effect for hero background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector('section:first-child');
      const heroImage = heroSection?.querySelector('img');
      
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      packageObserver.disconnect();
      projectObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
