import type { Metadata } from "next";
import { CaseStudiesPageClient } from "./CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies | Fly Creative Solutions – Real Client Results",
  description: "Read our detailed case studies showing real revenue growth, SEO rankings, and brand transformations achieved for clients by Fly Creative Solutions in Jalgaon.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
