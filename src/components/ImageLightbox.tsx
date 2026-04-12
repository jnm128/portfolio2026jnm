import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setScale(s => Math.min(s + 0.5, 5));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(s => {
      const newScale = Math.max(s - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, zoomIn, zoomOut]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale(s => Math.min(s + 0.25, 5));
    } else {
      setScale(s => {
        const newScale = Math.max(s - 0.25, 1);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        return newScale;
      });
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <>
      <div
        className="cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.02] ${className || ''}`}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => { if (scale <= 1) close(); }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Toolbar */}
          <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
            <button
              onClick={(e) => { e.stopPropagation(); zoomOut(); }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-white/70 text-sm font-medium min-w-[3rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); zoomIn(); }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors ml-2"
            >
              <X size={18} />
            </button>
          </div>

          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl animate-in zoom-in-95 duration-300 select-none"
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            draggable={false}
          />
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
