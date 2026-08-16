"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { portfolioData, PortfolioItem, portfolioCategories } from "@/data/portfolio";

interface PortfolioSectionProps {
  onSelectPortfolio: (item: PortfolioItem) => void;
  onOpenContact?: () => void;
}

export function PortfolioSection({ onSelectPortfolio, onOpenContact }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Featured <span className="gradient-text-brand">Client Work</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore our high-converting branding campaigns, social media growth, and custom websites.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[var(--brand-orange)] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid in Obsidian Luxury Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectPortfolio(item)}
                className="group cursor-pointer"
              >
                <div className="obsidian-card obsidian-card-hover h-full rounded-3xl overflow-hidden flex flex-col justify-between">
                  
                  {/* Image Showcase */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30">
                        View Case Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="badge-dark-pill px-3 py-1 rounded-full">{item.category}</span>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-[#F4B333] uppercase tracking-wider">
                      {item.client}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text-brand transition-all">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Result Stat Pill */}
                    {item.metrics && (
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300">
                        <span>Outcome</span>
                        <span className="gradient-text-brand">{item.metrics}</span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
