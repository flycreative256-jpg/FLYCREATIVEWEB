"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
  hoverEffect?: boolean;
}

export function Card({
  children,
  glass = true,
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hoverEffect) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = hoverEffect ? motion.div : "div";

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={hoverEffect ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      className={cn(
        "rounded-2xl border relative overflow-hidden",
        glass ? "glass-panel" : "bg-slate-900/80 border-slate-800",
        hoverEffect && "group cursor-pointer",
        className
      )}
      {...(props as any)}
    >
      <div 
        style={hoverEffect ? { transform: "translateZ(30px)", transformStyle: "preserve-3d" } : undefined} 
        className="w-full h-full relative z-10 transition-transform duration-300"
      >
        {children}
      </div>
      
      {hoverEffect && (
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          style={{ transform: "translateZ(-10px)" }}
        />
      )}
    </Component>
  );
}
