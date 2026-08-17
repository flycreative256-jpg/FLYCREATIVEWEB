"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function BlogModal({ post, onClose, onOpenContact }: BlogModalProps) {
  return (
    <AnimatePresence>
      {post && (
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
            className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 active:scale-90 transition-all cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <Badge variant="brand">{post.category}</Badge>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {post.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pb-4 border-b border-slate-100">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">Want to implement this strategy for your brand?</p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                >
                  <span>Talk to Our Experts</span>
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
