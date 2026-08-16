"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Sparkles, Briefcase, Link as LinkIcon, Phone, User, Mail } from "lucide-react";
import { JobPosition } from "@/data/careers";

interface JobApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    experience: "1-2 Years",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Job Application for ${job.title}*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Portfolio/Resume Link:* ${formData.portfolioUrl || "N/A"}%0A` +
      `*Note:* ${formData.message || "Ready for skill assessment."}`;

    window.open(`https://wa.me/917276400626?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying for the <strong>{job.title}</strong> role at Fly Creative Solutions. Our talent acquisition team will review your portfolio and reach out within 48 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-black uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" /> {job.department} • {job.type}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Apply for {job.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {job.location} • {job.experience} Experience • {job.salary}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Portfolio / Work Links *</label>
                    <div className="relative">
                      <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        required
                        placeholder="Drive / Behance / GitHub link"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Experience Level</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                    >
                      <option value="Fresher / Intern">Fresher / Intern (Skill District)</option>
                      <option value="1 - 2 Years">1 - 2 Years Experience</option>
                      <option value="3+ Years">3+ Years (Senior Lead)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Why are you a great fit? (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your top projects, your key tools, or why you want to join Fly Creative..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-sunset w-full py-4 rounded-full text-sm sm:text-base font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--brand-orange)]/25 mt-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
