"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { StatsSection } from "@/sections/StatsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Target, Heart, Zap, Users, Award, ArrowRight,
  CheckCircle2, TrendingUp, Globe, Lightbulb, Shield
} from "lucide-react";
import { siteData } from "@/data/siteData";
import { FounderSection } from "@/components/ui/FounderSection";
import { FaqSection } from "@/sections/FaqSection";
import { aboutFaqs } from "@/data/faq";

const values = [
  {
    icon: Target,
    title: "Results First",
    desc: "Every strategy we build is measured by one metric — your growth. We don't chase vanity metrics, we chase real revenue.",
    color: "text-[var(--brand-orange)]",
    bg: "bg-[var(--brand-orange)]/10 border-[var(--brand-orange)]/30"
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    desc: "We push creative boundaries to make your brand stand out in crowded markets with content that stops the scroll.",
    color: "text-[var(--brand-yellow)]",
    bg: "bg-[var(--brand-yellow)]/10 border-[var(--brand-yellow)]/30"
  },
  {
    icon: Shield,
    title: "Transparent Partnership",
    desc: "Full visibility into every campaign, spend, and decision. No black boxes — you always know what we're doing and why.",
    color: "text-[var(--brand-magenta)]",
    bg: "bg-[var(--brand-magenta)]/10 border-[var(--brand-magenta)]/30"
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    desc: "The digital world moves fast. We move faster — with rapid execution, quick pivots, and always-on campaign management.",
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/30"
  },
  {
    icon: Heart,
    title: "Community Driven",
    desc: "Rooted in Jalgaon, we're invested in growing the local business ecosystem and empowering entrepreneurs across Maharashtra.",
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/30"
  },
  {
    icon: Globe,
    title: "Pan-India Reach, Jalgaon Roots",
    desc: "We bring world-class creative frameworks and performance ad strategies, helping businesses in Maharashtra and nationwide dominate their markets.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30"
  }
];

const pillars = [
  { icon: Sparkles, label: "Creative", desc: "Brand design, content, video production" },
  { icon: TrendingUp, label: "Marketing", desc: "SEO, social media, performance ads" },
  { icon: Zap, label: "Technology", desc: "Web development, automation, analytics" },
  { icon: Target, label: "Strategy", desc: "Brand positioning, growth roadmaps" }
];

const milestones = [
  { year: "2020", title: "Founded in Jalgaon", desc: "Started as a passionate creative studio with a vision to build a premier digital growth engine in North Maharashtra." },
  { year: "2021", title: "First 25 Clients", desc: "Delivered measurable social media, branding, and local search growth for businesses across Maharashtra." },
  { year: "2022", title: "Web & Tech Services", desc: "Expanded into high-performance web development and multi-platform digital advertising." },
  { year: "2023", title: "Skill District Launched", desc: "Launched our educational arm — Skill District — to train top-tier digital marketers, editors, and designers." },
  { year: "2024", title: "100+ Projects Across India", desc: "Crossed 100+ projects for clients across Jalgaon, Pune, Mumbai, Bengaluru, and Delhi NCR." },
  { year: "2025-26", title: "Pan-India Growth Powerhouse", desc: "Managing national performance ad budgets, viral content production, and enterprise Next.js engineering." }
];

export function AboutPageClient() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const handleOpenContact = (service: string = "") => {
    window.dispatchEvent(new CustomEvent("open-contact", { detail: service }));
  };

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-[var(--brand-orange)]/8 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-[var(--brand-magenta)]/8 rounded-full blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> Jalgaon&apos;s Premier Digital Agency
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              We Build Brands That <br className="hidden sm:inline" />
              <span className="gradient-text-brand">Matter</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              Fly Creative Solutions is Jalgaon&apos;s most growth-focused digital agency — combining creative storytelling, performance marketing, and technology to help brands dominate their market.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenContact()}
                className="btn-sunset px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/services"
                className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="relative py-20 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Born in Jalgaon. <br />
                Built for <span className="gradient-text-brand">Growth.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Fly Creative Solutions was founded with one clear mission: to bridge the gap between Jalgaon&apos;s ambitious businesses and the digital tools they need to compete — and win — in today&apos;s fast-moving market.
                </p>
                <p>
                  We started as a creative studio in 2020, working with local entrepreneurs who knew their products were great but struggled to reach the right audience. Over the years, we expanded into a full-service digital growth agency with dedicated teams for branding, marketing, web technology, and now education through Skill District.
                </p>
                <p>
                  Today, 100+ completed projects later, we serve clients across 15+ industries — from healthcare and education to e-commerce and real estate — all with a unified approach: <strong className="text-slate-900">strategy first, creativity always, results guaranteed.</strong>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full-Funnel Campaign Management",
                  "Dedicated Client Success Team",
                  "In-House Creative Production",
                  "Data-Driven Strategy",
                  "Custom Web Engineering",
                  "Skill District Training"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: 4 Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-5"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="obsidian-card p-6 rounded-3xl space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[var(--brand-orange)]">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white">{p.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MEET THE FOUNDER ── */}
      <FounderSection />

      {/* ── MISSION & VISION ── */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="obsidian-card p-8 sm:p-10 rounded-3xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-orange)]/20 border border-[var(--brand-orange)]/30 flex items-center justify-center text-[var(--brand-orange)]">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-[var(--brand-orange)] uppercase tracking-widest">Our Mission</div>
              <h2 className="text-2xl font-black text-white leading-tight">
                Empowering businesses to grow faster with digital clarity
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be Jalgaon&apos;s most trusted digital growth partner — delivering real, measurable results through creative strategy, performance marketing, and innovative technology for every client we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="obsidian-card p-8 sm:p-10 rounded-3xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-magenta)]/20 border border-[var(--brand-magenta)]/30 flex items-center justify-center text-[var(--brand-magenta)]">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs font-black text-[var(--brand-magenta)] uppercase tracking-widest">Our Vision</div>
              <h2 className="text-2xl font-black text-white leading-tight">
                A thriving digital economy across Maharashtra
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To build an ecosystem where every business — from a local Jalgaon startup to a growing enterprise — has access to world-class digital tools, training, and talent that help them compete globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── OUR JOURNEY (Interactive Timeline Hub) ── */}
      <section className="relative py-24 bg-[#FAFAFC] overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[var(--brand-orange)]/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--brand-magenta)]/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" /> Our Evolution
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Our Journey Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)]">The Years</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-sm sm:text-base">
              Explore how Fly Creative Solutions transformed from a small local studio into an industry-leading agency.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 rounded-full hidden sm:block" />
            
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 sm:gap-0 relative z-10">
              {milestones.map((m, idx) => {
                const isActive = activeMilestone === idx;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveMilestone(idx)}
                    className={`relative flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] shadow-lg shadow-orange-500/20 scale-105"
                        : "text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm"
                    }`}
                  >
                    <span>{m.year}</span>
                    {isActive && (
                      <motion.span
                        layoutId="timelineActiveIndicator"
                        className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[var(--brand-magenta)]"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Featured Milestone Card */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                {/* Big Background Year Watermark */}
                <span className="absolute right-4 bottom-0 text-[130px] sm:text-[180px] font-black text-slate-100/80 select-none leading-none -z-0 pointer-events-none font-sans">
                  {milestones[activeMilestone].year}
                </span>

                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-50 text-[var(--brand-orange)] font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5" /> Milestone {activeMilestone + 1} of {milestones.length}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {milestones[activeMilestone].title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {milestones[activeMilestone].desc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-row md:flex-col items-center gap-3 w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <button
                    onClick={() => setActiveMilestone((prev) => (prev > 0 ? prev - 1 : milestones.length - 1))}
                    className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveMilestone((prev) => (prev < milestones.length - 1 ? prev + 1 : 0))}
                    className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Grid View of all 7 milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 mt-8">
            {milestones.map((m, idx) => {
              const isActive = activeMilestone === idx;
              return (
                <div
                  key={m.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[var(--brand-orange)] shadow-md shadow-orange-500/10 ring-2 ring-[var(--brand-orange)]/20"
                      : "bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md ${isActive ? "bg-orange-100 text-[var(--brand-orange)]" : "bg-slate-100 text-slate-600"}`}>
                      {m.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{m.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{m.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative py-20 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" /> Our Core Values
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              What We <span className="gradient-text-brand">Stand For</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              These aren&apos;t just words on a wall — they&apos;re the principles that guide every decision, every campaign, and every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className={`w-11 h-11 rounded-2xl ${v.bg} border flex items-center justify-center ${v.color}`}>
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── FAQ SECTION ── */}
      <FaqSection 
        items={aboutFaqs} 
        title="About Fly Creative & Founder FAQs"
        subtitle="Learn more about our agency origins in Jalgaon, leadership philosophy under founder Aaftab Shah, and how we collaborate with brand partners."
        badge="About Us FAQs"
        onOpenContact={() => handleOpenContact()} 
      />

    </PageWrapper>
  );
}
