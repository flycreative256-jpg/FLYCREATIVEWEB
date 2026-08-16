"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Rocket, Sparkles, Flame } from "lucide-react";

export function RocketLaunchGraphic() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const tiltX = useSpring(useTransform(mouseY, [-250, 250], [6, -6]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-250, 250], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const socialPlatforms = [
    {
      name: "Instagram",
      gradient: "from-amber-500 via-rose-500 to-purple-600",
      textColor: "text-rose-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      pos: "top-4 right-6 sm:right-8",
      duration: 4,
      delay: 0
    },
    {
      name: "YouTube",
      gradient: "from-red-600 to-rose-700",
      textColor: "text-red-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      pos: "top-1/4 right-0 sm:-right-2",
      duration: 4.5,
      delay: 0.6
    },
    {
      name: "Facebook",
      gradient: "from-blue-600 to-indigo-700",
      textColor: "text-blue-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      pos: "top-1/3 left-0 sm:-left-2",
      duration: 3.8,
      delay: 0.3
    },
    {
      name: "WhatsApp",
      gradient: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      ),
      pos: "bottom-24 right-4 sm:right-6",
      duration: 4.2,
      delay: 0.9
    },
    {
      name: "LinkedIn",
      gradient: "from-sky-600 to-blue-700",
      textColor: "text-sky-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
        </svg>
      ),
      pos: "top-6 left-6 sm:left-8",
      duration: 4,
      delay: 0.2
    },
    {
      name: "TikTok",
      gradient: "from-slate-900 via-pink-600 to-cyan-500",
      textColor: "text-pink-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.11 6.2 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.52V7.46a4.85 4.85 0 0 1-2.23-.77z"/>
        </svg>
      ),
      pos: "bottom-28 left-4 sm:left-6",
      duration: 4.6,
      delay: 1.1
    },
    {
      name: "X (Twitter)",
      gradient: "from-slate-800 to-slate-950",
      textColor: "text-slate-300",
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      pos: "bottom-6 left-1/3 -translate-x-1/2",
      duration: 3.9,
      delay: 0.7
    }
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[600px] aspect-square mx-auto flex flex-col items-center justify-between select-none overflow-visible py-4"
    >
      
      {/* Light Ambient Glow */}
      <div className="absolute top-[20%] w-80 h-80 bg-[var(--brand-orange)]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] w-96 h-96 bg-[var(--brand-magenta)]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= 1. OBSIDIAN LUXURY ROCKET STAGE ================= */}
      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY }}
        animate={{
          y: [-14, 14, -14],
          rotateZ: [-1, 1, -1]
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-30 flex flex-col items-center cursor-pointer group"
      >
        {/* Thrust Flame Plume */}
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-16 h-40 pointer-events-none z-10">
          <motion.div
            animate={{ scaleY: [1, 1.3, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-b from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] rounded-b-full blur-xs shadow-md"
          />
        </div>

        {/* Obsidian Luxury Rocket Hull Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative obsidian-card p-6 sm:p-7 rounded-3xl flex flex-col items-center text-center group"
        >
          <div className="relative mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[var(--brand-orange)] to-[var(--brand-magenta)] p-1 shadow-lg shadow-orange-500/25">
              <div className="w-full h-full bg-slate-950 rounded-[12px] flex items-center justify-center">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--brand-orange)] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[var(--brand-orange)] border-2 border-white flex items-center justify-center shadow">
              <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 mb-2">
            <img
              src="/logo/IMG_2933.PNG"
              alt="Fly Creative Solutions Logo Emblem"
              className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B333]" />
            <span className="text-[11px] font-black text-white tracking-widest uppercase gradient-text-brand">We Launch Brands Higher</span>
          </div>
        </motion.div>
      </motion.div>


      {/* ================= 2. OBSIDIAN SOCIAL MEDIA BUBBLES ================= */}
      <div className="relative w-full h-[52%] mt-4 flex items-center justify-center">
        
        {/* 7 Social Media Platforms in Obsidian Luxury Bubbles */}
        {socialPlatforms.map((platform) => (
          <motion.div
            key={platform.name}
            animate={{
              y: [-8, 8, -8],
              scale: [1, 1.06, 1]
            }}
            transition={{
              duration: platform.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: platform.delay
            }}
            className={`absolute ${platform.pos} z-20`}
          >
            <div className="obsidian-card px-3.5 py-2 rounded-full flex items-center gap-2.5 group cursor-pointer hover:scale-110 hover:border-[var(--brand-orange)]/50 transition-all duration-300">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${platform.gradient} flex items-center justify-center shadow-sm`}>
                {platform.icon}
              </div>
              <span className={`text-xs font-bold ${platform.textColor} pr-1`}>
                {platform.name}
              </span>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}
