"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { AIAgencyCommandCenter } from "@/components/graphics/AIAgencyCommandCenter";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const dynamicWords = ["FLY.", "SCALE.", "LEAD.", "GROW.", "DOMINATE."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [dynamicWords.length]);

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden bg-white">
      
      {/* ── LIGHT BACKGROUND WITH FLOATING LINES, CIRCLES & ICONS ── */}
      <AmbientBackgroundElements />

      {/* --- LIGHT BACKGROUND MESH --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-[45rem] h-[45rem] bg-[var(--brand-orange)]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[48rem] h-[48rem] bg-[var(--brand-magenta)]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN: HERO IMPACT & CTA ================= */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[var(--brand-orange)]" />
              <span className="uppercase tracking-widest gradient-text-brand font-black">Jalgaon's Premier Digital Growth Agency</span>
              <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-ping" />
            </motion.div>

            {/* Main Headline with Dynamic Animated Word */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]"
            >
              We Build Brands <br className="hidden sm:inline" />
              That{" "}
              <span className="inline-block relative min-w-[140px] sm:min-w-[220px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[wordIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="gradient-text-brand inline-block"
                  >
                    {dynamicWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>

                {/* ── ANIMATED ORGANIC CURVED HAND-WRITTEN VECTOR UNDERLINE ── */}
                <svg
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="handwritten-sunset-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F4B333" />
                      <stop offset="50%" stopColor="#E93E34" />
                      <stop offset="100%" stopColor="#D92B7E" />
                    </linearGradient>
                  </defs>

                  {/* Primary Hand-Drawn Curved Swoosh */}
                  <motion.path
                    key={`underline-main-${wordIndex}`}
                    d="M 4 11 C 55 18, 125 3, 196 13"
                    stroke="url(#handwritten-sunset-gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Secondary Subtle Hand-Drawn Accent Curve */}
                  <motion.path
                    key={`underline-sub-${wordIndex}`}
                    d="M 20 15 C 80 20, 150 9, 185 16"
                    stroke="url(#handwritten-sunset-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity={0.65}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.65 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
                  />
                </svg>

              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              We combine creative storytelling, cutting-edge technology, and performance digital marketing to help businesses build dominant brands and achieve revenue growth.
            </motion.p>

            {/* CTA Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenContact}
                className="btn-sunset px-8 py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-3 w-full sm:w-auto shadow-xl"
              >
                <span>Scale Your Brand</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="px-8 py-4 rounded-full text-base font-bold bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors w-full sm:w-auto shadow-xs"
              >
                <span>Explore Services</span>
              </button>
            </motion.div>

            {/* Verified Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-semibold"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[var(--brand-orange)]" />
                <span><strong className="text-slate-900">100+</strong> Projects Scaled</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[var(--brand-magenta)]" />
                <span><strong className="text-slate-900">4+ Years</strong> Agency Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4.5 h-4.5 text-[var(--brand-yellow)]" />
                <span><strong className="text-slate-900">Jalgaon, MH</strong> Headquarters</span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: AI AGENCY COMMAND CENTER ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full">
              <AIAgencyCommandCenter />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
