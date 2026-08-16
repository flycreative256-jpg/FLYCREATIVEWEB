import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Fly Creative Solutions – Get a Free Consultation",
  description: "Get in touch with Fly Creative Solutions in Jalgaon. Call us, email us, or fill out the form to start your digital growth journey today.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
