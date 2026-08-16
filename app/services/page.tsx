import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Fly Creative Solutions – Digital Marketing Agency Jalgaon",
  description: "Explore our full range of digital services: SEO, Social Media Marketing, Web Development, Branding, Video Production and more. Fly Creative Solutions, Jalgaon.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
