"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function PortfolioModal({ item, onClose, onOpenContact }: PortfolioModalProps) {
  if (!item) return null;

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
            <div className="flex items-center gap-3">
              <Badge variant="brand">{item.category}</Badge>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.client}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {item.title}
            </h2>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            {item.metrics && (
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">Campaign Outcome</span>
                <span className="text-lg font-black gradient-text-brand">{item.metrics}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">Want similar results for your business?</p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
