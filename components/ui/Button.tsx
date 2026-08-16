"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-r from-[#F4B333] to-[#F37936] text-white font-bold shadow-[0_10px_25px_rgba(243,121,54,0.35)] hover:shadow-[0_15px_35px_rgba(243,121,54,0.5)] hover:scale-[1.02] hover:brightness-105",
    secondary: "bg-white/5 backdrop-blur-md text-white border border-white/15 hover:bg-white/10 hover:border-[var(--brand-orange)]/60 hover:shadow-[0_8px_25px_rgba(243,121,54,0.2)]",
    outline: "bg-transparent text-[var(--brand-yellow)] border-2 border-[var(--brand-orange)]/70 hover:bg-[var(--brand-orange)]/10 hover:border-[var(--brand-orange)] hover:shadow-[0_0_20px_rgba(243,121,54,0.25)]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
