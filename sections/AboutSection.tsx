"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AgencyShowcaseGraphic } from "@/components/graphics/AgencyShowcaseGraphic";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface AboutSectionProps {
  onOpenContact: () => void;
}

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      
      {/* ── LIGHT BACKGROUND FLOATING ELEMENTS ── */}
      <AmbientBackgroundElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Growth Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <AgencyShowcaseGraphic />
          </motion.div>

          {/* Right Column: Agency Story */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[var(--brand-orange)]" /> About Fly Creative Solutions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight"
            >
              Engineered To Scale <br />
              Brands To <span className="gradient-text-brand">New Heights</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              We are a premier digital marketing and branding agency in <strong>Jalgaon, Maharashtra</strong> built to accelerate brands into market leaders through high-impact content, social media marketing, performance campaigns, and web engineering.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-500 text-sm leading-relaxed"
            >
              Founded with a mission to deliver real business speed and revenue growth, we combine four growth pillars — <strong>Creative, Marketing, Technology, and Strategy</strong> — into a unified digital execution engine.
            </motion.p>

            {/* Checkmark Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
            >
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                <span>Full-Funnel Campaign Execution</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                <span>Dedicated Jalgaon Support Team</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                <span>High ROI Lead Acceleration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                <span>Custom High-Speed Tech Stack</span>
              </div>
            </motion.div>

            {/* Founder Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-3"
            >
              <a
                href="https://www.linkedin.com/in/aaftab-shah-b72272194/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3.5 p-2.5 pr-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[var(--brand-orange)] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shrink-0 shadow-xs">
                  <img
                    src="/assets/aaftab-shah.jpg"
                    alt="Aaftab Shah - Founder"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 group-hover:text-[var(--brand-orange)] transition-colors">
                    <span>Aaftab Shah</span>
                    <span className="text-[10px] text-slate-400 font-normal">• Founder &amp; CEO</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <span>6+ Years Growth Experience</span>
                    <span className="text-[#0A66C2] font-bold ml-1">LinkedIn ↗</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <a
                href="/about"
                className="btn-sunset px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 w-fit"
              >
                <span>Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
