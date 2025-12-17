import { useEffect, useState, useCallback } from 'react';

type HoverType = 'default' | 'interactive' | 'image' | 'text';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<HoverType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for different element types
    const addHoverListeners = () => {
      // Interactive elements (buttons, links)
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setHoverType('interactive'));
        el.addEventListener('mouseleave', () => setHoverType('default'));
      });

      // Image elements
      const imageElements = document.querySelectorAll('img, [data-cursor="image"], .cursor-image');
      imageElements.forEach(el => {
        el.addEventListener('mouseenter', () => setHoverType('image'));
        el.addEventListener('mouseleave', () => setHoverType('default'));
      });

      // Text elements (paragraphs, headings, spans with substantial text)
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, blockquote, [data-cursor="text"]');
      textElements.forEach(el => {
        // Only add to elements that aren't inside interactive elements
        if (!el.closest('a, button, [role="button"]')) {
          el.addEventListener('mouseenter', () => setHoverType('text'));
          el.addEventListener('mouseleave', () => setHoverType('default'));
        }
      });
    };

    // Initial setup and re-run on DOM changes
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [updatePosition]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  // Cursor styles based on hover type
  const getCursorStyles = () => {
    switch (hoverType) {
      case 'interactive':
        return {
          className: 'scale-150 opacity-80 rounded-full',
          width: 20,
          height: 20,
          offset: 10,
        };
      case 'image':
        return {
          className: 'scale-125 rounded-full',
          width: 20,
          height: 20,
          offset: 10,
        };
      case 'text':
        return {
          className: 'rounded-full',
          width: 3,
          height: 24,
          offset: 1.5,
        };
      default:
        return {
          className: 'scale-100 rounded-full',
          width: 20,
          height: 20,
          offset: 10,
        };
    }
  };

  const styles = getCursorStyles();

  return (
    <div
      className={`fixed pointer-events-none z-[9999] bg-foreground
                  transition-all duration-150 ease-out
                  ${styles.className}
                  ${isClicking ? 'animate-cursor-pulse' : ''}
                  ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: position.x - styles.offset,
        top: position.y - (hoverType === 'text' ? 12 : styles.offset),
        width: styles.width,
        height: styles.height,
      }}
    />
  );
};

export default CustomCursor;
