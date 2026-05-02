import { useEffect, useState } from 'react';

const CaseStudyProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-foreground transition-all duration-150 z-[70]"
      style={{ width: `${progress}%` }}
    />
  );
};

export default CaseStudyProgressBar;
