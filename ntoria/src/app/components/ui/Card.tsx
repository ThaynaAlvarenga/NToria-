"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  variant?: "default" | "highlighted";
}

export function Card({ 
  children, 
  className, 
  hover = true,
  onClick,
  variant = "default"
}: CardProps) {
  const variants = {
    default: "bg-white border border-ntoria-border",
    highlighted: "bg-ntoria-navy text-white border-0",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-lg p-6 transition-shadow",
        hover && "hover:shadow-lg",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
