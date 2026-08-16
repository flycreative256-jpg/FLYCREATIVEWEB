import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Fly Creative Solutions – Jalgaon's Premier Digital Agency",
  description: "Learn about Fly Creative Solutions — our story, mission, values, and the team behind Jalgaon's top digital marketing and branding agency.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
