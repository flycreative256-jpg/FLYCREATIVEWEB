"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { Button } from "@/components/ui/Button";

interface CaseStudyModalProps {
  study?: CaseStudy | null;
  caseStudy?: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function CaseStudyModal({ study, caseStudy, onClose, onOpenContact }: CaseStudyModalProps) {
  const activeStudy = study || caseStudy;
  if (!activeStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div className="text-xs font-bold text-[var(--brand-orange)] uppercase tracking-wider">{activeStudy.client}</div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {activeStudy.title}
            </h2>

            {activeStudy.results && activeStudy.results.length > 0 && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{activeStudy.results[0].label}</div>
                  <div className="text-3xl font-black gradient-text-brand">{activeStudy.results[0].value}</div>
                </div>
                <TrendingUp className="w-8 h-8 text-[var(--brand-orange)]" />
              </div>
            )}

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Challenge</h4>
                <p>{activeStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Strategy</h4>
                <p>{activeStudy.strategy}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Execution</h4>
                <p>{activeStudy.execution}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">Want similar growth for your brand?</p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
              >
                <span>Schedule Growth Audit</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
