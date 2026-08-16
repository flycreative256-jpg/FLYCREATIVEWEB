"use client";

import React, { useState, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Sparkles, Send, CheckCircle2, User, Mail, Phone, 
  Link2, Briefcase, Award, TrendingUp, Laptop, Zap,
  Layers, PlaySquare, Share2, Infinity as InfinityIcon, Code2,
  Heart, MessageCircle, Send as SendIcon, ArrowRight, UploadCloud, FileText, X
} from "lucide-react";

function Tilt3DCharacter() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth responsive spring physics with high sensitivity
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 18 });

  // 3D Rotation + Parallax Shift
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["26deg", "-26deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-28deg", "28deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 1.3; // enhanced sensitivity
    const yPct = (mouseY / height - 0.5) * 1.3;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] flex items-center justify-center p-2 perspective-[1000px] select-none group cursor-pointer"
    >
      {/* Background ambient sunset glow */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--brand-orange)]/25 via-[var(--brand-yellow)]/20 to-[var(--brand-magenta)]/25 blur-3xl pointer-events-none -z-10 group-hover:scale-115 transition-transform duration-500" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.15 }}
        className="w-full flex items-center justify-center relative"
      >
        <img
          src="/assets/indian-lady-hiring-transparent.png?v=1"
          alt="Fly Creative Indian Executive - We Are Hiring"
          draggable={false}
          className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.2)] transition-transform duration-200 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

export function CareersPageClient() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Select Designation",
    experience: "1 - 2 Years",
    portfolioUrl: "",
    message: ""
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Curated agency positions for Fly Creative Solutions
  const designations = [
    "Select Designation",
    "Graphic Designer & Visual Artist",
    "Graphic Design Intern",
    "Video Editor & Motion Artist",
    "Video Editing Intern",
    "Social Media Strategist & Content Creator",
    "Social Media Intern",
    "Performance Marketer (Meta & Google Ads)",
    "Performance Marketing Intern",
    "Full-Stack Web Developer (Next.js & WordPress)",
    "Web Development Intern",
    "UI/UX & Product Designer",
    "Creative Scriptwriter & Copywriter",
    "Client Relationship & Growth Manager",
    "Skill District Creative Trainee",
    "Other / Spontaneous Application"
  ];

  const hiringCards = [
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      roleValue: "Graphic Designer & Visual Artist",
      icon: Layers,
      experience: "Experienced | Good Skill",
      tools: "Photoshop, Illustrator, Figma",
      bgGradient: "from-[#8B5CF6] to-[#7C3AED]",
      shadowColor: "rgba(139, 92, 246, 0.45)"
    },
    {
      id: "video-editor",
      title: "Video Editor",
      roleValue: "Video Editor & Motion Artist",
      icon: PlaySquare,
      experience: "Experienced | Good Skill",
      tools: "Premiere Pro, After Effects, DaVinci",
      bgGradient: "from-[#EF4444] to-[#DC2626]",
      shadowColor: "rgba(239, 68, 68, 0.45)"
    },
    {
      id: "social-media",
      title: "Social Media Manager",
      roleValue: "Social Media Strategist & Content Creator",
      icon: Share2,
      experience: "Experienced | Good Skill",
      tools: "Content Strategy, Trends, Copywriting",
      bgGradient: "from-[#F59E0B] to-[#D97706]",
      shadowColor: "rgba(245, 158, 11, 0.45)"
    },
    {
      id: "meta-ads",
      title: "Performance Marketer",
      roleValue: "Performance Marketer (Meta & Google Ads)",
      icon: InfinityIcon,
      experience: "Experienced | Good Skill",
      tools: "Meta Ads, Google Ads, ROAS Scaling",
      bgGradient: "from-[#0EA5E9] to-[#0284C7]",
      shadowColor: "rgba(14, 165, 233, 0.45)"
    },
    {
      id: "web-dev",
      title: "Web Developer",
      roleValue: "Full-Stack Web Developer (Next.js & WordPress)",
      icon: Code2,
      experience: "Experienced | Good Skill",
      tools: "Next.js, TypeScript, WordPress, Elementor",
      bgGradient: "from-[#10B981] to-[#059669]",
      shadowColor: "rgba(16, 185, 129, 0.45)"
    }
  ];

  const handleCardClick = (roleValue: string) => {
    setFormData((prev) => ({ ...prev, position: roleValue }));
    const formElement = document.getElementById("apply-now-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedRole = formData.position === "Select Designation" ? "General / Other" : formData.position;
    const fileNameInfo = selectedFile ? selectedFile.name : "N/A";

    const text = `*New Job Application - Fly Creative Solutions*%0A%0A` +
      `*Designation:* ${selectedRole}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Resume / File Attached:* ${fileNameInfo}%0A` +
      `*Portfolio / Drive Link:* ${formData.portfolioUrl || "N/A"}%0A` +
      `*Note:* ${formData.message || "Ready for interview."}`;

    window.open(`https://wa.me/917276400626?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "Select Designation",
        experience: "1 - 2 Years",
        portfolioUrl: "",
        message: ""
      });
      setSelectedFile(null);
    }, 4000);
  };

  return (
    <PageWrapper>
      <div className="bg-[#FAFAFC] min-h-screen">
        
        {/* ═══════════════════════════════════════════════════════
            SECTION 1: "WE'RE HIRING!" & 5 GLOWING COLOR CARDS
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden select-none bg-white">
          <AmbientBackgroundElements />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight"
              >
                We&apos;re <span className="gradient-text-brand">Hiring!</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-xl text-slate-600 font-medium"
              >
                Join our growing team of creatives, engineers and marketers
              </motion.p>
            </div>

            {/* 5 Glowing Color Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
              {hiringCards.map((card, idx) => {
                const IconComponent = card.icon;
                const isSelected = formData.position === card.roleValue;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.05, y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCardClick(card.roleValue)}
                    className={`cursor-pointer rounded-3xl p-6 text-white bg-gradient-to-b ${card.bgGradient} flex flex-col justify-between min-h-[260px] relative transition-all duration-300 ${
                      isSelected ? "ring-4 ring-slate-900 ring-offset-2 scale-105" : ""
                    }`}
                    style={{
                      boxShadow: `0 20px 35px -8px ${card.shadowColor}`
                    }}
                  >
                    {/* Top Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {/* Middle Title & Details */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-white/90 font-medium">
                        {card.experience}
                      </p>
                      <p className="text-[11px] text-white/80 leading-relaxed pt-1">
                        {card.tools}
                      </p>
                    </div>

                    {/* Quick Apply Click Action */}
                    <div className="pt-4 mt-2 border-t border-white/20 flex items-center justify-between text-xs font-black uppercase tracking-wider text-white">
                      <span>{isSelected ? "Selected ✓" : "Click To Apply"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2: "JOIN OUR TEAM" & INSTAGRAM CARD
        ═══════════════════════════════════════════════════════ */}
        <section className="relative py-16 sm:py-24 bg-[#FAFAFC] overflow-hidden select-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    Join Our Team
                  </h2>
                  <p className="text-lg sm:text-xl font-bold text-slate-700">
                    Where creativity meets opportunity.
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  At <strong>Fly Creative Solutions</strong>, we believe extraordinary work is created by ambitious talent. We&apos;re constantly scouting high-energy video editors, performance marketers, designers, and web engineers who want to work on national brand campaigns. If you love fast iteration and creative excellence — you belong here.
                </p>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={scrollToForm}
                    className="px-8 py-3.5 rounded-xl bg-[#E93E34] hover:bg-[#D92B7E] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>APPLY NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Instagram Post Frame */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 flex items-center justify-center"
              >
                <div className="w-full max-w-[420px] bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-magenta)] p-[2px]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black">
                          FLY
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                          flycreativesolutions
                          <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">✓</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">Jalgaon HQ • Serving India</div>
                      </div>
                    </div>
                    <div className="text-slate-400 font-bold text-sm">•••</div>
                  </div>

                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img
                      src="/assets/team-instagram.jpg"
                      alt="Fly Creative Agency Team"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between text-slate-800 pt-1">
                    <div className="flex items-center gap-4">
                      <Heart className="w-5 h-5 text-red-500 fill-red-500 cursor-pointer hover:scale-110 transition-transform" />
                      <MessageCircle className="w-5 h-5 text-slate-700 cursor-pointer hover:scale-110 transition-transform" />
                      <SendIcon className="w-5 h-5 text-slate-700 cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-xs font-black text-[var(--brand-orange)] uppercase tracking-wider">
                      #FlyWithUs
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3: "APPLY NOW" FORM WITH FILE UPLOAD + CHARACTER DUO
        ═══════════════════════════════════════════════════════ */}
        <section id="apply-now-section" className="relative py-16 sm:py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
            
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Apply Now
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                Fill in your details and our team will get back to you soon
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: The Application Form (7 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative"
              >
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300 shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Application Sent!</h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                      Thank you for applying. Our talent acquisition team will review your details and reach out within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-400 transition-colors"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    {/* Row 2: Phone & Designation Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        required
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-400 transition-colors"
                      />

                      {/* Designation Dropdown */}
                      <div className="relative">
                        <select
                          required
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer pr-10"
                        >
                          {designations.map((desig) => (
                            <option 
                              key={desig} 
                              value={desig} 
                              disabled={desig === "Select Designation"}
                              className="text-slate-900 py-1.5"
                            >
                              {desig === "Select Designation" ? "✓ Select Designation" : desig}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-black text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Experience Level & Portfolio URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:border-slate-400 transition-colors cursor-pointer"
                      >
                        <option value="Fresher / Intern">Experience: Fresher / Intern</option>
                        <option value="1 - 2 Years">Experience: 1 - 2 Years</option>
                        <option value="3+ Years">Experience: 3+ Years</option>
                      </select>

                      <input
                        type="url"
                        placeholder="Portfolio / Drive / Behance Link (Optional)"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    {/* Row 4: REAL FILE UPLOAD SECTION */}
                    <div className="space-y-1.5">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg"
                        className="hidden"
                      />

                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 bg-slate-50/70 hover:bg-slate-50 transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <div className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-xs shrink-0">
                            Choose file
                          </div>
                          <span className="text-xs text-slate-500 truncate max-w-[220px]">
                            {selectedFile ? selectedFile.name : "No file chosen (PDF, DOCX, ZIP)"}
                          </span>
                        </div>

                        {selectedFile ? (
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>File Attached</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedFile(null);
                              }}
                              className="p-1 hover:bg-slate-200 rounded-full text-slate-500"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-400 shrink-0 flex items-center gap-1">
                            <UploadCloud className="w-3.5 h-3.5" /> Max 25MB
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 5: Optional Note */}
                    <textarea
                      rows={2}
                      placeholder="Brief note or key tools/software you know (Optional)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-slate-400 transition-colors resize-none"
                    />

                    {/* Red Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-[#E93E34] hover:bg-[#D92B7E] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Submit</span>
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Right Column: Interactive 3D Tilt Character Duo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 flex items-center justify-center relative"
              >
                <Tilt3DCharacter />
              </motion.div>

            </div>

          </div>
        </section>

      </div>
    </PageWrapper>
  );
}
