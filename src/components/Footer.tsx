import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className={cn('py-12 md:py-16 bg-surface-6 text-surface-1', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Copyright */}
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2 block"
            >
              MINO.
            </button>
            <p className="text-sm text-surface-1/60">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <button
              onClick={() => scrollToSection('projects')} 
              className="text-surface-1/60 hover:text-surface-1 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')} 
              className="text-surface-1/60 hover:text-surface-1 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')} 
              className="text-surface-1/60 hover:text-surface-1 transition-colors"
            >
              Connect
            </button>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-1/60 hover:text-surface-1 transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
