"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";

import { CaseStudyModal } from "@/components/modals/CaseStudyModal";
import { PortfolioItem } from "@/data/portfolio";
import { CaseStudy } from "@/data/caseStudies";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function PortfolioPageClient() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenContact = (service: string = "") => {
    window.dispatchEvent(new CustomEvent("open-contact", { detail: service }));
  };

  const handleSelectPortfolio = (item: PortfolioItem) => {
    handleOpenContact(`Portfolio Inquiry: ${item.title}`);
  };

  return (
    <PageWrapper>
      {/* Page Hero Banner */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[var(--brand-orange)]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[var(--brand-magenta)]/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Our Work & Results
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              Portfolio &amp; <span className="gradient-text-brand">Case Studies</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Explore our creative work, high-converting campaigns, and the real client results behind each project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <PortfolioSection
        onSelectPortfolio={handleSelectPortfolio}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Case Studies */}
      <CaseStudiesSection
        onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
        onOpenContact={() => handleOpenContact()}
      />



      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={() => handleOpenContact("Case Study Growth Plan")}
      />
    </PageWrapper>
  );
}
