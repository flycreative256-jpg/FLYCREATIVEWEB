"use client";

import React from "react";

export function AmbientBackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">

      {/* ── 1. VERY SOFT FEATHER-LIGHT BRAND GRADIENT SPOTS (4% OPACITY - CLEAN & BRIGHT) ── */}
      <div className="absolute top-[5%] -left-[10%] w-[35rem] h-[35rem] bg-[var(--brand-orange)]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[8%] -right-[10%] w-[38rem] h-[38rem] bg-[var(--brand-magenta)]/4 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-[45%] right-[15%] w-[25rem] h-[25rem] bg-[var(--brand-yellow)]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* ── 2. FAINT SUBTLE DOT MATRIX GRID LAYER (10% OPACITY) ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:44px_44px] opacity-10" />

      {/* ── 3. FAINT ROTATING KINETIC WIREFRAME CIRCLES & RINGS ── */}
      {/* Circle 1 - Top Left */}
      <div className="absolute top-[8%] -left-20 w-80 h-80 rounded-full border border-dashed border-[var(--brand-orange)]/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-[10%] -left-10 w-64 h-64 rounded-full border border-slate-200/30 pointer-events-none" />

      {/* Circle 2 - Bottom Right */}
      <div className="absolute bottom-[12%] -right-24 w-[28rem] h-[28rem] rounded-full border border-dashed border-[var(--brand-magenta)]/10 animate-spin-reverse-slow pointer-events-none" />
      <div className="absolute bottom-[15%] -right-12 w-80 h-80 rounded-full border border-slate-200/30 pointer-events-none" />

      {/* ── 4. FAINT CURVED VECTOR LASER LINES (10% OPACITY) ── */}
      <svg
        className="absolute top-[20%] left-0 w-full h-48 opacity-10 pointer-events-none"
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 80 Q 300 0, 600 80 T 1300 80"
          stroke="url(#ambient-line-gradient-1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M -100 120 Q 400 180, 800 50 T 1300 120"
          stroke="url(#ambient-line-gradient-2)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="ambient-line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4B333" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E93E34" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D92B7E" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="ambient-line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D92B7E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F4B333" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  );
}
