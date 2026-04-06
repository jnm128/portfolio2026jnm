import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isBookClubPage = location.pathname === '/book-club';
  const isContactPage = location.pathname === '/contact';

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

  const navigateAndScroll = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'instant'
        });
      }
    }, 100);
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
    isBookClubNavOnBookClubPage = false
  }: { 
    label: string; 
    sectionId?: string;
    isBookClubNavOnBookClubPage?: boolean;
  }) => {
    const linkClassName = "text-lg font-medium text-foreground hover:text-muted-foreground transition-colors";

    // Special case: Book Club nav on Book Club page - refresh
    if (isBookClubNavOnBookClubPage) {
      return (
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.reload();
          }} 
          className={linkClassName}
        >
          {label}
        </button>
      );
    }

    // On home page: scroll to section
    if (isHomePage && sectionId) {
      return (
        <button onClick={() => scrollToSection(sectionId)} className={linkClassName}>
          {label}
        </button>
      );
    }

    // On other pages: navigate to home and scroll
    if (sectionId) {
      return (
        <button onClick={() => navigateAndScroll(sectionId)} className={linkClassName}>
          {label}
        </button>
      );
    }

    return null;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          `fixed top-0 left-0 right-0 transition-all duration-300 ${isMobileMenuOpen ? 'z-[101]' : 'z-[60]'}`,
          isScrolled 
            ? `py-4 ${isMobileMenuOpen ? 'bg-background' : isContactPage ? 'bg-[#1C1C1C]' : 'bg-background/95 backdrop-blur-sm'}`
            : isMobileMenuOpen
              ? 'py-6 bg-background'
              : isContactPage
                ? 'py-6 bg-transparent'
                : 'py-6 bg-background',
          className
        )}
      >
        <div className="w-full mx-auto px-8 md:px-16 flex items-center justify-between">
          {/* Logo */}
          {isHomePage ? (
            <button 
              onClick={() => scrollToSection('home')}
              className={cn(
                "text-2xl font-serif font-semibold tracking-tight flex transition-colors duration-300",
                isContactPage && !isMobileMenuOpen && !isScrolled ? 'text-white' : ''
              )}
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
          ) : (
            <Link 
              to="/"
              className={cn(
                "text-2xl font-serif font-semibold tracking-tight flex transition-colors duration-300",
                isContactPage && !isMobileMenuOpen && !isScrolled ? 'text-white' : ''
              )}
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
          )}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                isContactPage && !isScrolled ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Work
            </Link>

            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                isContactPage && !isScrolled ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>

            <Link
              to="/book-club"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                isContactPage && !isScrolled ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Community
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isContactPage && !isScrolled
                  ? "bg-white text-[#1C1C1C] hover:bg-white/80 border border-white"
                  : "bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground hover:border-border"
              )}
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
              "block w-5 h-0.5 transition-all duration-300",
              isContactPage && !isMobileMenuOpen && !isScrolled ? "bg-white" : "bg-foreground",
              isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
            )} />
            <span className={cn(
              "block w-5 h-0.5 transition-all duration-300",
              isContactPage && !isMobileMenuOpen && !isScrolled ? "bg-white" : "bg-foreground",
              isMobileMenuOpen ? "opacity-0" : ""
            )} />
            <span className={cn(
              "block w-5 h-0.5 transition-all duration-300",
              isContactPage && !isMobileMenuOpen && !isScrolled ? "bg-white" : "bg-foreground",
              isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
            )} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu - Full viewport overlay behind header */}
      <div
        className={cn(
          "fixed inset-0 z-[100] md:hidden bg-background",
          "transition-[transform,opacity] duration-300 ease-in-out will-change-transform",
          isMobileMenuOpen
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "-translate-y-full pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col items-center gap-6" style={{ paddingTop: headerHeight + 24 }}>
          <Link to="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">Work</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">About</Link>
          <Link to="/book-club" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">Community</Link>
          
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-xs bg-foreground text-background px-6 py-3 rounded-full text-base font-medium text-center
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
