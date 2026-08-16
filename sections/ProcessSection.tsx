"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, Compass, Target, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Brand Audit",
      desc: "We analyze your target market, competitors, and growth bottlenecks in Jalgaon & regional markets.",
      icon: Search
    },
    {
      num: "02",
      title: "Custom Growth Blueprint",
      desc: "We engineer a full-funnel strategy combining creative design, ad funnels, and tech stack setup.",
      icon: Compass
    },
    {
      num: "03",
      title: "Campaign Execution",
      desc: "We deploy high-converting ad campaigns, viral video content, and high-speed web infrastructure.",
      icon: Target
    },
    {
      num: "04",
      title: "Scale & Revenue Acceleration",
      desc: "We continuously optimize ad spend, conversions, and retention to maximize client ROI.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Our Growth Methodology
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How We Take Your Brand <br />
            To <span className="gradient-text-brand">Market Dominance</span>
          </h2>
        </div>

        {/* Process Steps Grid in Obsidian Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="obsidian-card obsidian-card-hover p-8 rounded-3xl group relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black gradient-text-orange opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-[#F4B333] flex items-center justify-center group-hover:bg-[var(--brand-orange)] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text-brand transition-all">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
