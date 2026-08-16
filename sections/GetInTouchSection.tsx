"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock, ExternalLink } from "lucide-react";
import { siteData } from "@/data/siteData";
import { AmbientBackgroundElements } from "@/components/ui/AmbientBackgroundElements";

export function GetInTouchSection() {
  const googleMapsUrl = "https://www.google.com/search?q=Fly+Creative+Solutions+Jalgaon";
  const embedMapUrl = "https://maps.google.com/maps?q=Fly%20Creative%20Solutions%20Near%20M.J.%20College%20Rd%20Jalgaon&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact-section" className="relative py-14 bg-[#FAFAFC] overflow-hidden select-none">
      <AmbientBackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get In <span className="gradient-text-brand">Touch</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Reach out — we respond within 2 hours.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] text-white font-bold text-sm shadow-lg hover:scale-105 hover:shadow-[0_8px_28px_rgba(233,62,52,0.4)] transition-all duration-300 group shrink-0 w-fit"
          >
            Start A Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ── Main Card: Dark Obsidian ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >

          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-2 bg-[#121124] p-8 flex flex-col justify-between gap-8">

            {/* Brand glow blobs */}
            <div className="absolute pointer-events-none w-52 h-52 rounded-full blur-[90px] bg-[var(--brand-orange)]/15 -top-10 -left-10" />
            <div className="absolute pointer-events-none w-40 h-40 rounded-full blur-[80px] bg-[var(--brand-magenta)]/10 bottom-0 right-0" />

            {/* Agency tagline */}
            <div className="relative z-10 space-y-3">
              <p className="text-xs font-black text-[var(--brand-yellow)] uppercase tracking-widest">Fly Creative Solutions</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Headquartered in Jalgaon, Maharashtra — scaling ambitious brands across India with cutting-edge strategy, design &amp; performance.
              </p>
            </div>

            {/* Contact rows */}
            <div className="relative z-10 space-y-3">
              {[
                { icon: Phone, label: "Call / WhatsApp", value: siteData.phoneFormatted, href: siteData.socials.whatsapp, color: "var(--brand-yellow)" },
                { icon: Mail, label: "Email Us", value: siteData.email, href: `mailto:${siteData.email}`, color: "var(--brand-orange)" },
                { icon: MapPin, label: "Office", value: "Near M.J. College Rd, Jalgaon", href: googleMapsUrl, color: "var(--brand-magenta)" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9:30 AM – 7:30 PM", href: "#", color: "var(--brand-yellow)" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-200"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-bold text-slate-200 truncate group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider + Open Maps link */}
            <div className="relative z-10 pt-4 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-bold text-[var(--brand-yellow)] hover:text-[var(--brand-orange)] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>

          </div>

          {/* RIGHT MAP PANEL */}
          <div className="lg:col-span-3 min-h-[300px] sm:min-h-[380px]">
            <iframe
              title="Fly Creative Solutions Jalgaon Office Map"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "300px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
