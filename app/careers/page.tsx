import { Metadata } from "next";
import { CareersPageClient } from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Careers at Fly Creative Solutions | Join Our High-Growth Agency Team",
  description: "Join Fly Creative Solutions in Jalgaon and Remote India. Explore open career opportunities in Video Editing, Performance Marketing, Next.js Web Engineering, Graphic Design, and Social Media.",
  keywords: [
    "Digital Marketing Jobs in Jalgaon",
    "Video Editor Jobs Jalgaon",
    "Performance Marketing Jobs",
    "Next.js Developer Jobs India",
    "Graphic Designer Jobs Jalgaon",
    "Agency Careers Jalgaon",
    "Skill District Internships"
  ]
};

export default function CareersPage() {
  return <CareersPageClient />;
}
