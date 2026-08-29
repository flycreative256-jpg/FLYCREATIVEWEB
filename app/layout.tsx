import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/siteData";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";

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
  },
  verification: {
    google: "7KajV4c6FfydJOSLCWJfSyta2-1AVfQ430620ZRq--I"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo/IMG_2767.PNG" />
        <StructuredData />
      </head>
      <body className="antialiased bg-[#070b14] text-slate-100 min-h-screen">
        <GoogleAnalytics gaId="G-E0PH2SS5LW" />
        {children}
      </body>
    </html>
  );
}
