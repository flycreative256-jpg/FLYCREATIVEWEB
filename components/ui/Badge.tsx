"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "brand" | "orange" | "purple" | "outline";
}

export function Badge({
  children,
  variant = "brand",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    brand: "bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border border-[var(--brand-orange)]/30",
    orange: "bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)] border border-[var(--brand-yellow)]/30",
    purple: "bg-white/10 text-white border border-white/30",
    outline: "bg-slate-800/80 text-slate-300 border border-slate-700"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
