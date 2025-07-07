"use client";

import { motion } from 'framer-motion';

const leafVariant = {
  initial: { rotate: 0, originX: '0%', originY: '100%' },
  hover: (i: number) => ({
    rotate: [0, -5, 5, -5, 0],
    transition: {
      delay: i * 0.1,
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  }),
};

export function InteractivePlant({ className }: { className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={className}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 200V120"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Leaf 1 */}
        <motion.g custom={1} variants={leafVariant}>
          <path
            d="M100 130C60 130 60 80 100 80"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M66.6274 91.8382C62.3529 80.9926 73.1618 70.1838 84.0073 74.4583C97.5759 79.8052 94.7644 97.4093 81.1958 92.0624C78.4831 91.0366 70.9019 102.684 66.6274 91.8382Z"
            fill="hsl(var(--accent))"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.g>

        {/* Leaf 2 */}
        <motion.g custom={2} variants={leafVariant}>
          <path
            d="M100 150C140 150 140 100 100 100"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M133.373 108.162C137.647 119.007 126.838 129.816 115.993 125.542C102.424 120.195 105.236 102.591 118.804 107.938C121.517 108.963 129.098 97.3159 133.373 108.162Z"
            fill="hsl(var(--accent))"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.g>

        {/* Leaf 3 */}
        <motion.g custom={3} variants={leafVariant}>
          <path
            d="M100 120C130 120 140 60 100 60"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M132.895 73.4975C141.082 82.5282 135.615 96.6565 125.132 96.3435C111.968 95.9525 109.112 79.5108 120.378 72.0153C122.956 70.3664 124.708 64.4668 132.895 73.4975Z"
            fill="hsl(var(--accent))"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.g>

         {/* Leaf 4 */}
         <motion.g custom={4} variants={leafVariant}>
          <path
            d="M100 140C70 140 60 80 100 80"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M67.1047 93.4975C58.9184 102.528 64.3853 116.657 74.8681 116.344C88.0319 115.953 90.8876 99.5108 79.6219 92.0153C77.0436 90.3664 75.2916 84.4668 67.1047 93.4975Z"
            fill="hsl(var(--accent))"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
