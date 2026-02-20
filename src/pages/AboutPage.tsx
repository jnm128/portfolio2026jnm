import React from 'react';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';

const AboutPage = () => {
  return (
    <main className="relative bg-surface-6">
      <ScrollAnimations />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
