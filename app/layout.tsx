import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.websiteUrl),
  title: "Fly Creative Solutions | Best Digital Marketing & Web Agency in Jalgaon • Pan-India",
  description: "Fly Creative Solutions is India's premier digital growth agency headquartered in Jalgaon, Maharashtra. We deliver high-ROI performance ads, viral 9:16 video reels, Next.js web engineering, and local SEO for ambitious brands across Jalgaon, Maharashtra, and nationwide across India.",
  keywords: [
    "Digital Marketing Agency in Jalgaon",
    "Best Digital Marketing Company in Jalgaon",
    "Top SEO Company in Jalgaon",
    "Social Media Marketing Agency in Jalgaon",
    "Digital Marketing Agency Maharashtra",
    "Performance Marketing Agency India",
    "Web Design Company in Jalgaon",
    "Next.js Web Development Agency India",
    "Creative Advertising Agency Jalgaon",
    "Skill District Jalgaon"
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    title: "Fly Creative Solutions | Digital Growth Agency Jalgaon & India",
    description: "Build dominant brands and achieve high-ROI digital growth with Jalgaon's premier digital agency serving clients nationwide.",
    url: siteData.websiteUrl,
    siteName: siteData.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/fly-logo-color.png",
        width: 1200,
        height: 630,
        alt: "Fly Creative Solutions - Digital Agency Jalgaon & India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Creative Solutions | Digital Agency in Jalgaon & India",
    description: "Creative Ideas. Digital Growth. Top Digital Marketing & Web Agency in Jalgaon serving brands pan-India.",
    images: ["/logo/fly-logo-color.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.name,
    "alternateName": "Fly Creative Solutions Jalgaon",
    "image": `${siteData.websiteUrl}/logo/fly-logo-color.png`,
    "description": "Leading Digital Marketing, Web Development, Branding, and SEO Agency headquartered in Jalgaon, Maharashtra, serving businesses across India.",
    "telephone": siteData.phone,
    "email": siteData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 14, Near M.J. College Rd",
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
      }
    ],
    "url": siteData.websiteUrl,
    "priceRange": "₹₹",
    "sameAs": [
      siteData.socials.instagram,
      siteData.socials.facebook,
      siteData.socials.linkedin,
      siteData.socials.youtube
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/logo/IMG_2767.PNG" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-[#070b14] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
