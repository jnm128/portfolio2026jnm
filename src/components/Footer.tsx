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
    <footer className={cn('fixed bottom-0 left-0 right-0 z-50 py-6 md:py-8 bg-background/80 backdrop-blur-xl border-t border-border/50', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Copyright */}
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2 block"
            >
              MINO.
            </button>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <button
              onClick={() => scrollToSection('projects')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </button>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
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
