"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/blog";
import { BlogCard } from "@/components/cards/BlogCard";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface BlogSectionProps {
  onSelectPost?: (post: BlogPost) => void;
  onSelectBlog?: (post: BlogPost) => void;
  limit?: number;
  showViewAll?: boolean;
}

export function BlogSection({ onSelectPost, onSelectBlog, limit, showViewAll }: BlogSectionProps) {
  const handleSelect = (post: BlogPost) => {
    if (onSelectPost) onSelectPost(post);
    if (onSelectBlog) onSelectBlog(post);
  };

  const displayedPosts = limit ? blogPostsData.slice(0, limit) : blogPostsData;

  return (
    <section id="blog" className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden select-none">
      
      {/* Subtle Ambient Background Elements */}
      <AmbientBackgroundElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Agency Insights &amp; Articles
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Latest Marketing <span className="gradient-text-brand">&amp; Tech Knowledge</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Practical strategies, SEO guides, and growth breakdowns for Maharashtra businesses.
          </p>
        </div>

        {/* Blog Grid using the New Reference BlogCard Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {displayedPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full"
            >
              <BlogCard post={post} onClick={() => handleSelect(post)} />
            </motion.div>
          ))}
        </div>

        {/* View All Articles Button */}
        {showViewAll && (
          <div className="text-center mt-14">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-[var(--brand-orange)] font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105"
            >
              <span>Explore All Articles</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
