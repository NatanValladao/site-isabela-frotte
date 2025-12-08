"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface DraggableProps {
  children: React.ReactNode;
  className?: string;
}

export function Draggable({ children, className }: DraggableProps) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Volta pro lugar (efeito elástico)
      dragElastic={0.2} // Quão longe ele pode ir
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}