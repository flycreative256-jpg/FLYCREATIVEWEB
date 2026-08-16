"use client";

import React, { useState } from "react";
import { siteData } from "@/data/siteData";
import { ArrowUp, Send, Share2, Globe, Video, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <div className="bg-slate-100/80 pt-6 pb-3 px-1.5 sm:px-2.5 select-none">
      
      {/* ================= ULTRA-SPREAD FLOATING FOOTER WRAPPER ================= */}
      <footer className="w-full max-w-[99.4%] mx-auto relative">
        
        {/* ── 1. EXPANDED BALANCED FLOATING CTA BANNER ── */}
        <div className="relative z-30 px-4 sm:px-10 max-w-6xl mx-auto -mb-12 sm:-mb-14">
          <div className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] py-8 px-8 sm:py-10 sm:px-12 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 border-4 border-slate-100 ring-4 ring-slate-100/60">
            
            <div className="space-y-3 text-center sm:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-white" /> READY TO SCALE YOUR BRAND?
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Let&apos;s Launch Your Brand To <br className="hidden sm:inline" />
                <span>New Growth Heights</span>
              </h2>

              <p className="text-white/90 text-xs sm:text-base font-medium">
                Schedule a free 30-minute growth consultation in Jalgaon.
              </p>
            </div>

            {/* White Action Pill Button */}
            <button
              onClick={onOpenContact}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-black text-base tracking-wide flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all shrink-0 w-full sm:w-auto"
            >
              <span>Start Project Now</span>
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

          </div>
        </div>

        {/* ── 2. CARVED NOTCH WHITE SPACE CUTOUT & DARK FOOTER SHELL ── */}
        <div className="relative">
          
          {/* CARVED VECTOR NOTCH HEADER (CREATES PHYSICAL WHITE CUTOUT NOTCH FOR EXPANDED CTA) */}
          <div className="relative w-full h-14 sm:h-20 pointer-events-none -mb-1">
            <svg
              viewBox="0 0 1200 80"
              className="w-full h-full text-[#121124] fill-current"
              preserveAspectRatio="none"
            >
              {/* SVG Path: Adjusted for expanded CTA box width */}
              <path d="M 0 80 
                       L 0 35 
                       Q 0 10, 20 10 
                       L 150 10 
                       C 175 10, 185 75, 210 75 
                       L 990 75 
                       C 1015 75, 1025 10, 1050 10 
                       L 1180 10 
                       Q 1200 10, 1200 35 
                       L 1200 80 
                       Z" />
            </svg>
          </div>

          {/* Main Floating Dark Shell Container */}
          <div className="bg-[#121124] rounded-b-[16px] sm:rounded-b-[22px] border-x border-b border-white/10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)] relative overflow-hidden pt-8 sm:pt-12 p-8 sm:p-14 lg:p-16">
            
            {/* Ambient Sunset Glow Aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-magenta)]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
              
              {/* Col 1: Brand Info & Socials (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo/IMG_2933.PNG"
                    alt="Fly Creative Solutions"
                    className="h-14 w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/logo/IMG_2767.PNG";
                    }}
                  />
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-sm">
                  Empowering brands with cutting-edge digital solutions, performance marketing, viral reels, and custom Next.js web engineering to drive growth.
                </p>

                {/* Circular Social Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={siteData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[var(--brand-magenta)] border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={siteData.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[var(--brand-orange)] border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a
                    href={siteData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[var(--brand-yellow)] hover:text-slate-950 border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={siteData.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  >
                    <Video className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Col 2: Navigation Links (2 Cols) */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-white font-extrabold text-base tracking-wider border-b-2 border-[var(--brand-orange)] pb-2 inline-block">
                  Links
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-300">
                  <li><a href="/about" className="hover:text-[var(--brand-yellow)] transition-colors">About Us</a></li>
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Our Services</a></li>
                  <li><a href="/portfolio" className="hover:text-[var(--brand-yellow)] transition-colors">Recent Projects</a></li>
                  <li><a href="/skill-district" className="hover:text-[var(--brand-yellow)] transition-colors">Skill District</a></li>
                  <li>
                    <a href="/careers" className="hover:text-[var(--brand-yellow)] transition-colors inline-flex items-center gap-1.5 font-bold text-white">
                      <span>Careers</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white">HIRING</span>
                    </a>
                  </li>
                  <li><a href="/contact" className="hover:text-[var(--brand-yellow)] transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Col 3: Explore Expertise (3 Cols) */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-white font-extrabold text-base tracking-wider border-b-2 border-[var(--brand-magenta)] pb-2 inline-block">
                  Explore
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-300">
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Performance PPC Ads</a></li>
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Viral Video Reels</a></li>
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Next.js Web Engineering</a></li>
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Interactive Web Invitations</a></li>
                  <li><a href="/services" className="hover:text-[var(--brand-yellow)] transition-colors">Local Jalgaon SEO #1</a></li>
                </ul>
              </div>

              {/* Col 4: Newsletter Form (3 Cols) */}
              <div className="lg:col-span-3 space-y-4">
                <h4 className="text-white font-extrabold text-base tracking-wider border-b-2 border-[var(--brand-yellow)] pb-2 inline-block">
                  Newsletter
                </h4>
                
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Subscribe for daily growth breakdowns, ad funnels &amp; agency reveals.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-orange)] transition-colors pr-12"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 p-2 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white hover:scale-105 transition-transform"
                      aria-label="Send"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {subscribed && (
                    <p className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                    </p>
                  )}

                  <label className="flex items-start gap-2 text-xs text-slate-400 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 bg-slate-900 text-[var(--brand-orange)] focus:ring-0"
                    />
                    <span>I agree to all your terms and privacy policies.</span>
                  </label>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* ================= FLOATING SPLIT SUB-FOOTER BAR ================= */}
        <div className="mt-2.5 w-full max-w-[100%] sm:max-w-[93%] flex flex-col sm:flex-row items-stretch gap-2.5 relative z-20">
          
          {/* Shorter Sunset Brand Gradient Main Bar */}
          <div className="flex-1 bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] text-white rounded-b-[14px] sm:rounded-b-[18px] px-6 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-black shadow-xl border border-white/20">
            <span>© {new Date().getFullYear()} Fly Creative Solutions. All rights reserved.</span>
            <div className="flex items-center gap-4 text-white/90 font-extrabold">
              <a href="#" className="hover:text-slate-950 transition-colors">Terms &amp; Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-950 transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Moved 'TOP' Button Box */}
          <button
            onClick={scrollToTop}
            className="bg-slate-950 hover:bg-slate-900 text-white px-8 py-3.5 rounded-b-[14px] sm:rounded-b-[18px] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl border border-white/10 shrink-0 hover:scale-[1.02]"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4 stroke-[3] text-[var(--brand-orange)]" />
          </button>

        </div>

      </footer>
    </div>
  );
}
