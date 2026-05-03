import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        smoothWheel: true,
        syncTouch: false,
      });
      window.__lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      if (lenis) {
        lenis.destroy();
        if (window.__lenis === lenis) delete window.__lenis;
        lenis = null;
      }
      // Restore native scrolling — Lenis adds these classes/attrs to <html>.
      const html = document.documentElement;
      html.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
      html.style.removeProperty('scroll-behavior');
    };

    const apply = () => {
      if (mql.matches) stop();
      else start();
    };

    apply();
    mql.addEventListener('change', apply);

    return () => {
      mql.removeEventListener('change', apply);
      stop();
    };
  }, []);

  return null;
};

export default SmoothScroll;
