import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CaseStudyProgressBar from './CaseStudyProgressBar';

const CAMERA_LOTTIE_URL = "https://lottie.host/b5a5e2d8-0b1a-4e0c-9b3a-3c4e1b6a8f9d/camera.lottie";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isBookClubPage = location.pathname === '/book-club';
  const isContactPage = location.pathname === '/contact';
  const isCaseStudy = location.pathname.startsWith('/case-study');

  // Dynamic dark section detection
  useEffect(() => {
    const checkDarkSections = () => {
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      if (darkSections.length === 0) {
        setIsDarkSection(false);
        return;
      }

      const observers: IntersectionObserver[] = [];
      const visibleSet = new Set<Element>();

      darkSections.forEach((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              visibleSet.add(section);
            } else {
              visibleSet.delete(section);
            }
            setIsDarkSection(visibleSet.size > 0);
          },
            // Thin detection band pinned just under the header so the theme flips exactly
            // when a section's top edge crosses below the nav, not when it fills the viewport.
            { rootMargin: '-72px 0px -100% 0px', threshold: 0 }
        );
        observer.observe(section);
        observers.push(observer);
      });

      return () => observers.forEach(o => o.disconnect());
    };

    // Delay to let DOM render
    const timeout = setTimeout(checkDarkSections, 200);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const useDarkTheme = isContactPage || isDarkSection;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (isMobileMenuOpen) {
        setIsHidden(false);
      } else if (currentY > 80 && currentY > lastScrollY.current) {
        setIsHidden(true);
      } else if (currentY < lastScrollY.current) {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

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
      setIsScrolled(true);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
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

    if (isHomePage && sectionId) {
      return (
        <button onClick={() => scrollToSection(sectionId)} className={linkClassName}>
          {label}
        </button>
      );
    }

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
            ? `py-4 ${isMobileMenuOpen ? 'bg-background' : useDarkTheme ? 'bg-foreground' : 'bg-background/95 backdrop-blur-sm'}`
            : isMobileMenuOpen
              ? 'py-6 bg-background'
              : useDarkTheme
                ? 'py-6 bg-transparent'
                : 'py-6 bg-background',
          className
        )}
      >
        <div className="w-full mx-auto px-5 md:px-16 flex items-center justify-center relative">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              to="/work"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                useDarkTheme && !isMobileMenuOpen ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Work
            </Link>

            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                useDarkTheme && !isMobileMenuOpen ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>

            {/* Logo */}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('home')}
                className={cn(
                  "text-2xl font-sans font-bold tracking-tight flex transition-colors duration-300 mx-4",
                  useDarkTheme && !isMobileMenuOpen ? 'text-background' : ''
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
                  "text-2xl font-sans font-bold tracking-tight flex transition-colors duration-300 mx-4",
                  useDarkTheme && !isMobileMenuOpen ? 'text-background' : ''
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

            <Link
              to="/book-club"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                useDarkTheme && !isMobileMenuOpen ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Community
            </Link>

            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                useDarkTheme && !isMobileMenuOpen ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile: Logo left, hamburger right */}
          <div className="flex md:hidden items-center justify-between w-full">
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('home')}
                className={cn(
                  "text-2xl font-sans font-bold tracking-tight flex transition-colors duration-300",
                  useDarkTheme && !isMobileMenuOpen ? 'text-background' : ''
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
                  "text-2xl font-sans font-bold tracking-tight flex transition-colors duration-300",
                  useDarkTheme && !isMobileMenuOpen ? 'text-background' : ''
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

            {/* Mobile menu button */}
            <button 
              className="relative w-6 h-6 flex flex-col justify-center items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                useDarkTheme && !isMobileMenuOpen ? "bg-background" : "bg-foreground",
                isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              )} />
              <span className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                useDarkTheme && !isMobileMenuOpen ? "bg-background" : "bg-foreground",
                isMobileMenuOpen ? "opacity-0" : ""
              )} />
              <span className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                useDarkTheme && !isMobileMenuOpen ? "bg-background" : "bg-foreground",
                isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              )} />
            </button>
          </div>
        </div>
        {isCaseStudy && <CaseStudyProgressBar />}
      </header>
      
      {/* Mobile Menu */}
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
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
