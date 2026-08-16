"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/sections/HeroSection";
import { HeroTickerBar } from "@/components/ui/HeroTickerBar";
import { TrustedBrandsTicker } from "@/components/ui/TrustedBrandsTicker";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { StatsSection } from "@/sections/StatsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { BlogSection } from "@/sections/BlogSection";
import { InstagramSection } from "@/sections/InstagramSection";
import { GetInTouchSection } from "@/sections/GetInTouchSection";


import { FaqSection } from "@/sections/FaqSection";
import { homeFaqs } from "@/data/faq";

import { ContactModal } from "@/components/modals/ContactModal";
import { ServiceModal } from "@/components/modals/ServiceModal";
import { BlogModal } from "@/components/modals/BlogModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

import { Service } from "@/data/services";
import { BlogPost } from "@/data/blog";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaultService, setContactDefaultService] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenContact = (service: string = "") => {
    setContactDefaultService(service);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[var(--brand-orange)] selection:text-white">
      <Header onOpenContact={() => handleOpenContact()} />

      <main id="main-content">
        <HeroSection onOpenContact={() => handleOpenContact()} />
        <HeroTickerBar />
        <AboutSection onOpenContact={() => handleOpenContact()} />
        <TrustedBrandsTicker />
        <ServicesSection isHomePage={true} onSelectService={(svc) => setSelectedService(svc)} />
        <StatsSection />
        <TestimonialsSection />
        <BlogSection limit={3} showViewAll={true} onSelectPost={(post) => setSelectedPost(post)} />
        <InstagramSection />
        <FaqSection items={homeFaqs} onOpenContact={() => handleOpenContact()} />
        <GetInTouchSection />
      </main>

      <Footer onOpenContact={() => handleOpenContact()} />
      <FloatingWhatsApp />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={contactDefaultService}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectContact={(title) => handleOpenContact(`Service Inquiry: ${title}`)}
      />

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenContact={() => handleOpenContact("Digital Growth Consultation")}
      />
    </div>
  );
}
