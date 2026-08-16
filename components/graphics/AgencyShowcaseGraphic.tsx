"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, ShieldCheck, Zap, Layers, BarChart2 } from "lucide-react";

export function AgencyShowcaseGraphic() {
  const channelNodes = [
    { name: "Meta Ads", val: "+380%", color: "from-blue-600 to-indigo-600", pos: "top-4 left-4" },
    { name: "Google PPC", val: "4.8x ROAS", color: "from-amber-500 to-red-600", pos: "top-4 right-4" },
    { name: "Instagram Reels", val: "1.2M Views", color: "from-rose-500 to-purple-600", pos: "bottom-4 left-4" },
    { name: "Local Jalgaon SEO", val: "#1 Rank", color: "from-emerald-500 to-teal-600", pos: "bottom-4 right-4" }
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none py-4">
      
      {/* Light Ambient Lighting Glow */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-[var(--brand-orange)]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-[var(--brand-magenta)]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Obsidian Luxury Growth Card */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="obsidian-card p-6 sm:p-8 rounded-[36px] relative shadow-2xl space-y-6"
      >
        {/* Card Header with Logo */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20">
              <img
                src="/logo/IMG_2933.PNG"
                alt="Fly Creative Solutions Logo"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full badge-dark-pill">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Growth Dashboard</span>
          </div>
        </div>

        {/* Hero ROI Metric Showcase */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B333]" /> Client Growth Revenue
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              <span className="gradient-text-brand">+310%</span> Scaled Inquiry Rate
            </div>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--brand-orange)] to-[var(--brand-magenta)] flex items-center justify-center shadow-lg shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* 4 Performance Channels Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {channelNodes.map((node) => (
            <div
              key={node.name}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--brand-orange)]/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  {node.name}
                </span>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${node.color}`} />
              </div>
              <div className="text-lg font-black text-white group-hover:gradient-text-brand transition-all">
                {node.val}
              </div>
            </div>
          ))}
        </div>

        {/* Agency Trust Footer */}
        <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-400 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[var(--brand-orange)]" /> 100+ Projects Scaled
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#F4B333]" /> Jalgaon HQ
          </span>
        </div>

      </motion.div>

    </div>
  );
}
