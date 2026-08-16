import type { Metadata } from "next";
import { PortfolioPageClient } from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio | Fly Creative Solutions – Creative Work & Client Projects",
  description: "Browse our portfolio of branding, social media, web design, and digital marketing projects. Real results for real clients. Fly Creative Solutions, Jalgaon.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
