"use client";

import { useRef } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface DraggableProps {
  children: React.ReactNode;
  className?: string;
}

export function Draggable({ children, className }: DraggableProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    anime.remove(elRef.current); // Stop any ongoing animation
    elRef.current.style.cursor = 'grabbing';
    elRef.current.style.zIndex = '10'; // Bring to front
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !elRef.current) return;
    
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;

    // Limit drag distance
    const maxDragDistance = 50;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    let clampedDx = dx;
    let clampedDy = dy;

    if (distance > maxDragDistance) {
        clampedDx = (dx / distance) * maxDragDistance;
        clampedDy = (dy / distance) * maxDragDistance;
    }

    anime({
      targets: elRef.current,
      translateX: clampedDx,
      translateY: clampedDy,
      scale: 1.1,
      duration: 0,
      easing: 'linear'
    });
  };
  
  const springBack = () => {
    if (!elRef.current) return;
    isDragging.current = false;
    
    elRef.current.style.cursor = 'grab';
    elRef.current.style.zIndex = '';

    anime({
      targets: elRef.current,
      translateX: 0,
      translateY: 0,
      scale: 1,
      duration: 800,
      easing: 'easeOutElastic(1, .6)',
    });
  };

  return (
    <div
      ref={elRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={springBack}
      onMouseLeave={springBack}
      className={cn("cursor-grab", className)}
    >
      {children}
    </div>
  );
}
