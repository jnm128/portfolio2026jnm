import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  wrapperClassName?: string;
}

/**
 * Video element with a skeleton (animate-pulse) shimmer shown until the
 * first frame is available. Fades the video in once it can play.
 */
const SmartVideo = ({
  className,
  wrapperClassName,
  onLoadedData,
  onCanPlay,
  ...props
}: SmartVideoProps) => {
  const [ready, setReady] = useState(false);

  const handleReady: React.ReactEventHandler<HTMLVideoElement> = (e) => {
    setReady(true);
    onLoadedData?.(e);
  };

  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden rounded-[inherit]',
        wrapperClassName,
      )}
    >
      {!ready && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-muted animate-pulse rounded-[inherit]"
        />
      )}
      <video
        {...props}
        onLoadedData={handleReady}
        onCanPlay={(e) => {
          setReady(true);
          onCanPlay?.(e);
        }}
        className={cn(
          'transition-opacity duration-500',
          ready ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </div>
  );
};

export default SmartVideo;
