import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Working Lottie animation URLs
const CAMERA_LOTTIE_URL = "https://lottie.host/b5a5e2d8-0b1a-4e0c-9b3a-3c4e1b6a8f9d/camera.lottie";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Immediately set scrolled state since we're navigating to a section
      setIsScrolled(true);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        // Verify scroll position after animation completes
        setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
        }, 500);
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

  // Reusable mobile nav link component
  const MobileNavLink = ({ 
    label, 
    sectionId, 
    href 
  }: { 
    label: string; 
    sectionId?: string; 
    href?: string;
  }) => {
    const linkClassName = "text-lg font-medium text-foreground hover:text-muted-foreground transition-colors";

    if (isHomePage && sectionId) {
      return (
        <button onClick={() => scrollToSection(sectionId)} className={linkClassName}>
          {label}
        </button>
      );
    }
    return (
      <Link to={href || `/#${sectionId}`} onClick={() => setIsMobileMenuOpen(false)} className={linkClassName}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] transition-all duration-300',
        isScrolled 
          ? `py-4 ${isMobileMenuOpen ? 'bg-background' : 'bg-background/95 backdrop-blur-sm'}`
          : 'py-6 bg-background',
          className
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1600px]">
          {/* Logo */}
          {location.pathname === '/contact' || location.pathname === '/book-club' ? (
            <Link 
              to="/"
              className="text-2xl font-serif font-semibold tracking-tight flex"
            >
              {'MINO.'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animate-natural-fall"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </Link>
          ) : (
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-serif font-semibold tracking-tight flex"
            >
              {'MINO.'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animate-natural-fall"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </button>
          )}
          
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

            {/* About - simple transition for consistent spacing */}
            {isHomePage ? (
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                About
              </button>
            ) : (
              <Link
                to="/#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                About
              </Link>
            )}

            {/* Book Club - scrolls to community section */}
            {isHomePage ? (
              <button
                onClick={() => scrollToSection('community')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Book Club
              </button>
            ) : (
              <Link
                to="/#community"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Book Club
              </Link>
            )}

            {/* Get in Touch - Black to white button */}
            <Link
              to="/contact"
              className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium 
                         hover:bg-background hover:text-foreground border border-foreground hover:border-border
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
      </header>
      
      {/* Mobile Menu - Outside header for proper stacking context */}
      <div
        style={{
          top: headerHeight,
          height: headerHeight ? `calc(100vh - ${headerHeight}px)` : '100vh',
        }}
        className={cn(
          "fixed left-0 right-0 z-[100] md:hidden bg-background",
          "transition-[transform,opacity] duration-300 ease-in-out will-change-transform",
          isMobileMenuOpen
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "-translate-y-full pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col items-center gap-6 pt-12">
          <MobileNavLink label="Work" sectionId="projects" />
          <MobileNavLink label="About" sectionId="about" />
          <MobileNavLink label="Book Club" sectionId="community" />
          
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-xs bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium text-center
                       hover:bg-background hover:text-foreground border border-foreground hover:border-border
                       transition-all duration-300 active:scale-95"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
