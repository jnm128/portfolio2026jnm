import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Leaf, MapPin } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

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
    <footer className={cn('pt-16 md:pt-24 pb-8 md:pb-12 bg-foreground text-background overflow-hidden', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        {/* Top — meta + nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-background/50 mb-3">Joanna Minott</p>
            <p className="text-base md:text-lg text-background/80 max-w-md leading-relaxed">
              UX designer crafting calm, intuitive experiences — and building space for designers to think deeply.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="/work" className="text-background/60 hover:text-background transition-colors">Work</a>
            <a href="/about" className="text-background/60 hover:text-background transition-colors">About</a>
            <a href="/book-club" className="text-background/60 hover:text-background transition-colors">Community</a>
            <a href="/contact" className="text-background/60 hover:text-background transition-colors">Get in Touch</a>
          </nav>
        </div>

        {/* Editorial wordmark */}
        <button
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
          className="block w-full text-center leading-none font-sans font-bold text-background select-none hover:opacity-90 transition-opacity"
          style={{
            fontSize: 'clamp(5rem, 28vw, 26rem)',
            letterSpacing: '0.04em',
          }}
        >
          MINO
        </button>

        {/* Bottom — copyright */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} Joanna Minott. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-background/50">
            <MapPin className="w-3 h-3" />
            <span>Miami, FL</span>
            <span className="text-background/30">·</span>
            <span>{time} local</span>
          </p>
          <p className="flex items-center gap-1 text-xs text-background/40">
            made with <Leaf className="w-3 h-3" /> matcha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
