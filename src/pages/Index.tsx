import React, { useEffect } from 'react';
import BioBlurb from '@/components/BioBlurb';
import Hero from '@/components/Hero';
import IntroBlurb from '@/components/IntroBlurb';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Community from '@/components/Community';
import Collab from '@/components/Collab';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';

const Index = () => {
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
    <main className="relative bg-[#F8F6F1]">
      <ScrollAnimations />
      <BioBlurb />
      <Hero />
      <IntroBlurb />
      <Projects />
      <Testimonials />
      <Community />
      <Collab />
      <Footer />
    </main>
  );
};

export default Index;
