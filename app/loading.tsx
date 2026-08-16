"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Send, Zap, Rocket, Video, 
  Code2, TrendingUp, Palette, Flame
} from "lucide-react";

const CREATIVE_STAGES = [
  { text: "Igniting Creative Flight...", icon: Send, color: "text-[var(--brand-yellow)]" },
  { text: "Calibrating High-ROAS Funnels...", icon: TrendingUp, color: "text-[var(--brand-orange)]" },
  { text: "Rendering Cinematic Video Assets...", icon: Video, color: "text-[var(--brand-magenta)]" },
  { text: "Deploying Ultra-Fast Next.js Code...", icon: Code2, color: "text-sky-400" },
  { text: "Unleashing Brand Dominance...", icon: Flame, color: "text-[var(--brand-yellow)]" }
];

export default function Loading() {
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % CREATIVE_STAGES.length);
    }, 1800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 96 ? prev + Math.floor(Math.random() * 8) + 4 : 98));
    }, 200);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const CurrentIcon = CREATIVE_STAGES[stageIndex].icon;

  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center justify-center bg-[#060913] text-white py-20 relative overflow-hidden select-none">
      
      {/* Background Animated Aurora & Cosmic Sunset Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [-20, 20, -20]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[var(--brand-orange)]/25 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.12, 0.25, 0.12],
            y: [-30, 30, -30]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-[var(--brand-magenta)]/20 rounded-full blur-[130px]" 
        />
        <div className="absolute top-16 left-12 w-64 h-64 bg-[var(--brand-yellow)]/15 rounded-full blur-[110px]" />
      </div>

      {/* Main Creative Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-9 max-w-md px-6 text-center">
        
        {/* Floating Flight Arena */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          
          {/* Orbital Sunset Particle Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/15"
          >
            {/* Small Orbiting Starlet */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--brand-yellow)] shadow-[0_0_12px_#F4B333]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-dashed border-[var(--brand-magenta)]/30"
          >
            {/* Small Orbiting Magenta Sparkle */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--brand-magenta)] shadow-[0_0_10px_#D92B7E]" />
          </motion.div>

          {/* Central Glowing Flight Pod */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 4, -4, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] p-[2.5px] shadow-[0_15px_50px_rgba(233,62,52,0.45)]"
          >
            <div className="w-full h-full rounded-3xl bg-[#090D1A] flex flex-col items-center justify-center relative overflow-hidden">
              
              {/* Internal Ambient Light Beam */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              {/* Dynamic Flying Jet Icon with Thruster Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [15, 25, 15]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Send className="w-9 h-9 text-transparent fill-[url(#sunset-grad)] text-[var(--brand-orange)] drop-shadow-[0_0_15px_rgba(244,179,51,0.8)]" />
              </motion.div>

              {/* Micro Exhaust Thruster Fire */}
              <motion.div
                animate={{
                  height: [4, 12, 4],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 rounded-full bg-gradient-to-b from-[var(--brand-yellow)] to-[var(--brand-orange)] -mt-1 blur-[0.5px]"
              />
            </div>
          </motion.div>

          {/* SVG Gradient Defs */}
          <svg className="absolute w-0 h-0">
            <linearGradient id="sunset-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4B333" />
              <stop offset="50%" stopColor="#E93E34" />
              <stop offset="100%" stopColor="#D92B7E" />
            </linearGradient>
          </svg>
        </div>

        {/* Dynamic Creative Stages & Typography */}
        <div className="space-y-3.5 w-full">
          
          {/* Top Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-black uppercase tracking-widest text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[var(--brand-yellow)] font-extrabold">Fly Creative Solutions</span>
          </div>

          {/* Cycling Status Text with Slide Transitions */}
          <div className="h-9 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={stageIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-slate-100"
              >
                <CurrentIcon className={`w-4 h-4 ${CREATIVE_STAGES[stageIndex].color} animate-pulse`} />
                <span>{CREATIVE_STAGES[stageIndex].text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Glowing Progress Bar & Live Counter */}
        <div className="w-full space-y-2">
          
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
            <span className="tracking-wider uppercase text-[10px] text-slate-500 font-extrabold">Engine Optimization</span>
            <span className="text-[var(--brand-yellow)] font-mono">{progress}%</span>
          </div>

          {/* Progress Track */}
          <div className="w-full h-2 rounded-full bg-slate-900 border border-white/10 overflow-hidden relative p-[1px]">
            <motion.div
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
              className="h-full bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] rounded-full shadow-[0_0_12px_rgba(233,62,52,0.8)] relative"
            >
              {/* Light Shimmer on Progress Bar */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
              />
            </motion.div>
          </div>
        </div>

      </div>

    </div>
  );
}
