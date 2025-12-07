
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          top: element.offsetTop - 60, // Reduced offset for snugger header
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Case Studies', id: 'projects' },
    { label: 'LinkedIn', id: 'linkedin', isExternal: true }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm'
          : 'py-3 bg-white/95 backdrop-blur-md',
        className
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks scrollToSection={scrollToSection} handleLinkedInClick={handleLinkedInClick} />
        </div>
        
        {/* Profile Image - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Avatar className="w-10 h-10">
            <AvatarImage 
              src="/lovable-uploads/386cbd65-beb9-499d-b28b-fbc8f39e12ba.png" 
              alt="Joanna Minott" 
              className="object-cover object-center"
            />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => window.open('https://tumblr.com', '_blank')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gray-200 hover:bg-white/90 transition-colors"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">go to tumblr mode</span>
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-5 h-0.5 transition-all duration-300 ease-in-out bg-gray-900",
            isMobileMenuOpen 
              ? "rotate-45 translate-y-0.5" 
              : "-translate-y-1"
          )} />
          <span className={cn(
            "block w-5 h-0.5 transition-all duration-300 ease-in-out bg-gray-900",
            isMobileMenuOpen 
              ? "opacity-0" 
              : ""
          )} />
          <span className={cn(
            "block w-5 h-0.5 transition-all duration-300 ease-in-out bg-gray-900",
            isMobileMenuOpen 
              ? "-rotate-45 -translate-y-0.5" 
              : "translate-y-1"
          )} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "bg-black/30 backdrop-blur-sm opacity-100" 
            : "bg-transparent opacity-0"
        )} />
        
        <div className={cn(
          "absolute right-0 top-0 h-full w-72 max-w-[85vw]",
          "bg-white shadow-xl",
          "transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
        )}>
          <button 
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-4 h-0.5 bg-gray-600 transform rotate-45 translate-y-0.5" />
            <span className="block w-4 h-0.5 bg-gray-600 transform -rotate-45" />
          </button>
          
          <div className="pt-16 px-6">
            <button 
              onClick={() => window.open('https://tumblr.com', '_blank')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 mb-6 hover:bg-gray-200 transition-colors"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-700 font-medium">go to tumblr mode</span>
            </button>
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => {
                    if (item.isExternal) {
                      handleLinkedInClick();
                    } else {
                      scrollToSection(item.id);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
  handleLinkedInClick: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection, handleLinkedInClick }) => (
  <>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300"
      onClick={() => scrollToSection('about')}
    >
      About
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300"
      onClick={() => scrollToSection('projects')}
    >
      Case Studies
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300"
      onClick={handleLinkedInClick}
    >
      LinkedIn
    </button>
  </>
);

export default Header;
