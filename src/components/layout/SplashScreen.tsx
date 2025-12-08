"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export default function SplashScreen({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onAnimationComplete, 500); // Tempo para a animação de saída terminar
    }, 2000); // Duração total da splash

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Círculo de Fundo Expandindo */}
          <motion.div
            className="absolute rounded-full bg-accent/10"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "150vmax", height: "150vmax" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center">
            {/* Logo Girando e Entrando */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="p-4 bg-card rounded-full mb-4 shadow-lg border border-border/50"
            >
              <BrainCircuit className="w-12 h-12 text-primary" />
            </motion.div>

            {/* Texto Revelando */}
            <motion.div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="font-headline text-3xl text-primary font-bold"
              >
                Isabela Frotté Mello
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}