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
  title: "Fly Creative Solutions | Top Digital Marketing Agency in Jalgaon",
  description: "Fly Creative Solutions is a leading Digital Marketing Agency in Jalgaon, Maharashtra. We specialize in SEO, Social Media Marketing, Web Development, Branding, Video Editing, and Skill District training.",
  keywords: [
    "Digital Marketing Agency in Jalgaon",
    "Digital Marketing Company in Jalgaon",
    "SEO Company in Jalgaon",
    "Social Media Marketing Agency in Jalgaon",
    "Creative Agency in Jalgaon",
    "Web Design Company in Jalgaon",
    "Graphic Design Jalgaon",
    "Skill District Jalgaon"
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    title: "Fly Creative Solutions | Creative Ideas. Digital Growth.",
    description: "Build stronger brands and achieve meaningful digital growth with Jalgaon's premier digital agency.",
    url: siteData.websiteUrl,
    siteName: siteData.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/IMG_2933.PNG",
        width: 1200,
        height: 630,
        alt: "Fly Creative Solutions Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Creative Solutions | Digital Agency in Jalgaon",
    description: "Creative Ideas. Digital Growth. Top Digital Marketing & Web Agency in Jalgaon.",
    images: ["/logo/IMG_2933.PNG"]
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
    "image": `${siteData.websiteUrl}/logo/IMG_1392.PNG`,
    "description": "Leading Digital Marketing, Web Design, Branding, and SEO Agency in Jalgaon, Maharashtra.",
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
