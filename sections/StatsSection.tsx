"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Trophy, CheckCircle2, Layers, Sparkles, Zap } from "lucide-react";

// Dynamic Real-Time Count-Up Hook/Component
function DynamicCountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out function for smooth count physics
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutQuad * to));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
  const icons = [Trophy, CheckCircle2, Layers, Sparkles];

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAFAFC] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── HEADING OUTSIDE THE DARK BACKGROUND ── */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-[11px] font-black uppercase tracking-wider">
            <Zap className="w-3 h-3 text-[var(--brand-orange)]" /> DYNAMIC PROVEN IMPACT
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Growth By <span className="gradient-text-brand">The Numbers</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Quantifiable real-time results delivered for businesses across Jalgaon &amp; Maharashtra.
          </p>
        </div>

        {/* ── DARK OBSIDIAN METRICS CONTAINER WITH DYNAMIC ANIMATED COUNTERS ── */}
        <div className="bg-[#0E0D1B] rounded-[28px] sm:rounded-[32px] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-xl">
          
          {/* Background Soft Sunset Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[25rem] h-[12rem] bg-[var(--brand-orange)]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[25rem] h-[12rem] bg-[var(--brand-magenta)]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Dynamic 4-Stat Grid inside Dark Shell */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {siteData.stats.map((stat, i) => {
              const IconComp = icons[i % icons.length];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex flex-col items-center text-center space-y-2 cursor-pointer"
                >
                  
                  {/* Small Icon Pod */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-[var(--brand-yellow)] group-hover:bg-gradient-to-tr group-hover:from-[var(--brand-orange)] group-hover:to-[var(--brand-magenta)] group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Dynamic Real-Time Animated Counter */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
                    <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 group-hover:from-[var(--brand-yellow)] group-hover:via-[var(--brand-orange)] group-hover:to-[var(--brand-magenta)] bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      <DynamicCountUp to={stat.value} duration={2.2} />
                    </span>
                    <span className="text-[var(--brand-orange)] ml-0.5">{stat.suffix}</span>
                  </div>

                  {/* Metric Label */}
                  <div className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[var(--brand-yellow)] transition-colors">
                    {stat.label}
                  </div>

                  {/* Short Description */}
                  <p className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-[12rem]">
                    {stat.desc}
                  </p>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
