export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: { label: string; value: string }[];
  mainImage: string;
  gallery: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "khandesh-auto-growth",
    title: "Scaling Jalgaon's Leading Auto Dealership Sales via Omnichannel Digital Marketing",
    client: "Khandesh Motors",
    industry: "Automotive & Retail",
    duration: "6 Months",
    challenge: "Khandesh Motors faced stagnant footfalls and high dependency on traditional newspaper ads with untracked ROI and zero digital lead pipeline.",
    strategy: "Implemented hyper-targeted Facebook & Instagram lead ads localized to Jalgaon & North Maharashtra, redesigned their website with an instant test-drive booking portal, and launched Google Maps Local SEO.",
    execution: "Produced high-energy video walk-through reels of new vehicle models, configured dynamic WhatsApp automated lead follow-ups, and optimized Google Business Profile for local test drive searches.",
    results: [
      { label: "Increase in Qualified Leads", value: "+380%" },
      { label: "Cost Per Lead Reduction", value: "-52%" },
      { label: "Direct Monthly Test Drives", value: "140+" },
      { label: "ROAS on Ad Spend", value: "5.4x" }
    ],
    mainImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "shree-dental-branding",
    title: "Brand Transformation & Patient Acquisition Strategy for Shree Super-Specialty Dental",
    client: "Shree Dental Care",
    industry: "Healthcare & Medical",
    duration: "4 Months",
    challenge: "New clinic launch in Jalgaon needed fast brand recognition, trust positioning, and immediate patient appointments against established competitors.",
    strategy: "Constructed a premium visual identity system, patient educational reel series, doctor authority positioning, and localized Google PPC campaigns.",
    execution: "Filmed doctor consultation videos explaining painless dental implants, designed luxury clinic brochures, and deployed automated appointment SMS reminders.",
    results: [
      { label: "New Patient Growth", value: "+240%" },
      { label: "Google Map Reviews", value: "200+ 5★" },
      { label: "Organic Local Search Rank", value: "#1 Rank" },
      { label: "Monthly Revenue Increase", value: "+180%" }
    ],
    mainImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "horizon-academy-admissions",
    title: "Driving 500+ Student Enrollment Admissions for Horizon International School",
    client: "Horizon Group of Institutions",
    industry: "Education & EdTech",
    duration: "3 Months",
    challenge: "High competitive pressure during admission season required capturing parent inquiries early and conveying modern campus facilities.",
    strategy: "Launched an integrated admissions campaign combining virtual school video tours, parent testimonial reels, and targeted lead generation funnels.",
    execution: "Crafted interactive landing page with fee calculator, ran targeted Meta Ads targeting parents in a 30km radius, and established a 24/7 WhatsApp helpdesk.",
    results: [
      { label: "Total Admissions Lead", value: "1,850+" },
      { label: "Completed Admissions", value: "520+" },
      { label: "Cost Per Enrollment", value: "₹450" },
      { label: "Video Campaign Views", value: "450K+" }
    ],
    mainImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
