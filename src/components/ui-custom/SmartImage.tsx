import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  webpSrc?: string;
}

const SmartImage = ({ className, wrapperClassName, webpSrc, onLoad, alt, src, ...props }: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const imgEl = (
    <img
      {...props}
      src={src}
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
  );

  return (
    <div className={cn('relative w-full h-full overflow-hidden rounded-[inherit]', wrapperClassName)}>
      {!loaded && (
        <div aria-hidden="true" className="absolute inset-0 bg-muted animate-pulse rounded-[inherit]" />
      )}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          {imgEl}
        </picture>
      ) : imgEl}
    </div>
  );
};

export default SmartImage;
