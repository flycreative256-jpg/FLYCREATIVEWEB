"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Search, MessageCircle, Share2, Megaphone, Sparkles } from "lucide-react";

export function CircularOrbitGraphic() {
  return (
    <div className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      
      {/* --- AMBIENT NEON GLOW HALO --- */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[80%] h-[80%] bg-[var(--brand-orange)]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute w-[60%] h-[60%] bg-[var(--brand-magenta)]/25 rounded-full blur-[80px] pointer-events-none" />

      {/* ================= 1. OUTER ORBIT TRACK ================= */}
      <div className="absolute w-[96%] h-[96%] rounded-full pointer-events-none flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="none"
            stroke="url(#outerOrbitGradient)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            className="opacity-75"
          />
          <defs>
            <linearGradient id="outerOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4B333" />
              <stop offset="50%" stopColor="#F37936" />
              <stop offset="100%" stopColor="#BD217E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Outer Orbit Rotating Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute w-[96%] h-[96%] rounded-full"
      >
        {/* Node 1: Instagram (Top Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-[0_0_25px_rgba(225,29,72,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <svg className="w-7 h-7 text-white drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </motion.div>
        </div>

        {/* Node 2: YouTube (Bottom Right) */}
        <div className="absolute bottom-8 right-8 translate-x-1/4 translate-y-1/4">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-full bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <svg className="w-7 h-7 text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </motion.div>
        </div>

        {/* Node 3: Meta / Facebook (Bottom Left) */}
        <div className="absolute bottom-8 left-8 -translate-x-1/4 translate-y-1/4">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <Share2 className="w-6 h-6 text-white drop-shadow" />
          </motion.div>
        </div>
      </motion.div>


      {/* ================= 2. MIDDLE ORBIT TRACK ================= */}
      <div className="absolute w-[70%] h-[70%] rounded-full pointer-events-none flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="none"
            stroke="url(#middleOrbitGradient)"
            strokeWidth="1"
            className="opacity-85"
          />
          <defs>
            <linearGradient id="middleOrbitGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BD217E" />
              <stop offset="100%" stopColor="#F4B333" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Middle Orbit Rotating Container (Counter-Clockwise) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[70%] h-[70%] rounded-full"
      >
        {/* Node 1: Google Search (Top Right) */}
        <div className="absolute top-2 right-2 translate-x-1/4 -translate-y-1/4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full glass-panel bg-slate-900/90 border-2 border-white/30 shadow-[0_0_20px_rgba(244,179,51,0.5)] flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <Search className="w-6 h-6 text-[var(--brand-yellow)]" />
          </motion.div>
        </div>

        {/* Node 2: WhatsApp (Left Center) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 text-white drop-shadow" />
          </motion.div>
        </div>
      </motion.div>


      {/* ================= 3. INNER ORBIT TRACK ================= */}
      <div className="absolute w-[46%] h-[46%] rounded-full pointer-events-none flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="none"
            stroke="url(#innerOrbitGradient)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="innerOrbitGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F37936" />
              <stop offset="100%" stopColor="#BD217E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Inner Orbit Rotating Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[46%] h-[46%] rounded-full"
      >
        {/* Node 1: Web Tech / Globe (Top Left) */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-11 h-11 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <Globe className="w-5 h-5 text-white drop-shadow" />
          </motion.div>
        </div>

        {/* Node 2: Megaphone Ads (Bottom Right) */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-11 h-11 rounded-full bg-[var(--brand-orange)] shadow-[0_0_20px_rgba(243,121,54,0.6)] border-2 border-white/40 flex items-center justify-center group hover:scale-130 transition-transform cursor-pointer"
          >
            <Megaphone className="w-5 h-5 text-white drop-shadow" />
          </motion.div>
        </div>
      </motion.div>


      {/* ================= 4. MASSIVE CENTERPIECE LOGO HUB ================= */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="relative z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full glass-panel bg-slate-950/95 border-4 border-white/20 shadow-[0_0_60px_rgba(243,121,54,0.5)] flex flex-col items-center justify-center p-5 text-center cursor-pointer group"
      >
        {/* Rotating Outer Glow Ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] opacity-60 blur-lg group-hover:opacity-90 transition-opacity animate-spin-slow" />
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <img
            src="/logo/IMG_2933.PNG"
            alt="Fly Creative Solutions Logo Centerpiece"
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-108 drop-shadow-[0_0_12px_rgba(243,121,54,0.4)]"
          />
          <div className="flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-3 h-3 text-[var(--brand-yellow)]" />
            <span className="text-[10px] font-black text-white tracking-widest uppercase">360° Growth Hub</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
