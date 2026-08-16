"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Sparkles, Zap, Flame, TrendingUp, Palette, Rocket, ArrowUpRight } from "lucide-react";

export function AIAgencyCommandCenter() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Smooth 3D mouse parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 20 });

  // Interactive mouse tracking springs for Rocket & Thruster Smoke
  const rocketX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 180, damping: 18 });
  const rocketY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), { stiffness: 180, damping: 18 });
  const smokeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });
  const smokeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  const aiNodes = [
    {
      id: "ppc",
      title: "Performance Ads",
      stat: "High-ROI Funnels",
      icon: TrendingUp,
      gradient: "from-[#F4B333] to-[#E93E34]",
      pos: "top-0 left-0 sm:-left-4"
    },
    {
      id: "reels",
      title: "Content Creation",
      stat: "Viral 9:16 Reels",
      icon: Flame,
      gradient: "from-rose-500 to-[#D92B7E]",
      pos: "top-4 right-0 sm:-right-4"
    },
    {
      id: "branding",
      title: "Brand Identity",
      stat: "Logos & Graphics",
      icon: Palette,
      gradient: "from-emerald-400 to-teal-600",
      pos: "bottom-4 left-0 sm:-left-4"
    },
    {
      id: "web",
      title: "Web Engineering",
      stat: "Custom Next.js",
      icon: Rocket,
      gradient: "from-purple-500 to-indigo-600",
      pos: "bottom-0 right-0 sm:-right-4"
    }
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto py-10 min-h-[440px] flex items-center justify-center select-none cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {/* ── AMBIENT SUNSET NEURAL GLOW ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[var(--brand-yellow)]/20 via-[var(--brand-orange)]/25 to-purple-600/20 blur-[110px] animate-pulse" />
      </div>

      {/* ── INTERCONNECTED NEURAL LASER THREADS ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="neuralLaser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4B333" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E93E34" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D92B7E" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <path d="M 120 100 Q 250 250 380 120" stroke="url(#neuralLaser)" strokeWidth="2" strokeDasharray="6 6" fill="none" className="animate-pulse" />
        <path d="M 120 400 Q 250 250 380 380" stroke="url(#neuralLaser)" strokeWidth="2" strokeDasharray="6 6" fill="none" className="animate-pulse" />
        <path d="M 120 100 Q 250 250 120 400" stroke="url(#neuralLaser)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        <path d="M 380 120 Q 250 250 380 380" stroke="url(#neuralLaser)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      </svg>

      {/* ── 3D FLUID PARALLAX STAGE ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-10 w-full h-[380px] flex items-center justify-center"
      >
        
        {/* CENTRAL GLOWING ORB WITH LAUNCHING ROCKET & THRUSTER SMOKE */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], rotate: [0, 360] }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
          className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] shadow-[0_0_60px_rgba(233,62,52,0.55)] flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-white/20 backdrop-blur-xl">
            {/* Interactive Thruster Smoke & Fire Particles (Follows Mouse in Parallax) */}
            <motion.div
              style={{ x: smokeX, y: smokeY }}
              className="absolute -bottom-1 w-20 h-16 bg-gradient-to-t from-[var(--brand-orange)] via-amber-500/80 to-transparent rounded-full blur-md animate-pulse opacity-90"
            />
            <motion.div
              style={{ x: smokeX, y: smokeY }}
              className="absolute bottom-2 w-12 h-10 bg-white/40 rounded-full blur-lg animate-ping opacity-60"
            />

            {/* Interactive Launching Rocket (Tracks Mouse Cursor Directly) */}
            <motion.div
              style={{ x: rocketX, y: rocketY }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(244,179,51,0.9)]"
            >
              <Rocket className="w-11 h-11 text-[var(--brand-yellow)] fill-[var(--brand-yellow)]/20 -rotate-45" />
            </motion.div>
          </div>
        </motion.div>

        {/* ── FLOATING ORGANIC AI STAT NODES ── */}
        {aiNodes.map((node) => {
          const IconC = node.icon;
          const isSelected = hoveredNode === node.id;

          return (
            <motion.div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${node.pos} transition-all duration-300`}
            >
              <div className={`flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-xl group hover:scale-110 transition-transform ${
                isSelected ? "border-[var(--brand-orange)] shadow-orange-500/30 scale-110" : ""
              }`}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${node.gradient} text-white flex items-center justify-center font-bold shadow-lg shrink-0`}>
                  <IconC className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    {node.title}
                  </span>
                  <span className="text-sm sm:text-base font-black gradient-text-brand">
                    {node.stat}
                  </span>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          );
        })}

      </motion.div>
    </div>
  );
}
