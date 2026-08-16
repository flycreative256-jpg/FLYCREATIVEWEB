"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/modals/ContactModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaultService, setContactDefaultService] = useState("");

  const handleOpenContact = (service: string = "") => {
    setContactDefaultService(service);
    setIsContactOpen(true);
  };

  // Listen for custom event from child pages that can't pass props up
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || "";
      handleOpenContact(detail);
    };
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[var(--brand-orange)] selection:text-white">
      <Header onOpenContact={() => handleOpenContact()} />
      <main id="main-content" className="pt-28">
        {children}
      </main>
      <Footer onOpenContact={() => handleOpenContact()} />
      <FloatingWhatsApp />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={contactDefaultService}
      />
    </div>
  );
}
