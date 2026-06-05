"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingElement({ children, delay = 0, className }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0] 
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: "easeOut" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}