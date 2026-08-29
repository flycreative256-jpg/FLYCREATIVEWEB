"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Zap, BarChart3, Users, ArrowRight } from "lucide-react";

interface FeaturesSectionProps {
  onOpenContact: () => void;
}

export function FeaturesSection({ onOpenContact }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "roi-focus",
      title: "Data-Driven Performance & High ROI",
      badge: "Growth Engine",
      icon: BarChart3,
      desc: "We prioritize measurable revenue growth over vanity metrics. Every rupee spent on ads, web development, or video production is tracked against conversions and acquisition cost.",
      points: [
        "Real-time ROI dashboard reporting",
        "Conversion funnel optimization (CRO)",
        "A/B testing for ad creative & copy",
        "Predictable customer acquisition"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "local-global",
      title: "Jalgaon Local Market Dominance & Global Scale",
      badge: "Local Authority",
      icon: Users,
      desc: "Deep understanding of North Maharashtra's consumer demographics paired with international digital agency standards. We help local brands become regional leaders.",
      points: [
        "Hyper-local Jalgaon SEO targeting",
        "Regional language & Marathi storytelling",
        "Local Google Business Profile top ranks",
        "Community & event viral campaigns"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "modern-tech",
      title: "Cutting-Edge Tech & Premium Aesthetics",
      badge: "Digital Standards",
      icon: Zap,
      desc: "We craft visual identities and Next.js web applications that look like multi-million dollar global platforms. High contrast obsidian aesthetics and instant loading speeds.",
      points: [
        "Next.js & React frontend architecture",
        "Smooth Framer Motion scroll animations",
        "Mobile-first responsive UX",
        "95+ Google PageSpeed performance"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const currentFeature = features[activeTab];
  const IconComp = currentFeature.icon;

  return (
    <section className="relative py-14 sm:py-18 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 border border-[var(--brand-orange)]/30 text-[var(--brand-orange)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Agency Advantage
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Forward-Thinking Brands Choose <span className="gradient-text-brand">Fly Creative</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feat, idx) => {
            const TabIcon = feat.icon;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === idx
                    ? "btn-sunset shadow-md"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{feat.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display in Obsidian Luxury Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center obsidian-card p-6 sm:p-10 rounded-[32px]">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-dark-pill">
              <IconComp className="w-3.5 h-3.5 text-[#F4B333]" /> {currentFeature.badge}
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {currentFeature.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentFeature.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentFeature.points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#F4B333] flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="btn-sunset px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2"
              >
                <span>Scale With Fly Creative</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={currentFeature.image}
                alt={currentFeature.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
