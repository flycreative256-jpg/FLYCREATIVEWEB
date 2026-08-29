"use client";

import React, { useState } from "react";
import { siteData } from "@/data/siteData";
import { ArrowUp, Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
      } catch (err) {
        console.warn("Newsletter sync error:", err);
      }
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
                  {/* Instagram */}
                  <a
                    href={siteData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0A66C2] border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={siteData.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#1877F2] border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteData.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] border border-white/15 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
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
