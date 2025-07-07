"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function SplashScreen({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [isExpanding, setIsExpanding] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const expandTimer = setTimeout(() => setIsExpanding(true), 100);
    const hideTimer = setTimeout(() => setIsHiding(true), 1500);
    const completeTimer = setTimeout(onAnimationComplete, 2000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(hideTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ease-out',
        isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'absolute rounded-full bg-accent transition-transform duration-[1500ms] ease-in-out',
          isExpanding ? 'scale-[40]' : 'scale-0'
        )}
        style={{ width: '100px', height: '100px' }}
      ></div>
    </div>
  );
}
