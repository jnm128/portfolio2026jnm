
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  return (
    <footer id="contact" className={cn('py-12 md:py-16 bg-white border-t border-gray-100', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-4xl md:text-5xl font-serif tracking-tight">
                Joanna Minott
              </Link>
              <div className="text-sm text-muted-foreground mt-2">
                &copy; {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 text-right">
              <button
                onClick={() => scrollToSection('home')} 
                className="text-sm hover:text-orangery-500 transition-colors text-right"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')} 
                className="text-sm hover:text-orangery-500 transition-colors text-right"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')} 
                className="text-sm hover:text-orangery-500 transition-colors text-right"
              >
                Case Studies
              </button>
              <button
                onClick={handleLinkedInClick} 
                className="text-sm hover:text-orangery-500 transition-colors text-right"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
