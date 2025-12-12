import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Community from '@/components/Community';

import DesignPhilosophy from '@/components/DesignPhilosophy';
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
    <main className="relative">
      <ScrollAnimations />
      <Header />
      <Hero />
      <Projects />
      <Testimonials />
      <DesignPhilosophy />
      <Community />
      <Footer />
      
      {/* Frosted glass bottom overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-40 bg-gradient-to-t from-background/60 via-background/20 via-50% to-transparent backdrop-blur-sm" />
    </main>
  );
};

export default Index;
