import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Lottie refs for controlling animations
  const bookLottieRef = useRef<any>(null);
  const cameraLottieRef = useRef<any>(null);

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

  const handleBookHover = (isEntering: boolean) => {
    if (bookLottieRef.current) {
      if (isEntering) {
        bookLottieRef.current.seek(0);
        bookLottieRef.current.play();
      } else {
        bookLottieRef.current.stop();
      }
    }
  };

  const handleCameraHover = (isEntering: boolean) => {
    if (cameraLottieRef.current) {
      if (isEntering) {
        cameraLottieRef.current.seek(0);
        cameraLottieRef.current.play();
      } else {
        cameraLottieRef.current.stop();
      }
    }
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

          {/* About - Camera flash on hover */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('about')}
              onMouseEnter={() => handleCameraHover(true)}
              onMouseLeave={() => handleCameraHover(false)}
              className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1">
                <DotLottieReact
                  src="https://lottie.host/d2b12c2d-5c5a-4d67-9147-9a4ccf44c4c5/vRFzZwlhyK.lottie"
                  loop={false}
                  autoplay={false}
                  dotLottieRefCallback={(ref) => { cameraLottieRef.current = ref; }}
                />
              </div>
              <span>About</span>
            </button>
          ) : (
            <Link
              to="/#about"
              onMouseEnter={() => handleCameraHover(true)}
              onMouseLeave={() => handleCameraHover(false)}
              className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1">
                <DotLottieReact
                  src="https://lottie.host/d2b12c2d-5c5a-4d67-9147-9a4ccf44c4c5/vRFzZwlhyK.lottie"
                  loop={false}
                  autoplay={false}
                  dotLottieRefCallback={(ref) => { cameraLottieRef.current = ref; }}
                />
              </div>
              <span>About</span>
            </Link>
          )}

          {/* Book Club - Book icon animation */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('community')}
              onMouseEnter={() => handleBookHover(true)}
              onMouseLeave={() => handleBookHover(false)}
              className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1">
                <DotLottieReact
                  src="https://lottie.host/79b22f9c-9c8e-4a66-8e3f-9c9c9c9c9c9c/book.lottie"
                  loop={false}
                  autoplay={false}
                  dotLottieRefCallback={(ref) => { bookLottieRef.current = ref; }}
                />
              </div>
              <span>Book Club</span>
            </button>
          ) : (
            <Link
              to="/#community"
              onMouseEnter={() => handleBookHover(true)}
              onMouseLeave={() => handleBookHover(false)}
              className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              <div className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1">
                <DotLottieReact
                  src="https://lottie.host/79b22f9c-9c8e-4a66-8e3f-9c9c9c9c9c9c/book.lottie"
                  loop={false}
                  autoplay={false}
                  dotLottieRefCallback={(ref) => { bookLottieRef.current = ref; }}
                />
              </div>
              <span>Book Club</span>
            </Link>
          )}

          {/* Get in Touch - Black to white button */}
          <Link
            to="/contact"
            className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium 
                       hover:bg-background hover:text-foreground border-2 border-foreground
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
                       hover:bg-background hover:text-foreground border-2 border-foreground
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
