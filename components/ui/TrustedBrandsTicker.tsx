"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

const companies = [
  {
    name: "Apex Hospital",
    Logo: (props: any) => (
      <svg viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 5 L20 2 L30 5 L30 18 C30 25 22 35 20 38 C18 35 10 25 10 18 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="2"/>
        <path d="M16 15 H24 M20 11 V19" stroke="currentColor" strokeWidth="2.5" />
        <text x="42" y="22" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800">APEX</text>
        <text x="42" y="34" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" letterSpacing="2.5">HOSPITAL</text>
      </svg>
    )
  },
  {
    name: "Zenith Studio",
    Logo: (props: any) => (
      <svg viewBox="0 0 160 40" fill="none" stroke="currentColor" {...props}>
        <circle cx="20" cy="20" r="14" strokeWidth="2" />
        <path d="M12 14 L28 14 L12 26 L28 26" strokeWidth="2.5" />
        <text x="44" y="26" fill="currentColor" stroke="none" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold">Zenith.</text>
      </svg>
    )
  },
  {
    name: "Ojha Tech",
    Logo: (props: any) => (
      <svg viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <line x1="20" y1="4" x2="20" y2="16" strokeWidth="2"/>
        <line x1="6" y1="28" x2="16" y2="22" strokeWidth="2"/>
        <line x1="34" y1="28" x2="24" y2="22" strokeWidth="2"/>
        <text x="48" y="26" fill="currentColor" stroke="none" fontFamily="Courier New, monospace" fontSize="24" fontWeight="bold" letterSpacing="-1">OJHA<tspan fillOpacity="0.4">TECH</tspan></text>
      </svg>
    )
  },
  {
    name: "Khandesh Organics",
    Logo: (props: any) => (
      <svg viewBox="0 0 180 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 36 C20 20 6 20 6 6 C20 6 20 20 20 36" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
        <path d="M20 36 C20 24 32 24 32 12 C20 12 20 24 20 36" strokeWidth="1.5" />
        <text x="44" y="22" fill="currentColor" stroke="none" fontFamily="Verdana, sans-serif" fontSize="16" fontWeight="bold">KHANDESH</text>
        <text x="44" y="34" fill="currentColor" stroke="none" fontFamily="Verdana, sans-serif" fontSize="10" letterSpacing="3">ORGANICS</text>
      </svg>
    )
  },
  {
    name: "Horizon",
    Logo: (props: any) => (
      <svg viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 28 L34 28" strokeWidth="2.5" />
        <path d="M10 28 A10 10 0 0 1 30 28" strokeWidth="2.5" />
        <line x1="20" y1="18" x2="20" y2="10" strokeWidth="2" />
        <line x1="12" y1="20" x2="6" y2="14" strokeWidth="2" />
        <line x1="28" y1="20" x2="34" y2="14" strokeWidth="2" />
        <text x="46" y="26" fill="currentColor" stroke="none" fontFamily="Trebuchet MS, sans-serif" fontSize="22" fontWeight="600" letterSpacing="1">HORIZON</text>
      </svg>
    )
  },
  {
    name: "Deshmukh Dev",
    Logo: (props: any) => (
      <svg viewBox="0 0 180 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="6" y="16" width="8" height="20" strokeWidth="2" />
        <rect x="16" y="8" width="8" height="28" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="26" y="20" width="8" height="16" strokeWidth="2" />
        <path d="M6 36 L34 36" strokeWidth="2.5" />
        <text x="44" y="22" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.5">DESHMUKH</text>
        <text x="44" y="34" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" letterSpacing="2">DEVELOPERS</text>
      </svg>
    )
  }
];

export function TrustedBrandsTicker() {
  return (
    <section className="relative py-8 sm:py-12 bg-[#FAFAFC] overflow-hidden select-none">
      {/* Seamless Ambient Dot Matrix & Brand Gradient Layer */}
      <AmbientBackgroundElements />

      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Pill Container */}
        <div className="flex items-stretch rounded-[3rem] border border-slate-200/90 hover:border-[var(--brand-orange)]/40 transition-colors duration-500 bg-white/95 backdrop-blur-md shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] overflow-hidden h-[140px]">
          
          {/* Left Block */}
          <div className="hidden md:flex items-center gap-6 shrink-0 pl-12 pr-14 bg-slate-50/30 relative">
            <h3 className="text-xl font-black text-slate-800 leading-tight">
              Trusted By <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)]">
                Top Companies
              </span>
            </h3>
            <div className="w-10 h-10 rounded-full bg-[var(--brand-orange)]/10 flex items-center justify-center group-hover:bg-[var(--brand-orange)]/20 transition-colors">
              <ArrowUpRight className="w-5 h-5 text-[var(--brand-orange)]" />
            </div>

            {/* Premium Gradient Divider */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
          </div>

          {/* Right Marquee Block */}
          <div className="flex-1 overflow-hidden relative flex items-center bg-white">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex items-center gap-24 whitespace-nowrap pl-12 shrink-0"
            >
              {[...companies, ...companies, ...companies, ...companies].map((company, i) => {
                const Logo = company.Logo;
                return (
                  <div key={i} className="flex flex-col items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
                    <Logo className="h-11 w-auto text-slate-600 group-hover:text-[var(--brand-orange)] transition-colors duration-300" />
                  </div>
                );
              })}
            </motion.div>
            
            {/* Fade Gradients for smooth entrance/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
