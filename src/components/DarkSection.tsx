import React, { useRef, useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import Collab from './Collab';

const DarkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="transition-colors duration-1000"
      style={{ backgroundColor: isVisible ? 'hsl(var(--foreground))' : 'hsl(var(--background))' }}
    >
      <Testimonials />
      <Collab />
    </section>
  );
};

export default DarkSection;
