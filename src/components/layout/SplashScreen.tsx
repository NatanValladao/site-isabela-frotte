"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

export default function SplashScreen({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [animationStage, setAnimationStage] = useState('intro'); // intro -> outro

  useEffect(() => {
    const outroTimer = setTimeout(() => {
      setAnimationStage('outro');
    }, 2000); // Start exit animation
    
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 3200); // Animation complete

    return () => {
      clearTimeout(outroTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <motion.div
      aria-hidden="true"
      className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background')}
      animate={{ opacity: animationStage === 'outro' ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <motion.div
        className='absolute rounded-full bg-accent'
        initial={{ scale: 0 }}
        animate={{ scale: animationStage === 'outro' ? 40 : 0 }}
        transition={{ duration: 1.0, ease: 'circOut' }}
        style={{ width: '100px', height: '100px' }}
      />
      
      <motion.div
        className="relative flex flex-col items-center"
        animate={{ opacity: animationStage === 'outro' ? 0 : 1, scale: animationStage === 'outro' ? 0.8 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="p-4 bg-background/50 rounded-full mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <Leaf className="w-12 h-12 text-primary" />
        </motion.div>
        
        <motion.h1
          className="font-headline text-4xl text-primary z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        >
          Psicóloga Isabela
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
