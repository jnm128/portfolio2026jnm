import React from 'react';
import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

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
    <footer className={cn('py-12 md:py-16 bg-[#1C1C1C] text-white', className)}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Copyright */}
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2 block"
            >
              MINO.
            </button>
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-xs text-white/40 mt-2">
              made with <Leaf className="w-3 h-3" /> matcha
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <a href="/work" className="text-white/60 hover:text-white transition-colors">
              Work
            </a>
            <a href="/about" className="text-white/60 hover:text-white transition-colors">
              About
            </a>
            <a href="/book-club" className="text-white/60 hover:text-white transition-colors">
              Community
            </a>
            <a href="/contact" className="text-white/60 hover:text-white transition-colors">
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
