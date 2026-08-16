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
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] text-slate-950 py-2.5 sm:py-4 shadow-xl border-y-2 sm:border-y-4 border-white/60 z-20 -mt-2 sm:-mt-6">
      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "linear"
          }}
          className="flex items-center gap-8 sm:gap-16 shrink-0 font-black text-sm sm:text-xl lg:text-2xl tracking-wider uppercase antialiased"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-16 shrink-0">
              <span className="flex items-center gap-2 sm:gap-4 text-slate-950 font-black">
                {item}
              </span>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-slate-950 fill-slate-950/40 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
