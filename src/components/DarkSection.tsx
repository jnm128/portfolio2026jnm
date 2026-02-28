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
      style={{ backgroundColor: isVisible ? '#171717' : '#F8F6F1' }}
    >
      <Testimonials />
      <Community />
      <Collab />
    </section>
  );
};

export default DarkSection;
