"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Flame, Zap, Award, Play, Sparkles, Star, CheckCircle2, ArrowUpRight } from "lucide-react";

export function CreativeHeroShowcase() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4 select-none">

      {/* Background Radial Glow & Gradient Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[var(--brand-yellow)]/20 via-[var(--brand-orange)]/25 to-[var(--brand-magenta)]/20 blur-[90px] animate-pulse" />
        <div className="w-[22rem] h-[22rem] rounded-full border border-[var(--brand-orange)]/20 animate-spin-slow opacity-60" />
      </div>

      {/* Central Interactive Floating Canvas */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Main Central Device / Reel Showcase Card */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[280px] sm:w-[310px] bg-slate-900 rounded-[38px] p-4 shadow-2xl border-4 border-white/20 backdrop-blur-xl group overflow-hidden"
        >
          {/* Glass Notch & Speaker */}
          <div className="w-24 h-4 bg-slate-950 rounded-b-xl mx-auto mb-3 flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
            <div className="w-8 h-1 rounded-full bg-slate-800" />
          </div>

          {/* Screen Content Showcase */}
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-slate-900 via-[#18132B] to-[#250E22] p-5 text-white space-y-4 border border-white/10">

            {/* Reel Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-[var(--brand-yellow)] to-[var(--brand-magenta)]">
                  <img
                    src="/logo/IMG_2936.PNG"
                    alt="Fly Creative Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white leading-none">flyy_creative</h4>
                  <span className="text-[9px] text-slate-400 font-semibold">Jalgaon, MH</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-black uppercase tracking-wider animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> LIVE REEL
              </span>
            </div>

            {/* Visual Media Canvas Box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-tr from-[var(--brand-orange)] via-[var(--brand-magenta)] to-purple-900 p-4 flex flex-col justify-between shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white">
                  9:16 Viral Reel
                </span>
                <Sparkles className="w-4 h-4 text-[var(--brand-yellow)]" />
              </div>

              {/* Central Play Indicator */}
              <div className="relative z-10 my-auto text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Bottom Soundwave Bars */}
              <div className="relative z-10 flex items-center justify-between text-xs font-bold text-white">
                <span className="text-[10px]">Client Growth Campaign</span>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-white rounded-full animate-bounce" />
                  <span className="w-1 h-5 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1 h-2 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
                  <span className="w-1 h-4 bg-white rounded-full animate-bounce [animation-delay:0.45s]" />
                </div>
              </div>
            </div>

            {/* Real-time Growth Stats Bar */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Meta &amp; Google Ads</span>
                <span className="text-sm font-black gradient-text-brand">+310% Revenue</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-orange)]/20 border border-[var(--brand-orange)]/40 text-[var(--brand-orange)] flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── FLOATING ORBIT BADGE 1: TOP LEFT (3.8x ROAS) ── */}
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -left-6 sm:-left-10 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3 text-slate-900"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--brand-yellow)] to-[var(--brand-orange)] text-white flex items-center justify-center shadow-md shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Performance PPC</span>
            <span className="text-sm sm:text-base font-black text-slate-900">4.8× High ROAS</span>
          </div>
        </motion.div>

        {/* ── FLOATING ORBIT BADGE 2: TOP RIGHT (1.2M Views) ── */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 -right-6 sm:-right-10 z-20 bg-slate-950/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-white/20 flex items-center gap-3 text-white"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Flame className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Viral Instagram Reels</span>
            <span className="text-sm sm:text-base font-black gradient-text-brand">1.2M+ Reach</span>
          </div>
        </motion.div>

        {/* ── FLOATING ORBIT BADGE 3: BOTTOM LEFT (Rank #1 SEO) ── */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 -left-6 sm:-left-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3 text-slate-900"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-[var(--brand-orange)] text-white flex items-center justify-center shadow-md shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Google Maps Rank</span>
            <span className="text-sm sm:text-base font-black text-slate-900">#1 Local Pack</span>
          </div>
        </motion.div>

        {/* ── FLOATING ORBIT BADGE 4: BOTTOM RIGHT (95+ Next.js Speed) ── */}
        <motion.div
          animate={{ y: [7, -7, 7] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -right-4 sm:-right-8 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-white/20 flex items-center gap-3 text-white"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Next.js Web Speed</span>
            <span className="text-sm sm:text-base font-black text-emerald-400">95+ Speed Score</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
