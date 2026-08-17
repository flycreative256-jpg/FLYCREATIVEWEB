"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenContact?: () => void;
  onSelectContact?: (serviceTitle?: string) => void;
}

export function ServiceModal({ service, onClose, onOpenContact, onSelectContact }: ServiceModalProps) {
  const handleContact = () => {
    onClose();
    if (onSelectContact && service) {
      onSelectContact(service.title);
    } else if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto touch-manipulation">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 active:scale-90 transition-all cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

          <div className="space-y-6">
            <Badge variant="brand">{service.badge}</Badge>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {service.title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">What We Deliver</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-orange)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">Ready to activate this service for your business?</p>
              <Button
                variant="primary"
                size="md"
                onClick={handleContact}
              >
                <span>Get Customized Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
