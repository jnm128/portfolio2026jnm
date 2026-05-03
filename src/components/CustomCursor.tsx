import { useEffect, useRef, useState } from 'react';

type HoverType = 'default' | 'interactive' | 'image' | 'text';

const styleFor = (hoverType: HoverType) => {
  switch (hoverType) {
    case 'interactive':
      return { className: 'scale-150 opacity-80 rounded-full', width: 20, height: 20, offset: 10 };
    case 'image':
      return { className: 'scale-125 rounded-full', width: 20, height: 20, offset: 10 };
    case 'text':
      return { className: 'rounded-full', width: 3, height: 24, offset: 1.5 };
    default:
      return { className: 'scale-100 rounded-full', width: 20, height: 20, offset: 10 };
  }
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<HoverType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Refs for the rAF-driven position update — avoids React re-renders on mousemove.
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  const offsetRef = useRef({ x: 10, y: 10 });
  const lastDarkCheck = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setEnabled(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const updatePosition = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Throttle elementFromPoint check (it's expensive) to ~60ms.
      const now = performance.now();
      if (now - lastDarkCheck.current > 60) {
        lastDarkCheck.current = now;
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const onDark = !!element?.closest('[data-theme="dark"]');
        setIsOnDark((prev) => (prev === onDark ? prev : onDark));
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let next: HoverType = 'default';
      if (target.closest('a, button, [role="button"], input, textarea, select')) next = 'interactive';
      else if (target.closest('img, [data-cursor="image"], .cursor-image')) next = 'image';
      else if (target.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote, [data-cursor="text"]')) next = 'text';
      setHoverType((prev) => (prev === next ? prev : next));
    };

    // rAF loop applies transform directly to the DOM — zero React work per frame.
    const tick = () => {
      const node = cursorRef.current;
      if (node) {
        const { x, y } = targetPos.current;
        const { x: ox, y: oy } = offsetRef.current;
        node.style.transform = `translate3d(${x - ox}px, ${y - oy}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [enabled, isVisible]);

  if (!enabled) return null;

  const styles = styleFor(hoverType);
  // Keep offset in a ref so the rAF loop reads the current values without re-binding.
  offsetRef.current = { x: styles.offset, y: hoverType === 'text' ? 12 : styles.offset };

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform ${
        isOnDark ? 'bg-background' : 'bg-foreground'
      } transition-[width,height,opacity,background-color,transform] duration-150 ease-out ${styles.className} ${
        isClicking ? 'animate-cursor-pulse' : ''
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ width: styles.width, height: styles.height }}
    />
  );
};

export default CustomCursor;
