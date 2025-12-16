import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const menuItems = [
    { label: 'Work', id: 'projects', type: 'scroll' },
    { label: 'Book Club', id: 'community', type: 'scroll' },
    { label: 'For Fun', id: 'testimonials', type: 'scroll' },
    { label: 'Connect', id: '/contact', type: 'link' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[60] transition-all duration-300',
        isScrolled 
          ? 'py-4 bg-background/95 backdrop-blur-sm'
          : 'py-6 bg-background',
        className
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-serif font-semibold tracking-tight"
        >
          MINO.
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            item.type === 'link' ? (
              <Link
                key={item.id}
                to={item.id}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              isHomePage ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            )
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-5 h-0.5 bg-foreground transition-all duration-300",
            isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
          )} />
          <span className={cn(
            "block w-5 h-0.5 bg-foreground transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : ""
          )} />
          <span className={cn(
            "block w-5 h-0.5 bg-foreground transition-all duration-300",
            isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
          )} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 md:hidden pt-20",
          "transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-background" />
        <nav className="relative z-10 flex flex-col items-center gap-8 pt-12">
          {menuItems.map((item) => (
            item.type === 'link' ? (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              isHomePage ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
