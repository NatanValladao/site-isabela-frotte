"use client";

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';
import { BrainCircuit } from 'lucide-react';

export default function SplashScreen({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const splashRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(onAnimationComplete, 200);
      }
    });

    tl.add({
      targets: logoRef.current,
      scale: [0, 1],
      rotate: [-180, 0],
      duration: 1000,
    })
    .add({
      targets: textRef.current,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
    }, '-=600')
    .add({
      targets: contentRef.current,
      opacity: 0,
      scale: 0.8,
      duration: 500,
      delay: 500,
    })
    .add({
      targets: circleRef.current,
      scale: [0, 40],
      duration: 1000,
    }, '-=500')
    .add({
        targets: splashRef.current,
        opacity: 0,
        begin: () => {
          if (splashRef.current) {
             splashRef.current.style.pointerEvents = 'none';
          }
        }
    }, '-=600');
    
  }, [onAnimationComplete]);

  return (
    <div
      ref={splashRef}
      aria-hidden="true"
      className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background')}
    >
      <div
        ref={circleRef}
        className='absolute rounded-full bg-accent'
        style={{ width: '100px', height: '100px', transform: 'scale(0)' }}
      />
      
      <div
        ref={contentRef}
        className="relative flex flex-col items-center"
      >
        <div
          ref={logoRef}
          className="p-4 bg-card rounded-full mb-4"
        >
          <BrainCircuit className="w-12 h-12 text-primary" />
        </div>
        
        <h1
          ref={textRef}
          className="font-headline text-3xl text-primary z-10"
          style={{ opacity: 0 }}
        >
          Isabela Frotté Mello
        </h1>
      </div>
    </div>
  );
}
