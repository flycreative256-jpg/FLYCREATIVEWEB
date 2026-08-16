export interface PortfolioItem {
  id: string;
  title: string;
  category: "Branding" | "Social Media" | "Websites" | "Graphics" | "Video" | "Marketing";
  client: string;
  image: string;
  description: string;
  tags: string[];
  metrics: string;
}

export const portfolioCategories = [
  "All",
  "Branding",
  "Social Media",
  "Websites",
  "Graphics",
  "Video",
  "Marketing"
] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: "apex-healthcare",
    title: "Apex Healthcare Rebranding & Website",
    category: "Websites",
    client: "Apex Multispecialty Hospital",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Complete visual identity redesign, patient booking portal, local SEO, and digital strategy leading to a 310% increase in online appointments.",
    tags: ["Next.js", "Branding", "Local SEO Jalgaon", "UI/UX Design"],
    metrics: "+310% Online Appointments"
  },
  {
    id: "zenith-apparel",
    title: "Zenith Apparel E-Commerce Growth",
    category: "Marketing",
    client: "Zenith Fashion Studio",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    description: "Performance Meta Ads campaign and Instagram reels creative strategy that scaled monthly sales by 4.2x with a 4.8x ROAS.",
    tags: ["Performance Marketing", "Meta Ads", "Reels Marketing", "Shopify"],
    metrics: "4.8x ROAS / +320% Revenue"
  },
  {
    id: "khandesh-agro",
    title: "Khandesh Agro Organic Brand Identity",
    category: "Branding",
    client: "Khandesh Organics Ltd",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80",
    description: "Premium eco-friendly logo design, product packaging series, corporate stationery, and brand storytelling launch.",
    tags: ["Logo Design", "Packaging", "Brand Identity", "Print Design"],
    metrics: "National Brand Launch"
  },
  {
    id: "orbit-tech",
    title: "Orbit Tech SaaS Platform Landing Page",
    category: "Websites",
    client: "Orbit Systems",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "High-converting dark glassmorphic web page design with Framer Motion scroll animations and automated CRM lead capture.",
    tags: ["Web Development", "React", "Framer Motion", "CRO"],
    metrics: "34% Lead Conversion Rate"
  },
  {
    id: "metro-jewellers",
    title: "Metro Jewellers Social Media Campaign",
    category: "Social Media",
    client: "Metro Jewellers Jalgaon",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    description: "Festive season Instagram campaign with viral video reels, influencer partnerships, and store visit giveaways.",
    tags: ["Social Media Marketing", "Reels", "Influencer Ads", "Graphic Design"],
    metrics: "1.2 Million Impressions"
  },
  {
    id: "nexus-edtech",
    title: "Nexus EdTech Promotional Brand Film",
    category: "Video",
    client: "Nexus Learning Academy",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: "Cinematic commercial film showcasing classroom environment, student success stories, and career outcomes.",
    tags: ["Video Production", "Video Editing", "Motion Graphics", "YouTube Ads"],
    metrics: "250K+ YouTube Views"
  },
  {
    id: "royal-palace",
    title: "Royal Palace Restaurant Marketing & Menu Design",
    category: "Graphics",
    client: "Royal Palace Hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description: "Luxury menu design, packaging graphics, outdoor billboard creative, and Google Maps profile optimization.",
    tags: ["Graphic Design", "Menu Design", "Google Business Profile", "Print"],
    metrics: "Top 3 GMB Map Pack"
  },
  {
    id: "fintech-pro",
    title: "FinTech Pro Performance Search Ads",
    category: "Marketing",
    client: "FinTech Pro Advisory",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    description: "Targeted Google PPC campaign capturing high-income financial consultation leads with a 45% reduction in CPA.",
    tags: ["SEM", "Google Ads", "Landing Page", "PPC Strategy"],
    metrics: "-45% Cost Per Acquisition"
  }
];
