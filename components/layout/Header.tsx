"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";

interface HeaderProps {
  onOpenContact: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isColoredVisible, setIsColoredVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Toggle between logos every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIsColoredVisible((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "/contact") {
      // Contact goes to dedicated page
      router.push("/contact");
      return;
    }

    if (href.startsWith("/#")) {
      // Hash on homepage — navigate to home then scroll
      const hash = href.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(href);
      }
      return;
    }

    router.push(href);
  };

  return (
    <>
      {/* Dark Obsidian Floating Hanging Curved Pill Header */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-40 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div
          className={`w-full rounded-2xl transition-all duration-300 obsidian-card ${
            isScrolled
              ? "bg-[#121124]/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-950/60 px-4 sm:px-6 py-1.5"
              : "bg-[#121124]/90 backdrop-blur-lg border border-white/15 shadow-xl shadow-purple-950/40 px-4 sm:px-6 py-2"
          }`}
        >
          <div className="flex items-center justify-between gap-4">

            {/* ── ANIMATED LOGO ── */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="group focus:outline-none shrink-0"
              aria-label="Fly Creative Solutions - Home"
            >
              <div className="relative w-[180px] sm:w-[220px] md:w-[270px] h-[48px] sm:h-[58px] md:h-[72px] group-hover:scale-105 transition-transform duration-300">
                {/* Layer A: fly-logo-color — Full color FLYCREATIVE */}
                <motion.img
                  src="/logo/fly-logo-color.png"
                  alt="Fly Creative Solutions"
                  animate={{ opacity: isColoredVisible ? 1 : 0 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  style={{ mixBlendMode: "screen" }}
                />
                {/* Layer B: fly-logo-dark — White CREATIVE (dark bg version) */}
                <motion.img
                  src="/logo/fly-logo-dark.png"
                  alt="Fly Creative Solutions"
                  animate={{ opacity: isColoredVisible ? 0 : 1 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </a>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
              {siteData.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4.5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                      active
                        ? "text-white bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-magenta)] shadow-md"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* ── CTA Button ── */}
            <div className="hidden sm:flex items-center shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenContact}
                className="btn-sunset px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg group/btn cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <div className="lg:hidden flex items-center shrink-0">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:text-[var(--brand-orange)] focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-3 top-[72px] sm:top-[80px] z-30 lg:hidden max-w-xl mx-auto"
          >
            <div className="obsidian-card rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl space-y-4 backdrop-blur-2xl">
              <div className="flex flex-col space-y-1.5">
                {siteData.navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 text-sm font-bold rounded-2xl transition-all flex items-center justify-between active:scale-[0.98] ${
                      isActive(link.href)
                        ? "text-white bg-gradient-to-r from-[var(--brand-orange)]/25 to-[var(--brand-magenta)]/25 border border-white/15 shadow-sm"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="btn-sunset w-full py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--brand-orange)]/20"
                >
                  <span>Let&apos;s Talk Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <div className="flex items-center justify-around text-xs text-slate-300 pt-1 font-medium">
                  <a href={`tel:${siteData.phone}`} className="flex items-center gap-1.5 hover:text-[var(--brand-orange)] transition-colors py-1">
                    <Phone className="w-3.5 h-3.5 text-[var(--brand-orange)]" /> {siteData.phone}
                  </a>
                  <a href={`mailto:${siteData.email}`} className="flex items-center gap-1.5 hover:text-[var(--brand-orange)] transition-colors py-1">
                    <Mail className="w-3.5 h-3.5 text-[var(--brand-magenta)]" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
