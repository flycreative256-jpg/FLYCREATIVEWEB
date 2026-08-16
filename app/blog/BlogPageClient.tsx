"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BlogSection } from "@/sections/BlogSection";

import { BlogModal } from "@/components/modals/BlogModal";
import { BlogPost } from "@/data/blog";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function BlogPageClient() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenContact = (service: string = "") => {
    window.dispatchEvent(new CustomEvent("open-contact", { detail: service }));
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
              <Sparkles className="w-3.5 h-3.5" /> Insights & Strategies
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              Our <span className="gradient-text-brand">Blog</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Expert articles on digital marketing, SEO, branding, and business growth strategies from the Fly Creative team.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogSection onSelectPost={(post) => setSelectedPost(post)} />


      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenContact={() => handleOpenContact("Digital Growth Consultation")}
      />
    </PageWrapper>
  );
}
