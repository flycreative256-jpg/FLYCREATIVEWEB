"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, TrendingUp, Monitor, Users, ArrowUpRight } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const baseNumber = "917276400626";
  
  const QUICK_OPTIONS = [
    {
      title: "Growth & Performance Ads",
      desc: "Scale sales with Meta & Google Ads",
      icon: TrendingUp,
      color: "text-[var(--brand-orange)]",
      msg: "Hi Fly Creative team, I want to scale my business with Performance Ads."
    },
    {
      title: "Website & Web Invitations",
      desc: "Custom Next.js web development",
      icon: Monitor,
      color: "text-sky-400",
      msg: "Hi Fly Creative team, I am looking for custom Website / Web Invitation design."
    },
    {
      title: "Careers & Hiring",
      desc: "Join our creative team",
      icon: Users,
      color: "text-emerald-400",
      msg: "Hi Fly Creative team, I want to inquire about career opportunities."
    }
  ];

  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end select-none pointer-events-auto">
      
      {/* Interactive Options Menu (Appears ONLY on click) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[290px] sm:w-[320px] rounded-3xl bg-[#090E1A] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-black text-[var(--brand-yellow)] border border-white/20">
                    FLY
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#25D366] border border-[#075E54]" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">Fly Creative WhatsApp</div>
                  <div className="text-[10px] text-emerald-100 mt-0.5">Select a topic to chat</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Option Cards */}
            <div className="p-3 space-y-2 bg-[#080C17]">
              {QUICK_OPTIONS.map((opt, idx) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={idx}
                    href={getWhatsAppLink(opt.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <Icon className={`w-4 h-4 ${opt.color}`} />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-100 group-hover:text-white transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {opt.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--brand-yellow)] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                );
              })}

              {/* Direct General Chat Button */}
              <a
                href={getWhatsAppLink("Hi Fly Creative team, I want to inquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full mt-1 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open Direct Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean Floating WhatsApp Icon Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] transition-all cursor-pointer"
        aria-label="Toggle WhatsApp Options"
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* Dynamic Icon (WhatsApp icon or Close icon) */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm transition-transform group-hover:scale-110"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.927l-1.564 5.901 6.041-1.585c1.693.926 3.633 1.457 5.959 1.457 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-2.023 0-3.913-.604-5.495-1.643l-.391-.256-3.55.931.948-3.46-.261-.419c-1.127-1.809-1.251-3.653-1.251-5.153 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          )}
        </div>
      </motion.button>

    </div>
  );
}
