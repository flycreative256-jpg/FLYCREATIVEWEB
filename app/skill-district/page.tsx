import type { Metadata } from "next";
import { SkillDistrictPageClient } from "./SkillDistrictPageClient";

export const metadata: Metadata = {
  title: "Skill District | Fly Creative – Digital Skills Training in Jalgaon",
  description: "Learn digital marketing, social media, content creation, and web skills at Skill District — the educational arm of Fly Creative Solutions in Jalgaon.",
};

export default function SkillDistrictPage() {
  return <SkillDistrictPageClient />;
}
