"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight } from "lucide-react";

import { siteData } from "@/data/siteData";
import { GetInTouchSection } from "@/sections/GetInTouchSection";

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Social Media Marketing",
    "SEO & Search Marketing",
    "Web Design & Development",
    "Brand Identity & Design",
    "Video Production & Editing",
    "Performance Marketing",
    "Skill District Training",
    "Other / Custom Project"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn("Contact API sync error:", err);
    }
    const msg = `Hi Fly Creative Solutions!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917276400626?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      {/* Hero */}
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
              <MessageCircle className="w-3.5 h-3.5" /> Free Consultation Available
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              Let&apos;s <span className="gradient-text-brand">Talk</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Headquartered in Jalgaon, Maharashtra, we engineer growth systems for ambitious businesses across India. Reach out for a custom growth roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-16 bg-[#FAFAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="obsidian-card p-7 rounded-3xl space-y-5"
              >
                <h2 className="text-xl font-black text-white">Direct Contact</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteData.phone}`}
                    className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[var(--brand-orange)]/20 border border-[var(--brand-orange)]/30 flex items-center justify-center text-[var(--brand-orange)] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Call Us</div>
                      <div className="text-white font-bold">{siteData.phoneFormatted}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[var(--brand-magenta)]/20 border border-[var(--brand-magenta)]/30 flex items-center justify-center text-[var(--brand-magenta)] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Us</div>
                      <div className="text-white font-bold text-sm">{siteData.email}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4B333]/20 border border-[#F4B333]/30 flex items-center justify-center text-[#F4B333] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Visit Us</div>
                      <div className="text-white font-bold text-sm">{siteData.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="obsidian-card p-7 rounded-3xl space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--brand-orange)]" />
                  <h2 className="text-xl font-black text-white">Office Hours</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Monday – Saturday</span>
                    <span className="font-bold text-white">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Sunday</span>
                    <span className="font-bold text-[var(--brand-orange)]">By Appointment</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="obsidian-card p-7 rounded-3xl space-y-4"
              >
                <h2 className="text-xl font-black text-white">Follow Us</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Instagram",
                      href: siteData.socials.instagram,
                      glowBg: "bg-rose-500/15 border-rose-500/30 text-rose-400",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-rose-400 shrink-0">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      )
                    },
                    {
                      label: "Facebook",
                      href: siteData.socials.facebook,
                      glowBg: "bg-blue-500/15 border-blue-500/30 text-blue-400",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )
                    },
                    {
                      label: "LinkedIn",
                      href: siteData.socials.linkedin,
                      glowBg: "bg-sky-500/15 border-sky-500/30 text-sky-400",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-sky-400 shrink-0">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    },
                    {
                      label: "WhatsApp",
                      href: siteData.socials.whatsapp,
                      glowBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400 shrink-0">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      )
                    },
                  ].map(({ label, href, icon, glowBg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${glowBg} shrink-0`}>
                        {icon}
                      </div>
                      <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="obsidian-card p-8 sm:p-10 rounded-3xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto">
                      <Send className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                    <p className="text-slate-300">We&apos;ve received your enquiry and will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-sunset px-6 py-3 rounded-full text-sm font-bold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-white mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-orange)]/60 focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-orange)]/60 focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-orange)]/60 focus:bg-white/10 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Service Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--brand-orange)]/60 focus:bg-white/10 transition-all text-sm"
                        >
                          <option value="" className="bg-slate-900">Select a service...</option>
                          {services.map(s => (
                            <option key={s} value={s} className="bg-slate-900">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Message *</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          placeholder="Tell us about your project, goals, or questions..."
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--brand-orange)]/60 focus:bg-white/10 transition-all text-sm resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button
                          type="submit"
                          className="btn-sunset flex-1 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-sm shadow-xl group"
                        >
                          <Send className="w-4 h-4" />
                          <span>Send via WhatsApp</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                          href={`mailto:${siteData.email}?subject=Project Enquiry&body=Hi Fly Creative Team,`}
                          className="flex-1 py-4 rounded-full border border-white/20 text-white font-bold text-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Send via Email</span>
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Get In Touch Section with Interactive Google Map */}
      <GetInTouchSection />
    </PageWrapper>
  );
}
