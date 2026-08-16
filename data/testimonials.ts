export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
  project: string;
  gmbVerified?: boolean;
  date?: string;
  initials: string;
  bgHex: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "gmb-1",
    name: "Dr. Rajesh Patil",
    role: "Founder & Chief Surgeon",
    company: "Apex Hospital",
    location: "Jalgaon & North Maharashtra",
    rating: 5,
    content: "Fly Creative Solutions completely transformed our medical network's digital presence. Their local healthcare SEO and patient booking portal boosted our monthly inquiries by 310%. Hands-down the best agency in Jalgaon and Maharashtra!",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
    project: "Web Engineering & Healthcare SEO",
    gmbVerified: true,
    date: "2 months ago",
    initials: "R",
    bgHex: "#0F9D58" // Google Green
  },
  {
    id: "gmb-2",
    name: "Pooja Shah",
    role: "Creative Director",
    company: "Zenith Studio",
    location: "Mumbai & Pune",
    rating: 5,
    content: "We were looking for top-tier agency quality without Mumbai agency markups. Fly Creative's 9:16 viral reels and Meta ad management scaled our direct-to-consumer e-commerce revenue 4.2x across India within 90 days!",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    project: "Viral Reels & Pan-India Meta Ads",
    gmbVerified: true,
    date: "5 months ago",
    initials: "P",
    bgHex: "#DB4437" // Google Red
  },
  {
    id: "gmb-3",
    name: "Harsh Ojha",
    role: "Founder & CEO",
    company: "Ojha Tech",
    location: "Bengaluru & Jalgaon",
    rating: 5,
    content: "Fly Creative Solutions combines deep technical expertise with world-class marketing strategy. Whether handling local Jalgaon brand positioning or national SaaS customer acquisition, their ROI reporting and speed are outstanding.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    project: "Social Media & Performance PPC",
    gmbVerified: true,
    date: "8 months ago",
    initials: "H",
    bgHex: "#4285F4" // Google Blue
  },
  {
    id: "gmb-4",
    name: "Anshu Bala",
    role: "Head of Marketing",
    company: "Khandesh Organics",
    location: "Delhi NCR & Jalgaon",
    rating: 5,
    content: "From our brand identity and packaging graphics to targeted digital ads across North & Central India, Fly Creative delivered world-class work on tight deadlines. Their strategic direction gave our organic brand national scale.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    project: "Brand Identity & Strategy",
    gmbVerified: true,
    date: "11 months ago",
    initials: "A",
    bgHex: "#F4B333" // Google Yellow
  },
  {
    id: "gmb-5",
    name: "Sanjay Agrawal",
    role: "Chairman",
    company: "Horizon Institutions",
    location: "Maharashtra & Central India",
    rating: 5,
    content: "Skill District and Fly Creative's digital campaign delivered over 500 new student admissions across our colleges. Their combination of Jalgaon-rooted ground reality with cutting-edge digital funnel strategy is unbeatable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    project: "Lead Gen & Skill District",
    gmbVerified: true,
    date: "1 year ago",
    initials: "S",
    bgHex: "#9C27B0" // Google Purple
  },
  {
    id: "gmb-6",
    name: "Vikram Deshmukh",
    role: "Managing Director",
    company: "Deshmukh Developers",
    location: "Pune, Nashik & Jalgaon",
    rating: 5,
    content: "Exceptional Next.js web application and Google local search optimization. Our luxury real estate buyer inquiries increased by 280% across Maharashtra within the first month. Highly recommended digital growth agency partner!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    project: "Next.js Web & Real Estate SEO",
    gmbVerified: true,
    date: "1 year ago",
    initials: "V",
    bgHex: "#00897B" // Google Teal
  }
];

export const GMB_PROFILE_URL = "https://www.google.com/search?q=Fly+Creative+Solutions+Jalgaon";
