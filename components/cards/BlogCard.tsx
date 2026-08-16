"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  // Parse date into Day & Month format (e.g. "Aug 12, 2026" -> Day: "12", Month: "AUG")
  const dateParts = post.date.split(" ");
  const month = (dateParts[0] || "AUG").toUpperCase().replace(",", "");
  const day = (dateParts[1] || "20").replace(",", "");

  return (
    <div
      onClick={onClick}
      className="group bg-white select-none cursor-pointer relative h-full transition-all duration-500 ease-out shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(233,62,52,0.16)] hover:-translate-y-2 border border-slate-100 flex flex-col justify-between
                 /* ── DYNAMIC CARD SHAPE MORPHING (CORNER RADIUS MORPHS ON HOVER) ── */
                 rounded-[32px] rounded-br-[16px] group-hover:rounded-[40px] group-hover:rounded-tl-[16px] group-hover:rounded-br-[40px]"
    >
      
      {/* ── 1. TOP IMAGE BANNER WITH MORPHING DATE BADGE ── */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950 rounded-t-[32px] group-hover:rounded-t-[40px] group-hover:rounded-tl-[16px] transition-all duration-500">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        
        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-slate-900/85 backdrop-blur-md text-[var(--brand-yellow)] text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[var(--brand-yellow)]/30 shadow-md">
            {post.category}
          </span>
        </div>

        {/* ── 2. EXACT SHAPE MORPHING DATE BADGE (EXTENDS UPWARDS INTO TALL ROUNDED PILLAR ON HOVER) ── */}
        <div className="absolute bottom-0 right-6 z-20 transition-all duration-500 ease-out">
          <div className="w-20 bg-white group-hover:bg-gradient-to-b group-hover:from-[var(--brand-yellow)] group-hover:via-[var(--brand-orange)] group-hover:to-[var(--brand-magenta)] shadow-xl rounded-t-[24px] group-hover:rounded-t-[36px] group-hover:rounded-b-none p-3 pt-4 text-center transition-all duration-500 ease-out transform translate-y-2 group-hover:-translate-y-6 group-hover:h-32 flex flex-col justify-center items-center border border-slate-100 group-hover:border-transparent group-hover:shadow-[0_15px_30px_rgba(233,62,52,0.35)]">
            
            {/* Day Number */}
            <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-white transition-colors duration-300 block leading-none tracking-tight">
              {day}
            </span>
            
            {/* Month Label */}
            <span className="text-xs font-black text-slate-400 group-hover:text-white/95 tracking-widest uppercase block mt-1.5 transition-colors duration-300">
              {month}
            </span>

          </div>
        </div>

      </div>

      {/* ── 3. WHITE CARD BODY WITH CORNER SHAPE MORPHING ── */}
      <div className="p-6 sm:p-7 pt-7 sm:pt-8 space-y-4 flex-1 flex flex-col justify-between transition-all duration-500">
        
        <div className="space-y-3.5">
          {/* Metadata Row */}
          <div className="flex items-center gap-2.5 text-xs font-bold text-slate-500 pb-3 border-b border-slate-100">
            <MessageCircle className="w-4 h-4 text-[var(--brand-orange)] fill-[var(--brand-orange)]/15 group-hover:scale-110 transition-transform shrink-0" />
            <span>2 Comments</span>
            <span className="text-slate-300">•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Headline Title */}
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[var(--brand-orange)] transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt Summary */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* ── 4. BOTTOM ACTION FOOTER ROW WITH MORPHING ACCENT LINE & ARROW ── */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs font-extrabold">
          
          <span className="text-slate-500 group-hover:text-slate-900 transition-colors shrink-0">
            Read More
          </span>

          {/* Connected Brand Sunset Line (Lights up on hover) */}
          <div className="flex-1 h-[2.5px] bg-slate-200 group-hover:bg-gradient-to-r group-hover:from-[var(--brand-yellow)] group-hover:via-[var(--brand-orange)] group-hover:to-[var(--brand-magenta)] transition-all duration-500 rounded-full" />

          {/* Brand Sunset Circular Action Arrow Button (Shape & Fill Morphs) */}
          <div className="w-11 h-11 rounded-full border-2 border-[var(--brand-orange)] text-[var(--brand-orange)] bg-white group-hover:bg-gradient-to-r group-hover:from-[var(--brand-orange)] group-hover:to-[var(--brand-magenta)] group-hover:text-white group-hover:border-transparent flex items-center justify-center transition-all duration-400 shadow-sm shrink-0 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(233,62,52,0.3)]">
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>

        </div>

      </div>

    </div>
  );
}
