import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const SmartImage = ({ className, wrapperClassName, onLoad, alt, ...props }: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative w-full h-full overflow-hidden rounded-[inherit]', wrapperClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-[inherit]" />
      )}
      <img
        {...props}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          'transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  );
};

export default SmartImage;
