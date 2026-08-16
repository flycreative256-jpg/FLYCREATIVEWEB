"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface CtaSectionProps {
  onOpenContact: () => void;
}

export function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      
      {/* Ambient Background Gradient Spots & Lines */}
      <AmbientBackgroundElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Obsidian Luxury Card - Exact Match To Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="obsidian-card p-8 sm:p-14 rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-8 text-center sm:text-left relative overflow-hidden"
        >
          
          {/* Ambient Lighting Mesh Inside Card */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[var(--brand-orange)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--brand-magenta)]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Text Content */}
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-dark-pill">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B333]" /> READY TO SCALE YOUR BRAND?
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Let's Launch Your Brand To <br />
              <span className="gradient-text-brand">New Growth Heights</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Schedule a free 30-minute growth consultation with Fly Creative Solutions in Jalgaon.
            </p>
          </div>

          {/* Sunset Pill Button - Exact Match To Reference Image */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenContact}
              className="btn-sunset px-8 py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-3 w-full sm:w-auto shadow-xl"
            >
              <span>Start Project Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
