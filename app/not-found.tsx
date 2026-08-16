"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home, Compass, ArrowRight, Sparkles, Search, 
  Briefcase, MessageCircle, RefreshCw, MoveLeft
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B16] text-white selection:bg-[var(--brand-orange)] selection:text-white relative overflow-hidden">
      {/* Dynamic Header */}
      <Header onOpenContact={() => {}} />

      {/* Main 404 Content Container */}
      <main className="flex-1 flex items-center justify-center relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        
        {/* Background Ambient Glow Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[var(--brand-orange)]/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-[var(--brand-magenta)]/15 rounded-full blur-[140px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-yellow)]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[var(--brand-yellow)] text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            <span>Error 404 • Page Not Found</span>
          </motion.div>

          {/* Animated 404 Number with Orbital Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative select-none flex items-center justify-center"
          >
            {/* Giant Glowing 404 Typography */}
            <h1 className="text-8xl sm:text-[13rem] lg:text-[16rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] drop-shadow-[0_20px_50px_rgba(233,62,52,0.35)]">
              404
            </h1>

            {/* Floating Orbital Creative Pill */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-2xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-3"
            >
              <Compass className="w-5 h-5 text-[var(--brand-orange)] animate-spin [animation-duration:8s]" />
              <span className="text-xs sm:text-sm font-bold text-slate-200">
                Lost in Digital Space?
              </span>
            </motion.div>
          </motion.div>

          {/* Description & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 max-w-xl mx-auto"
          >
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Oops! This Page Flew Away.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              The page you are looking for might have been relocated, removed, or never existed. Let&apos;s get you back to growing your brand.
            </p>
          </motion.div>

          {/* Navigation Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/"
              className="btn-sunset px-8 py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-xl shadow-[var(--brand-orange)]/25 hover:scale-105 transition-transform"
            >
              <Home className="w-4 h-4" />
              <span>Back To Homepage</span>
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center justify-center gap-2.5 w-full sm:w-auto backdrop-blur-md hover:scale-105 transition-all"
            >
              <Briefcase className="w-4 h-4 text-[var(--brand-yellow)]" />
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Quick Helpful Links Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-white/10 max-w-2xl mx-auto"
          >
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
              <Link href="/portfolio" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[var(--brand-yellow)] transition-colors">
                ✦ Portfolio
              </Link>
              <Link href="/skill-district" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[var(--brand-yellow)] transition-colors">
                ✦ Skill District
              </Link>
              <Link href="/careers" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[var(--brand-yellow)] transition-colors">
                ✦ Careers (Hiring)
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[var(--brand-yellow)] transition-colors">
                ✦ Contact Agency
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => {}} />
    </div>
  );
}
