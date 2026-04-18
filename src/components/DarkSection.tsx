import React, { useRef, useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import Collab from './Collab';

const CREAM = '#F8F6F1';
const GRADIENT = 'linear-gradient(135deg, #FFE4EC 0%, #FFC8D4 50%, #F8A4B5 100%)';

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
      className="transition-[background] duration-1000"
      style={{ background: isVisible ? GRADIENT : CREAM }}
    >
      <Testimonials />
      <Collab />
    </section>
  );
};

export default DarkSection;
