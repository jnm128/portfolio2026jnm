import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Working Lottie animation URLs
const BOOK_LOTTIE_URL = "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie";
const CAMERA_LOTTIE_URL = "https://lottie.host/b5a5e2d8-0b1a-4e0c-9b3a-3c4e1b6a8f9d/camera.lottie";

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

  // Reusable Lottie nav link component
  const LottieNavItem = ({ 
    label, 
    lottieUrl, 
    onClick, 
    href 
  }: { 
    label: string; 
    lottieUrl: string; 
    onClick?: () => void; 
    href?: string;
  }) => {
    const content = (
      <>
        <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1">
          <DotLottieReact
            src={lottieUrl}
            loop={false}
            autoplay={false}
            playOnHover={true}
          />
        </div>
        <span>{label}</span>
      </>
    );

    const className = "relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2";

    if (href) {
      return <Link to={href} className={className}>{content}</Link>;
    }
    return <button onClick={onClick} className={className}>{content}</button>;
  };

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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1600px]">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-serif font-semibold tracking-tight animate-natural-fall"
        >
          MINO.
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Work - simple transition */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Work
            </button>
          ) : (
            <Link
              to="/#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Work
            </Link>
          )}

          {/* About - Camera animation on hover */}
          <LottieNavItem
            label="About"
            lottieUrl={CAMERA_LOTTIE_URL}
            onClick={isHomePage ? () => scrollToSection('about') : undefined}
            href={isHomePage ? undefined : "/#about"}
          />

          {/* Book Club - Book animation on hover */}
          <LottieNavItem
            label="Book Club"
            lottieUrl={BOOK_LOTTIE_URL}
            onClick={isHomePage ? () => scrollToSection('community') : undefined}
            href={isHomePage ? undefined : "/#community"}
          />

          {/* Get in Touch - Black to white button */}
          <Link
            to="/contact"
            className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium 
                       hover:bg-background hover:text-foreground border-2 border-foreground hover:border
                       transition-all duration-300"
          >
            Get in Touch
          </Link>
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
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              Work
            </button>
          ) : (
            <Link
              to="/#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              Work
            </Link>
          )}
          
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </button>
          ) : (
            <Link
              to="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
          )}
          
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('community')}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              Book Club
            </button>
          ) : (
            <Link
              to="/#community"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
            >
              Book Club
            </Link>
          )}
          
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-foreground text-background px-6 py-3 rounded-full text-xl font-serif
                       hover:bg-background hover:text-foreground border-2 border-foreground hover:border
                       transition-all duration-300"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
