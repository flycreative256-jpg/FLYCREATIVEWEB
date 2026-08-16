"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Star, Sparkles, ArrowUpRight, Award, TrendingUp, ShieldCheck } from "lucide-react";

export function FounderSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  const linkedinUrl = "https://www.linkedin.com/in/aaftab-shah-b72272194/";
  const instagramUrl = "https://www.instagram.com/the_aaftab_313/";
  const whatsappUrl = "https://wa.me/919325988188?text=Hi%20Aaftab,%20I'd%20like%20to%20discuss%20a%20project";

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 bg-gradient-to-b from-[#030307] via-[#100518] to-[#030307] overflow-hidden select-none">
      
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* 1. Giant Background Watermark Typography */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 flex justify-center items-center">
        <h1 className="text-[10rem] sm:text-[18rem] lg:text-[24rem] font-black uppercase tracking-tighter opacity-[0.08] bg-clip-text text-transparent bg-gradient-to-b from-[var(--brand-orange)] via-[var(--brand-magenta)] to-transparent leading-none select-none">
          VISIONARY
        </h1>
      </div>

      {/* 2. Cyber Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-tr from-[var(--brand-orange)]/10 via-[var(--brand-magenta)]/5 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-[#7C4DFF]/10 via-[var(--brand-orange)]/5 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 3. Abstract Geometric Dashed Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-[650px] h-[650px] border-[1px] border-white/[0.04] rounded-full pointer-events-none z-0 hidden lg:flex items-center justify-center border-dashed"
      >
         <div className="w-[440px] h-[440px] border-[1px] border-[var(--brand-orange)]/15 rounded-full flex items-center justify-center">
            <div className="w-[220px] h-[220px] border-[1px] border-[var(--brand-magenta)]/15 rounded-full border-dashed" />
         </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Ultra-Clean Executive Portrait */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Glow behind portrait */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[var(--brand-orange)]/20 via-transparent to-[var(--brand-magenta)]/20 opacity-50 blur-2xl pointer-events-none" />

            {/* High-Definition Portrait Card Container */}
            <div className="relative max-w-[380px] mx-auto lg:mx-0 group mt-10 lg:mt-0">
              
              {/* Offset Cyber Frame */}
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]) }}
                className="absolute -inset-5 border border-[var(--brand-orange)]/30 rounded-3xl hidden md:block z-0"
              >
                {/* Crosshairs at corners */}
                <div className="absolute -top-3 -left-3 text-[var(--brand-orange)]/60 text-lg font-light leading-none">+</div>
                <div className="absolute -top-3 -right-3 text-[var(--brand-orange)]/60 text-lg font-light leading-none">+</div>
                <div className="absolute -bottom-3 -left-3 text-[var(--brand-orange)]/60 text-lg font-light leading-none">+</div>
                <div className="absolute -bottom-3 -right-3 text-[var(--brand-orange)]/60 text-lg font-light leading-none">+</div>
              </motion.div>

              {/* Glowing Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[var(--brand-orange)]/20 via-transparent to-[var(--brand-magenta)]/20 blur-[60px] rounded-full pointer-events-none z-0" />

              {/* Main Image Container */}
              <motion.div 
                style={{ y: yImage }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] group-hover:border-white/30 transition-all duration-700 z-10"
              >
                {/* Natural High-Definition Portrait Photo */}
                <img
                  src="/assets/aaftab-shah.png"
                  alt="Aaftab Shah - Founder &amp; Visionary Director"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/founder.png";
                  }}
                />
                
                {/* Subtle overlay gradient to blend image nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030307] via-transparent to-transparent opacity-80 pointer-events-none" />
              </motion.div>

              {/* Floating Stamp Badge */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]) }}
                className="absolute -bottom-8 -right-6 md:-right-10 z-20 w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center backdrop-blur-md bg-white/[0.03] border border-white/10 shadow-2xl"
              >
                {/* Rotating Text */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white/80">
                    <path id="stamp-path" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text fontSize="9.5" fontWeight="bold" letterSpacing="1.5" className="uppercase fill-current">
                      <textPath href="#stamp-path" startOffset="0%">
                        VISIONARY LEADER • FLY CREATIVE • VISIONARY LEADER • FLY CREATIVE • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                {/* Center Icon */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--brand-orange)] to-[var(--brand-magenta)] flex items-center justify-center shadow-[0_0_15px_rgba(255,100,50,0.5)]">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Executive Typography, Highlights, & Social Links */}
          <motion.div 
            style={{ y: yText }}
            className="lg:col-span-7 lg:pl-8 flex flex-col justify-center space-y-7"
          >
            {/* Category Eyebrow Badge & Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-yellow)]" />
                <span>Leadership &amp; Vision</span>
              </div>

              {/* Clean Executive Name Header */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                Aaftab{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)]">
                  Shah
                </span>
              </h2>

              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--brand-orange)]">
                Founder &amp; Visionary Director
              </p>
            </div>

            {/* Strategic Philosophy Statement Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl space-y-3 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--brand-orange)]/15 via-[var(--brand-magenta)]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-3xl font-serif text-[var(--brand-orange)] opacity-50 leading-none">&ldquo;</div>
              <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic -mt-3">
                We don&apos;t just deliver marketing campaigns — we build scalable digital revenue infrastructure that transforms ambitious regional brands into dominating market leaders.
              </p>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                With over <strong className="text-white font-bold">6+ years of hands-on expertise</strong> in digital strategy, performance marketing, and brand engineering, Aaftab bridges the gap between regional business ambitions and modern digital scale.
              </p>
              <p className="text-slate-400 text-sm">
                He also established <strong className="text-slate-200 font-semibold">Skill District</strong>, an edtech initiative empowering regional talent with industry-ready digital skills.
              </p>
            </div>

            {/* Minimal High-Impact Metric Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-yellow)]" />
                <span>6+ Years Experience</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" />
                <span>250+ Brands Scaled</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-magenta)]" />
                <span>100+ ROI Campaigns</span>
              </div>
            </div>

            {/* Interactive Social Links & Direct Connect CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase text-[var(--brand-yellow)] tracking-widest mr-1">
                Let&apos;s Connect:
              </span>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 hover:text-white text-slate-300 text-xs font-bold transition-all flex items-center gap-2 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#e1306c] hover:bg-[#e1306c]/20 hover:text-white text-slate-300 text-xs font-bold transition-all flex items-center gap-2 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#e1306c]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/20 hover:text-white text-slate-300 text-xs font-bold transition-all flex items-center gap-2 group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
