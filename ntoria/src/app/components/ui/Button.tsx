"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = "primary",
  onClick,
  type = "button",
  size = "md",
  icon,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "bg-ntoria-rose text-white hover:opacity-90",
    secondary: "bg-ntoria-surface text-ntoria-navy border border-ntoria-border hover:bg-gray-100",
    outline: "bg-transparent border-2 border-ntoria-navy text-ntoria-navy hover:bg-ntoria-navy hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(
        "rounded-lg font-semibold transition-all duration-300 flex items-center gap-2",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {icon}
      {children}
    </motion.button>
  );
}
