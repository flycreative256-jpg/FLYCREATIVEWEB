import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Fly Creative Solutions – Digital Marketing Insights & Tips",
  description: "Read expert articles on digital marketing, SEO, branding, social media, and business growth from the Fly Creative Solutions team in Jalgaon.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
