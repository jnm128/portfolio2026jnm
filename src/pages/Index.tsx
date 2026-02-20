import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import IntroBlurb from '@/components/IntroBlurb';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import DesignPhilosophy from '@/components/DesignPhilosophy';
import Community from '@/components/Community';
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
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
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
    <main className="relative bg-surface-6">
      <ScrollAnimations />
      <IntroBlurb />
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <DesignPhilosophy />
      <Community />
      <Footer />
    </main>
  );
};

export default Index;
