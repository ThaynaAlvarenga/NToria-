"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function AnimatedSection({ children, className, id, style }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
}