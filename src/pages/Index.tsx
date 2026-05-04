import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import IntroBlurb from '@/components/IntroBlurb';
import Projects from '@/components/Projects';
import AboutSection from '@/components/AboutSection';
import DarkSection from '@/components/DarkSection';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import MinoLoader from '@/components/MinoLoader';

const Index = () => {
  const [showLoader, setShowLoader] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('mino-loaded') !== '1';
  });

  useEffect(() => {
    if (!showLoader) return;
    sessionStorage.setItem('mino-loaded', '1');
    const t = window.setTimeout(() => setShowLoader(false), 1600);
    return () => window.clearTimeout(t);
  }, [showLoader]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <main className="relative bg-background">
      {showLoader && <MinoLoader />}
      <ScrollAnimations />

      <Hero />
      <IntroBlurb />
      <Projects />
      <AboutSection />
      <DarkSection />
      <Footer />
    </main>
  );
};

export default Index;
