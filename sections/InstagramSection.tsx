"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/flyy_creative/";
  const embedUrl = "https://www.instagram.com/flyy_creative/embed";

  return (
    <section className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden text-slate-900 border-t border-slate-200/80">
      {/* Soft Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-[35rem] h-[35rem] bg-gradient-to-tr from-pink-500/8 via-rose-500/8 to-amber-500/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT COLUMN: CLEAN & SPACIOUS CALLOUT ================= */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-amber-500/10 border border-pink-500/20 text-pink-600 text-xs font-bold uppercase tracking-widest shadow-2xs"
            >
              <InstagramIcon className="w-4 h-4" /> Live Instagram Feed
            </motion.div>

            {/* Main Single-Line Headline (Matches Screenshot Layout) */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight"
            >
              Join Our{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                Instagram
              </span>
            </motion.h2>

            {/* Sub-Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xl sm:text-2xl font-bold text-slate-800"
            >
              Daily Reel Breakdowns &amp; Brand Transformations
            </motion.h3>

            {/* Short & Airy Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
            >
              Follow <strong className="text-slate-900 font-bold">@flyy_creative</strong> for daily reel breakdowns, visual brand reveals, and behind-the-scenes agency moments.
            </motion.p>

            {/* Clean CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="pt-2"
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-black text-sm sm:text-base hover:opacity-95 hover:scale-105 transition-all duration-300 shadow-xl shadow-pink-500/25 group"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>EXPLORE INSTAGRAM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: REAL INSTAGRAM PROFILE EMBED ================= */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md sm:max-w-lg mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden p-2 hover:shadow-pink-500/10 transition-shadow"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-white h-[340px] sm:h-[360px]">
                <iframe
                  src={embedUrl}
                  title="Fly Creative Live Instagram Profile"
                  className="w-full h-[340px] sm:h-[360px] border-none overflow-hidden rounded-2xl"
                  loading="lazy"
                  allow="encrypted-media"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
