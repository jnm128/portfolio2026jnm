import React, { useRef, useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import Community from './Community';
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
      className="transition-colors duration-1000"
      style={{ backgroundColor: isVisible ? '#1C1C1C' : '#F8F6F1' }}
      data-header-theme={isVisible ? 'dark' : undefined}
    >
      <Testimonials />
      <Community />
      <Collab />
    </section>
  );
};

export default DarkSection;
