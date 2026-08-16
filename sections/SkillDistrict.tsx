"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, CheckCircle2, ArrowRight, Award, 
  Palette, Film, Code, TrendingUp, Compass, Search, Clock, Laptop, Sparkles, ArrowUpRight
} from "lucide-react";
import { skillDistrictData, SkillTrack } from "@/data/skillDistrict";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

interface SkillDistrictProps {
  onOpenContact: (trackName?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Film,
  Code,
  TrendingUp,
  Compass,
  Search
};

export function SkillDistrict({ onOpenContact }: SkillDistrictProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Creative & Visuals", "Post Production", "Technology", "Marketing & Growth", "Strategy & Branding", "Search Intelligence"];

  const filteredTracks = selectedCategory === "All" 
    ? skillDistrictData.tracks 
    : skillDistrictData.tracks.filter(t => t.category === selectedCategory);

  return (
    <section id="skill-district" className="relative py-16 sm:py-24 bg-[#FAFAFC] overflow-hidden select-none">
      <AmbientBackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--brand-orange)]/15 via-[var(--brand-yellow)]/15 to-[var(--brand-magenta)]/15 border border-[var(--brand-orange)]/30 text-slate-900 text-xs font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            <span>Master Industry-Standard Tools</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)]">Skill Tracks</span> &amp; Certification
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Every track is built around 100% practical execution, real ad spends, agency workstations, and recognized certification.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Tracks 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {filteredTracks.map((track: SkillTrack, idx: number) => {
            const Icon = iconMap[track.iconName] || GraduationCap;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-[2rem] bg-white border border-slate-200/80 hover:border-[var(--brand-orange)]/40 hover:shadow-xl hover:shadow-[var(--brand-orange)]/5 transition-all duration-500 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--brand-orange)]/10 via-[var(--brand-yellow)]/10 to-[var(--brand-magenta)]/10 border border-[var(--brand-orange)]/20 text-[var(--brand-orange)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {track.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[var(--brand-orange)] transition-colors">
                    {track.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {track.description}
                  </p>

                  {/* Duration & Mode Meta */}
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500 pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                      <span>{track.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-[var(--brand-magenta)]" />
                      <span>{track.mode}</span>
                    </div>
                  </div>

                  {/* Tools / Skills Learned Pills */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Curriculum:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skillsLearned.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[11px] font-semibold text-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Enroll Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Target: <span className="text-slate-800">{track.careerRoles[0]}</span>
                  </span>

                  <button
                    onClick={() => onOpenContact(`Skill District Track: ${track.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[var(--brand-orange)] group-hover:text-[var(--brand-magenta)] transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Academy Guarantee Banner */}
        <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--brand-orange)]/20 via-[var(--brand-magenta)]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[var(--brand-yellow)] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Agency Hiring Guarantee
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Ready to transform from a learner into an agency professional?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join our next batch at Skill District Jalgaon. Work on active commercial campaigns, build an elite portfolio, and receive certified career placement.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenContact("Skill District Direct Application")}
              className="btn-sunset px-8 py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-3 w-full sm:w-auto shrink-0 shadow-xl shadow-[var(--brand-orange)]/25 cursor-pointer"
            >
              <span>Get Admission Details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
