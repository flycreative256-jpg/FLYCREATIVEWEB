import React from "react";
import { siteData } from "@/data/siteData";
import { servicesData } from "@/data/services";
import { homeFaqs } from "@/data/faq";

export function StructuredData() {
  const baseUrl = "https://flycreativeweb.vercel.app";

  // 1. Organization & LocalBusiness Schema (Combined Local + National Agency Entity)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": siteData.name,
    "alternateName": ["Fly Creative", "Fly Creative Jalgaon", "Fly Creative Agency"],
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/og-image.jpg`,
    "description": "Premier digital marketing, local SEO, Next.js web development, video editing, and performance advertising agency based in Jalgaon, Maharashtra, serving clients across India and globally.",
    "telephone": siteData.phone,
    "email": siteData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Khwajamiya Dargah",
      "addressLocality": "Jalgaon",
      "addressRegion": "Maharashtra",
      "postalCode": "425001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.0077",
      "longitude": "75.5626"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "UPI, Bank Transfer, Credit Card, Debit Card, Cash",
    "areaServed": [
      {
        "@type": "City",
        "name": "Jalgaon"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "City",
        "name": "Bengaluru"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Aaftab Shah",
      "jobTitle": "Founder & Digital Strategist",
      "worksFor": {
        "@type": "Organization",
        "name": siteData.name
      }
    },
    "sameAs": [
      siteData.socials.instagram,
      siteData.socials.facebook,
      siteData.socials.linkedin
    ],
    "knowsAbout": [
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Local SEO Jalgaon",
      "Performance Marketing & Meta Ads",
      "Google Ads (SEM)",
      "Next.js & React Web Development",
      "Brand Identity & Graphic Design",
      "Cinematic Video Marketing & Editing",
      "Digital Web Invitations",
      "Google Business Profile Optimization"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // 2. WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": siteData.name,
    "description": siteData.tagline,
    "publisher": {
      "@id": `${baseUrl}/#localbusiness`
    },
    "inLanguage": ["en-IN", "hi-IN", "mr-IN"]
  };

  // 3. Service Catalog Schema (All 15 Services)
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Fly Creative Solutions Digital Services",
    "itemListElement": servicesData.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.shortDesc,
        "provider": {
          "@id": `${baseUrl}/#localbusiness`
        },
        "serviceType": svc.badge,
        "areaServed": "India"
      }
    }))
  };

  // 4. FAQPage Schema for Rich Snippets on Google Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
