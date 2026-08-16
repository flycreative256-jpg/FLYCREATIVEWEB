"use client";

import React from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SkillDistrict } from "@/sections/SkillDistrict";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";
import { motion } from "framer-motion";
import { 
  GraduationCap, ArrowRight, CheckCircle2, Sparkles, 
  Award, Users, Zap, ShieldCheck 
} from "lucide-react";

export function SkillDistrictPageClient() {
  const handleOpenContact = (service: string = "Skill District Enrollment") => {
    window.dispatchEvent(new CustomEvent("open-contact", { detail: service }));
  };

  const scrollToCourses = () => {
    const el = document.getElementById("skill-district");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageWrapper>
      {/* ── HIGH-IMPACT ACADEMY HERO ── */}
      <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#FAFAFC] overflow-hidden select-none">
        
        {/* Subtle Ambient Dot Matrix & Brand Sunset Glow */}
        <AmbientBackgroundElements />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Academy Narrative & Conversion Engine */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--brand-orange)]/15 via-[var(--brand-yellow)]/15 to-[var(--brand-magenta)]/15 border border-[var(--brand-orange)]/30 text-slate-900 text-xs font-black uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                <GraduationCap className="w-4 h-4 text-[var(--brand-orange)]" />
                <span>EdTech Arm of Fly Creative Solutions</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  Launch Your High-Income Career in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)]">
                    Digital &amp; Creative Media
                  </span>
                </h1>
              </div>

              {/* Value Proposition Description */}
              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                Skill District bridges the gap between traditional classroom theory and real-world execution. Master performance marketing, cinematic video editing, UI design, and full-stack web engineering with <strong>live client projects</strong> and guaranteed agency internship tracks.
              </p>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                  <span>100% Practical Training</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[var(--brand-magenta)] shrink-0" />
                  <span>Live Agency Client Ads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                  <Award className="w-4 h-4 text-[var(--brand-yellow)] shrink-0" />
                  <span>Recognized Certification</span>
                </div>
              </div>

              {/* Interactive CTA Hub */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => handleOpenContact("Skill District Batch Enrollment")}
                  className="btn-sunset px-8 py-4 rounded-full text-sm sm:text-base font-bold flex items-center gap-3 shadow-lg shadow-[var(--brand-orange)]/25 hover:shadow-xl hover:shadow-[var(--brand-orange)]/35 transition-all group"
                >
                  <span>Enroll in Next Batch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToCourses}
                  className="px-7 py-4 rounded-full text-sm sm:text-base font-bold text-slate-700 bg-white/90 hover:bg-slate-100/80 border border-slate-200 transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  Explore 6 Skill Tracks ↓
                </button>
              </div>

            </motion.div>

            {/* Right Column: Direct Clean Transparent Artwork Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 flex items-center justify-center relative py-4"
            >
              <img
                src="/assets/skill-district-transparent.png"
                alt="The Skill District - Learn the Skills That the World Demands"
                className="w-full max-w-[480px] h-auto object-contain hover:scale-103 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/assets/skill-district-main.jpg";
                }}
              />
            </motion.div>

          </div>

          {/* ── 4-PILLAR QUICK METRICS RIBBON ── */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-[var(--brand-orange)]/40 transition-all text-left space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] flex items-center justify-center font-black">
                01
              </div>
              <h4 className="text-sm font-black text-slate-900">Live Client Campaigns</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Spend real marketing budgets &amp; produce live commercial assets.</p>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-[var(--brand-orange)]/40 transition-all text-left space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[var(--brand-magenta)]/10 text-[var(--brand-magenta)] flex items-center justify-center font-black">
                02
              </div>
              <h4 className="text-sm font-black text-slate-900">1:1 Senior Mentorship</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Direct hands-on guidance from active Fly Creative directors.</p>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-[var(--brand-orange)]/40 transition-all text-left space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[var(--brand-yellow)]/15 text-amber-600 flex items-center justify-center font-black">
                03
              </div>
              <h4 className="text-sm font-black text-slate-900">Portfolio &amp; Resume</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Graduate with 5+ verified case studies to land top-tier roles.</p>
            </div>

            <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-[var(--brand-orange)]/40 transition-all text-left space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black">
                04
              </div>
              <h4 className="text-sm font-black text-slate-900">Guaranteed Internship</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Top performers are directly inducted into Fly Creative teams.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Curriculum Tracks Section */}
      <SkillDistrict onOpenContact={handleOpenContact} />
    </PageWrapper>
  );
}
