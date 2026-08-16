"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, Monitor, Palette, Video, Sparkles, CheckCircle2, ArrowRight,
  Search, Share2, Layout, Film, Code, Target, MapPin, FileText, Zap, Compass, ArrowUpRight, MailOpen
} from "lucide-react";
import { servicesData, Service } from "@/data/services";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  isHomePage?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Search,
  Share2,
  Palette,
  Layout,
  Video,
  Film,
  Monitor,
  Code,
  Target,
  MapPin,
  FileText,
  Zap,
  Compass,
  MailOpen
};

const ACCENT_GRADIENTS = [
  "from-[#F4B333] via-[#E93E34] to-[#D92B7E]",
  "from-[#E93E34] via-[#D92B7E] to-[#F4B333]",
  "from-[#D92B7E] via-[#F4B333] to-[#E93E34]",
  "from-[#F4B333] via-[#D92B7E] to-[#E93E34]",
  "from-[#E93E34] via-[#F4B333] to-[#D92B7E]",
  "from-[#D92B7E] via-[#E93E34] to-[#F4B333]"
];

// Fly Creative Home Services Data with Brand Sunset Colors
const flyHomeServices = [
  {
    id: "digital-performance",
    number: "01",
    title: "Performance Ads & Meta Marketing",
    badge: "Scale Sales",
    icon: TrendingUp,
    accentGradient: "from-[#F4B333] via-[#E93E34] to-[#D92B7E]",
    metric: "High ROAS Engine",
    desc: "Targeted lead generation, ad creative testing, and funnel optimization engineered to convert leads into high-paying clients.",
    highlights: ["Meta & Google PPC", "Conversion Funnels", "ROAS Optimization"]
  },
  {
    id: "seo-search",
    number: "02",
    title: "Local SEO & Google Maps Rank",
    badge: "Rank #1 Jalgaon",
    icon: Search,
    accentGradient: "from-[#E93E34] via-[#D92B7E] to-[#F4B333]",
    metric: "Top Map Pack Rank",
    desc: "Dominate local Google Search and Maps. Turn high-intent local customer queries into consistent direct calls and walk-in leads.",
    highlights: ["Google Maps Pack", "Local Schema", "High-Intent Keywords"]
  },
  {
    id: "social-reels",
    number: "03",
    title: "Social Media & Reel Creation",
    badge: "Viral Content",
    icon: Share2,
    accentGradient: "from-[#D92B7E] via-[#E93E34] to-[#F4B333]",
    metric: "Viral 9:16 Format",
    desc: "Scroll-stopping vertical reels, carousel storyboards, and active community engagement across Instagram and YouTube.",
    highlights: ["9:16 Reel Scripts", "Content Calendars", "Audience Growth"]
  },
  {
    id: "web-dev",
    number: "04",
    title: "Custom Next.js Web Engineering",
    badge: "95+ Speed Score",
    icon: Monitor,
    accentGradient: "from-[#F4B333] via-[#E93E34] to-[#D92B7E]",
    metric: "Instant Load Speed",
    desc: "Ultra-fast custom React web applications with fluid motion animations, mobile-first design, and seamless lead capture forms.",
    highlights: ["Next.js & React", "Mobile-First UX", "CMS & Lead Forms"]
  },
  {
    id: "branding-visual",
    number: "05",
    title: "Brand Identity & Graphic Design",
    badge: "Visual Excellence",
    icon: Palette,
    accentGradient: "from-[#E93E34] via-[#F4B333] to-[#D92B7E]",
    metric: "Distinct Brand Persona",
    desc: "Craft a memorable visual presence with vector logos, color systems, corporate stationery, and high-impact marketing collateral.",
    highlights: ["Vector Logo Kit", "Brand Guidelines", "Marketing Collateral"]
  },
  {
    id: "video-post",
    number: "06",
    title: "Video Editing & Post-Production",
    badge: "Cinematic Quality",
    icon: Film,
    accentGradient: "from-[#D92B7E] via-[#F4B333] to-[#E93E34]",
    metric: "4K Motion & VFX",
    desc: "Professional video editing, color grading, motion graphics, and dynamic captions optimized for maximum watch time.",
    highlights: ["Motion VFX & Captions", "Color Grading", "Commercial Edits"]
  }
];

export function ServicesSection({ onSelectService, isHomePage = false }: ServicesSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Polished Top-Right Corner Cutout Notch Cards for Home Page
  if (isHomePage) {
    return (
      <section id="services" className="relative py-14 sm:py-18 bg-[#FAFAFC] text-slate-900 overflow-hidden">
        
        {/* Subtle Ambient Background Elements */}
        <AmbientBackgroundElements />

        {/* Soft Ambient Brand Gradient Mesh Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[40rem] h-[40rem] bg-[var(--brand-orange)]/6 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 right-1/4 w-[40rem] h-[40rem] bg-[var(--brand-magenta)]/6 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[var(--brand-orange)]/15 via-[var(--brand-yellow)]/15 to-[var(--brand-magenta)]/15 border border-[var(--brand-orange)]/30 text-slate-900 text-xs font-black uppercase tracking-widest shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[var(--brand-orange)]" />
              <span>Full-Funnel Agency Execution</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
            >
              High-Impact Capabilities <br />
              <span className="sm:whitespace-nowrap">
                Engineered For <span className="gradient-text-brand">Digital Scale</span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium"
            >
              Hover over any card to trigger our interactive strategy preview.
            </motion.p>
          </div>

          {/* ── TOP-RIGHT CORNER CUTOUT CARDS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {flyHomeServices.map((service, idx) => {
              const IconC = service.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative group cursor-pointer pt-4"
                >
                  {/* ── PRECISION POLISHED TOP-RIGHT CORNER STEPPED SVG CARD SHELL ── */}
                  <svg
                    className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 ${
                      isHovered ? "drop-shadow-[0_20px_40px_rgba(233,62,52,0.25)]" : "drop-shadow-sm"
                    }`}
                    viewBox="0 0 350 460"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 32 2 H 242 Q 256 2 258 16 Q 260 56 274 58 H 332 A 16 16 0 0 1 348 74 V 428 A 30 30 0 0 1 318 458 H 32 A 30 30 0 0 1 2 428 V 32 A 30 30 0 0 1 32 2 Z"
                      fill={isHovered ? "#121124" : "#FFFFFF"}
                      stroke={isHovered ? "#FFFFFF35" : "#E2E8F0"}
                      strokeWidth="2.5"
                      className="transition-colors duration-500"
                    />
                  </svg>

                  {/* ── FLOATING ICON BOX NESTLED RIGHT INSIDE TOP-RIGHT CORNER CUTOUT SLOT ── */}
                  <div className="absolute -top-3 right-3.5 z-20">
                    <motion.div
                      animate={{ 
                        rotateY: isHovered ? 180 : 0, 
                        scale: isHovered ? 1.12 : 1,
                        y: isHovered ? -2 : 0
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                      className={`w-15 h-15 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl border-4 ${
                        isHovered
                          ? `bg-gradient-to-tr ${service.accentGradient} text-white border-[#121124] shadow-orange-500/40 ring-2 ring-white/30`
                          : "bg-gradient-to-tr from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white border-white shadow-orange-500/20 ring-1 ring-[var(--brand-orange)]/20"
                      }`}
                    >
                      <IconC className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* ── INNER CARD CONTENT ── */}
                  <div className="relative pt-12 px-8 pb-8 h-full flex flex-col justify-between space-y-6 z-10">
                    
                    {/* Top Watermark Number & Badge */}
                    <div className="flex items-center justify-between pr-16">
                      <span className={`text-4xl font-black tracking-tighter transition-colors select-none ${
                        isHovered ? "text-white/15" : "text-slate-200"
                      }`}>
                        {service.number}
                      </span>

                      <span className={`text-[11px] font-black uppercase tracking-widest px-3.5 py-1.2 rounded-full border transition-all ${
                        isHovered
                          ? "bg-white/10 text-white border-white/25 shadow-xs"
                          : "bg-orange-50/90 text-[var(--brand-orange)] border-orange-200/80 shadow-2xs"
                      }`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-3">
                      <h3 className={`text-2xl font-black transition-colors leading-tight ${
                        isHovered ? "gradient-text-brand" : "text-slate-900"
                      }`}>
                        {service.title}
                      </h3>

                      <p className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors ${
                        isHovered ? "text-slate-300" : "text-slate-600"
                      }`}>
                        {service.desc}
                      </p>

                      {/* Deliverables Chip Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {service.highlights.map((h) => (
                          <motion.span
                            key={h}
                            whileHover={{ scale: 1.04 }}
                            className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-xl border transition-all ${
                              isHovered
                                ? "bg-white/10 text-slate-200 border-white/15"
                                : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-white"
                            }`}
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isHovered ? "text-[var(--brand-yellow)]" : "text-[var(--brand-orange)]"}`} />
                            {h}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Bar with SWAPPING Element Positions */}
                    <div className={`pt-5 border-t transition-colors ${
                      isHovered ? "border-white/15" : "border-slate-100"
                    }`}>
                      <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className={`flex items-center justify-between w-full ${
                          isHovered ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        {/* Text Link */}
                        <motion.a
                          layout
                          href="/services"
                          className={`text-xs font-black flex items-center gap-1.5 transition-colors ${
                            isHovered ? "text-[var(--brand-yellow)]" : "text-slate-800"
                          }`}
                        >
                          <span>Explore Framework</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.a>

                        {/* Arrow Circular Button */}
                        <motion.div
                          layout
                          className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? `bg-gradient-to-r ${service.accentGradient} text-white shadow-lg`
                              : "bg-slate-900 text-white"
                          }`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Redirect CTA Bar */}
          <div className="mt-20 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full bg-slate-900 text-white hover:bg-[var(--brand-orange)] font-black text-sm sm:text-base transition-all duration-300 shadow-2xl shadow-orange-500/20 group"
            >
              <span>Explore All 14+ Digital Services &amp; Detailed Strategies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>
      </section>
    );
  }

  // Full 14-Item Grid Mode for Dedicated /services Page
  return (
    <section id="services" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> High-Impact Solutions
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Integrated Services Engineered <br />
            For <span className="gradient-text-brand">Digital Growth</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            From performance marketing to custom web engineering, we deliver full-funnel digital agency solutions.
          </p>
        </div>

        {/* Full Services Grid with Home Page Stepped SVG Cutout Notch Shell Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const isHovered = hoveredIdx === idx;
            const accentGradient = ACCENT_GRADIENTS[idx % ACCENT_GRADIENTS.length];
            const numStr = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectService(service)}
                className="relative group cursor-pointer pt-4"
              >
                {/* ── PRECISION POLISHED TOP-RIGHT CORNER STEPPED SVG CARD SHELL ── */}
                <svg
                  className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 ${
                    isHovered ? "drop-shadow-[0_20px_40px_rgba(233,62,52,0.25)]" : "drop-shadow-sm"
                  }`}
                  viewBox="0 0 350 460"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 32 2 H 242 Q 256 2 258 16 Q 260 56 274 58 H 332 A 16 16 0 0 1 348 74 V 428 A 30 30 0 0 1 318 458 H 32 A 30 30 0 0 1 2 428 V 32 A 30 30 0 0 1 32 2 Z"
                    fill={isHovered ? "#121124" : "#FFFFFF"}
                    stroke={isHovered ? "#FFFFFF35" : "#E2E8F0"}
                    strokeWidth="2.5"
                    className="transition-colors duration-500"
                  />
                </svg>

                {/* ── FLOATING ICON BOX NESTLED RIGHT INSIDE TOP-RIGHT CORNER CUTOUT SLOT ── */}
                <div className="absolute -top-3 right-3.5 z-20">
                  <motion.div
                    animate={{ 
                      rotateY: isHovered ? 180 : 0, 
                      scale: isHovered ? 1.12 : 1,
                      y: isHovered ? -2 : 0
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`w-15 h-15 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl border-4 ${
                      isHovered
                        ? `bg-gradient-to-tr ${accentGradient} text-white border-[#121124] shadow-orange-500/40 ring-2 ring-white/30`
                        : "bg-gradient-to-tr from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white border-white shadow-orange-500/20 ring-1 ring-[var(--brand-orange)]/20"
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* ── INNER CARD CONTENT ── */}
                <div className="relative pt-12 px-8 pb-8 h-full flex flex-col justify-between space-y-6 z-10">
                  
                  {/* Top Watermark Number & Badge */}
                  <div className="flex items-center justify-between pr-16">
                    <span className={`text-4xl font-black tracking-tighter transition-colors select-none ${
                      isHovered ? "text-white/15" : "text-slate-200"
                    }`}>
                      {numStr}
                    </span>

                    <span className={`text-[11px] font-black uppercase tracking-widest px-3.5 py-1.2 rounded-full border transition-all ${
                      isHovered
                        ? "bg-white/10 text-white border-white/25 shadow-xs"
                        : "bg-orange-50/90 text-[var(--brand-orange)] border-orange-200/80 shadow-2xs"
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-black transition-colors leading-tight ${
                      isHovered ? "gradient-text-brand" : "text-slate-900"
                    }`}>
                      {service.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors ${
                      isHovered ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {service.shortDesc}
                    </p>

                    {/* Deliverables Chip Tags */}
                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {service.deliverables.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-md border transition-all ${
                              isHovered
                                ? "bg-white/10 text-white/90 border-white/15"
                                : "bg-slate-100 text-slate-700 border-slate-200/80"
                            }`}
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Footer with SWAPPING Element Positions */}
                  <div className="pt-4 border-t border-slate-200/40 group-hover:border-white/15">
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className={`flex items-center justify-between w-full ${
                        isHovered ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <motion.span
                        layout
                        className={`text-xs font-black flex items-center gap-1.5 transition-colors ${
                          isHovered ? "text-[var(--brand-yellow)]" : "text-slate-800"
                        }`}
                      >
                        <span>Explore Strategy</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.span>

                      <motion.div
                        layout
                        className={`w-8.5 h-8.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? `bg-gradient-to-r ${accentGradient} text-white shadow-lg`
                            : "bg-slate-900 text-white"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
