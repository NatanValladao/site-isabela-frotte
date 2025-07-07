"use client";

import { motion } from 'framer-motion';

const leafVariants = {
  hover: {
    rotate: [0, 5, -5, 5, 0],
    scale: [1, 1.05, 1, 1.05, 1],
    originY: "100%",
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
  initial: {
    rotate: 0,
    scale: 1,
  }
};

export function InteractivePlant({ className }: { className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={className}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 150 200"
        className="drop-shadow-md"
        style={{ originX: '50%', originY: '100%' }}
      >
        {/* Pot */}
        <path d="M 25,200 H 125 L 115,150 H 35 Z" fill="#BDB2A7" />
        <path d="M 20,155 H 130" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M 25,200 H 125" stroke="currentColor" strokeWidth="2" fill="none" />

        {/* Main Stem */}
        <path d="M 75,150 V 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>

        {/* Leaf 1 (right) */}
        <motion.g variants={leafVariants}>
          <path d="M 75 100 C 125 100 125 50 75 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 115 65 C 135 65 140 85 115 90 C 90 85 95 65 115 65 Z" fill="#E1BCC0" />
        </motion.g>

        {/* Leaf 2 (left) */}
        <motion.g variants={leafVariants}>
          <path d="M 75 120 C 25 120 25 70 75 70" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 35 85 C 15 85 10 105 35 110 C 60 105 55 85 35 85 Z" fill="#E1BCC0" />
        </motion.g>

         {/* Leaf 3 (top) */}
        <motion.g variants={leafVariants}>
          <path d="M 75 70 C 100 70 100 40 75 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 90 40 C 105 40 110 55 90 55 C 70 55 75 40 90 40 Z" fill="#E1BCC0" />
        </motion.g>

      </motion.svg>
    </motion.div>
  );
}
