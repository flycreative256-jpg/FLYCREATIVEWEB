"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { caseStudiesData, CaseStudy } from "@/data/caseStudies";

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenContact?: () => void;
}

export function CaseStudiesSection({ onSelectCaseStudy, onOpenContact }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" /> High ROI Case Studies
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Real Client Results <span className="gradient-text-brand">& Scaled Revenue</span>
          </h2>
        </div>

        {/* Case Studies Grid in Obsidian Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onSelectCaseStudy(study)}
              className="group cursor-pointer"
            >
              <div className="obsidian-card obsidian-card-hover h-full p-8 rounded-3xl flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <span className="badge-dark-pill px-3 py-1 rounded-full">{study.client}</span>

                  <h3 className="text-xl font-bold text-white group-hover:gradient-text-brand transition-all">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                    {study.challenge}
                  </p>

                  {study.results && study.results.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">
                        {study.results[0].label}
                      </div>
                      <div className="text-3xl font-black gradient-text-brand">
                        {study.results[0].value}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>Read Breakdown</span>
                  <div className="w-8 h-8 rounded-full bg-[var(--brand-orange)] text-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
