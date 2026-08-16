"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import { testimonialsData, GMB_PROFILE_URL } from "@/data/testimonials";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const total = testimonialsData.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get 3 active visible cards in carousel loop
  const visibleCards = Array.from({ length: visibleCount }).map((_, idx) => {
    return testimonialsData[(startIndex + idx) % total];
  });

  return (
    <section id="reviews" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden select-none">
      
      {/* Ambient Background Gradient Spots & Lines */}
      <AmbientBackgroundElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= BALANCED ELEGANT HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/25 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Client Proof &amp; Reviews
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Trusted By <span className="gradient-text-brand">Growth Leaders</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Real feedback from business owners &amp; brands we&apos;ve partnered with across digital marketing, video reels, and performance campaigns.
            </p>
          </div>

          {/* Top-Right Carousel Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md hover:bg-slate-900 hover:text-white hover:border-slate-900 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md hover:bg-slate-900 hover:text-white hover:border-slate-900 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* ================= REDESIGNED LUXURY REVIEW CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-6">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-[28px] border border-slate-200/80 p-6 pt-12 text-center relative shadow-sm flex flex-col justify-between items-center hover:shadow-xl transition-all duration-300 group"
              >
                
                {/* Floating Blank Google Default DP Top-Center */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16">
                  <div
                    className="w-16 h-16 rounded-full p-0.5 shadow-md group-hover:scale-105 transition-transform border-2 border-white flex items-center justify-center font-black text-white text-2xl select-none"
                    style={{ backgroundColor: item.bgHex }}
                  >
                    <span>{item.initials}</span>
                  </div>
                  
                  {/* Google G Badge */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-5.5 h-5.5 rounded-full bg-white p-0.5 border border-slate-200 shadow-xs flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                </div>

                {/* Reviewer Metadata */}
                <div className="space-y-0.5 mt-2">
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[var(--brand-orange)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{item.role} • {item.company}</p>
                </div>

                {/* 5 Gold Stars & Verified Check Badge */}
                <div className="flex items-center justify-center gap-1 my-3 text-[#F4B333]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50 ml-0.5" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xs mx-auto italic">
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Bottom Project Tag & GMB Link */}
                <div className="pt-4 mt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-[var(--brand-orange)] bg-[var(--brand-orange)]/10 px-2.5 py-1 rounded-full">
                    {item.project}
                  </span>
                  <a
                    href={GMB_PROFILE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 font-bold transition-colors inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Google Review</span>
                    <ExternalLink className="w-3 h-3 text-[var(--brand-orange)]" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === idx
                  ? "w-8 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
