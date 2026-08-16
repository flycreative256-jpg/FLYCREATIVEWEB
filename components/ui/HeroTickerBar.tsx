"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const tickerItems = [
  "DIGITAL MARKETING AGENCY JALGAON",
  "100+ SUCCESSFUL BRAND PROJECTS",
  "VIRAL INSTAGRAM REELS & CREATIVE ADS",
  "LOCAL SEO & GOOGLE MAPS RANK #1",
  "CUSTOM NEXT.JS WEB ENGINEERING",
  "HIGH-ROI PERFORMANCE MARKETING",
  "SKILL DISTRICT CREATIVE TRAINING",
  "WE MAKE BRANDS FLY"
];

export function HeroTickerBar() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] text-slate-950 py-3.5 sm:py-4.5 shadow-xl border-y-4 border-white/60 z-20 -mt-4 sm:-mt-6">
      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear"
          }}
          className="flex items-center gap-14 sm:gap-18 shrink-0 font-black text-lg sm:text-2xl lg:text-3xl tracking-wider uppercase antialiased"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-14 sm:gap-18 shrink-0">
              <span className="flex items-center gap-4 text-slate-950 font-black">
                {item}
              </span>
              <Sparkles className="w-7 h-7 text-slate-950 fill-slate-950/40 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
