"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, ArrowRight, MessageSquare } from "lucide-react";
import { FaqItem } from "@/data/faq";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  onOpenContact?: () => void;
}

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Have questions about our agency, execution process, or growth frameworks? We have answered the most common inquiries below.",
  badge = "Got Questions?",
  onOpenContact
}: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open first question

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent("open-contact", { detail: "FAQ Inquiry" }));
    }
  };

  return (
    <section className="relative py-24 bg-[#FAFAFC] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[var(--brand-orange)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[var(--brand-magenta)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <HelpCircle className="w-4 h-4" /> {badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
          >
            {title.includes("Questions") ? (
              <>
                Frequently Asked <span className="gradient-text-brand">Questions</span>
              </>
            ) : (
              title
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[var(--brand-orange)]/40 shadow-lg shadow-orange-500/5 ring-1 ring-[var(--brand-orange)]/20"
                    : "bg-white/80 hover:bg-white border-slate-200 shadow-xs"
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleIdx(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className={`text-base sm:text-lg font-extrabold transition-colors ${
                    isOpen ? "gradient-text-brand" : "text-slate-900 group-hover:text-[var(--brand-orange)]"
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white rotate-180 shadow-md"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-[#F4B333] flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-slate-300">Speak directly with Aaftab &amp; the Fly Creative strategist team.</p>
            </div>
          </div>

          <button
            onClick={handleContactClick}
            className="btn-sunset px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2 shrink-0 shadow-md group"
          >
            <span>Ask A Strategist</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
