export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  badge: string;
}

export const servicesData: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "End-to-end data-driven marketing campaigns engineered to increase visibility, generate qualified leads, and maximize ROI.",
    fullDesc: "Our comprehensive digital marketing solutions bring together consumer insights, audience targeting, multi-channel strategy, and continuous conversion optimization. We turn casual browsers into loyal brand advocates.",
    iconName: "TrendingUp",
    badge: "Core Solution",
    features: ["Omnichannel Campaigns", "Target Audience Funnels", "Conversion Rate Optimization (CRO)", "ROI Analytics & Reporting"],
    deliverables: ["Monthly Growth Report", "Lead Gen Funnel", "Ad Creatives & Copy", "Campaign Dashboard"]
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    shortDesc: "Rank #1 on Google for high-intent business keywords in Jalgaon and globally. Sustainable organic traffic that drives real revenue.",
    fullDesc: "We perform deep technical audits, keyword research, on-page optimization, content strategy, and high-authority link acquisition to ensure your business dominates local and global search results.",
    iconName: "Search",
    badge: "High Growth",
    features: ["Local SEO Jalgaon", "Technical SEO Audits", "Keyword Dominance", "Authority Backlink Building"],
    deliverables: ["Keyword Rankings", "On-Page Optimization", "Google Search Console Setup", "Monthly Traffic Audits"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDesc: "Build an active, loyal community across Instagram, Facebook, LinkedIn & YouTube with scroll-stopping creative content.",
    fullDesc: "Social media is the voice of modern brands. We craft viral reel concepts, eye-catching carousels, strategic posting schedules, and community management that elevates your brand reputation.",
    iconName: "Share2",
    badge: "Engagement",
    features: ["Content Calendar & Strategy", "Viral Reel Production", "Community & Lead Management", "Targeted Paid Ads"],
    deliverables: ["Monthly Content Calendar", "Custom Graphics & Reels", "Engagement Analytics", "Ad Management"]
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    shortDesc: "Position your company as an industry leader with a distinctive logo, color palette, brand guideline, and tone of voice.",
    fullDesc: "Great brands aren't created by accident. We craft memorable visual identities, brand stories, typography systems, and packaging that make your business instantly recognizable and trusted.",
    iconName: "Palette",
    badge: "Identity",
    features: ["Logo Design & Lockups", "Brand Style Guidelines", "Brand Voice & Positioning", "Corporate Stationery"],
    deliverables: ["Vector Logo Package", "Brand Guideline PDF", "Social Media Templates", "Stationery Mockups"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDesc: "High-impact visual communication for marketing banners, print collateral, brochures, outdoor media, and digital assets.",
    fullDesc: "Our graphic designers craft striking visual assets tailored to your brand personality. From digital ad banners to large-format outdoor flex prints, we make your message unmissable.",
    iconName: "Layout",
    badge: "Creative",
    features: ["Social Banners & Creatives", "Brochures & Flyers", "Packaging & Labels", "Event Banners"],
    deliverables: ["High-Res Print Files", "Editable Design Source Files", "Digital Banners", "Marketing Kits"]
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    shortDesc: "Engage, convince, and convert audiences with cinematic brand films, promotional ads, product videos, and explainer reels.",
    fullDesc: "Video is the highest converting medium on the web. We handle everything from scriptwriting, storyboarding, and video shooting to post-production and multi-platform distribution.",
    iconName: "Video",
    badge: "High Converting",
    features: ["Brand Commercials", "Product Demo Videos", "Customer Testimonials", "YouTube Video Growth"],
    deliverables: ["Script & Storyboard", "4K Video Assets", "Short-Form Reel Cutdowns", "Thumbnail Designs"]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDesc: "Professional post-production, motion graphics, color grading, sound design, and trendy transitions for social reels & ads.",
    fullDesc: "Turn raw footage into polished, cinematic masterworks. We optimize video pacing, add dynamic subtitles, sound effects, and color grading optimized for maximum watch time.",
    iconName: "Film",
    badge: "Post Production",
    features: ["Reels & Shorts Editing", "Motion Graphics & VFX", "Color Grading & Audio Master", "Dynamic Captions"],
    deliverables: ["Vertical 9:16 Video Cuts", "Horizontal 16:9 4K Export", "Subtitled Versions", "Sound Effects Track"]
  },
  {
    id: "web-design-dev",
    title: "Website Design & Development",
    shortDesc: "Custom, lightning-fast, mobile-optimized websites engineered to turn traffic into paying clients.",
    fullDesc: "We design modern, responsive, ultra-fast websites with intuitive navigation, fluid Framer Motion animations, and seamless lead capture forms that wow visitors on every device.",
    iconName: "Monitor",
    badge: "Digital Core",
    features: ["Custom Next.js & React", "Mobile-First Design", "Conversion Lead Forms", "Speed & Performance 95+"],
    deliverables: ["Fully Functional Website", "CMS Integration", "SEO Meta Setup", "Hosting Deployment"]
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Robust full-stack web applications, custom portals, web tools, and e-commerce platforms built with cutting-edge tech.",
    fullDesc: "From custom e-commerce stores to complex web portals and APIs, our web engineering team builds scalable, high-performance web systems tailored to your business operations.",
    iconName: "Code",
    badge: "Tech Stack",
    features: ["Full-Stack Architecture", "E-Commerce Integration", "API & Database Systems", "Security & Speed Tuning"],
    deliverables: ["Source Code Repository", "Admin Dashboard", "API Documentation", "Deployment Infrastructure"]
  },
  {
    id: "sem",
    title: "SEM (Search Engine Marketing)",
    shortDesc: "Instant Google Ads campaigns targeting users actively searching for your products and services with commercial intent.",
    fullDesc: "Stop waiting for organic growth. We construct hyper-targeted Google Search Ads, Display Network banners, and Remarketing ads that capture high-intent buyers at the exact moment they need you.",
    iconName: "Target",
    badge: "Instant Traffic",
    features: ["Google Search Ads", "Google Display Ads", "Retargeting Campaigns", "Negative Keyword Control"],
    deliverables: ["Ad Campaign Setup", "A/B Copy Testing", "Landing Page Copy", "Weekly Cost-Per-Lead Audits"]
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Optimization",
    shortDesc: "Dominate local Google Maps searches in Jalgaon. Get more direct phone calls, store visits, and direction requests.",
    fullDesc: "When customers in Jalgaon search for your services, make sure your business appears in the top 3 Google Map Pack. We optimize GMB profiles, manage reviews, and post regular local updates.",
    iconName: "MapPin",
    badge: "Local SEO",
    features: ["Google Maps Ranking", "Profile Optimization", "Review Management", "Local Business Schema"],
    deliverables: ["Verified GMB Optimization", "Citation Directory Listing", "Weekly Photo Updates", "Local Insights Report"]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    shortDesc: "Persuasive copywriting, blog articles, social copy, email newsletters, and ad scripts that resonate with your target market.",
    fullDesc: "Words drive action. Our expert copywriters create compelling brand narratives, high-converting ad scripts, SEO blog articles, and email newsletters that establish authority.",
    iconName: "FileText",
    badge: "Copywriting",
    features: ["SEO Blog Articles", "Social Copywriting", "Email Marketing Sequences", "Website Copywriting"],
    deliverables: ["Monthly Content Pack", "Editorial Calendar", "Email Newsletters", "Ad Copy Variants"]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    shortDesc: "Scale your revenue predictably with Meta Ads, Google PPC, and retargeting funnels focused strictly on ROI.",
    fullDesc: "We treat your marketing budget like an investment fund. We continuously test audience segments, ad creative variations, and bidding strategies to lower your Customer Acquisition Cost (CAC).",
    iconName: "Zap",
    badge: "Scale Revenue",
    features: ["Meta Ads (FB/Insta)", "Funnel Architecture", "CAC & LTV Optimization", "Conversion API Setup"],
    deliverables: ["Ad Campaign Funnels", "Weekly Performance Call", "Creative Ad Matrix", "Pixel Integration"]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    shortDesc: "360-degree digital roadmaps for business growth, market expansion, brand positioning, and digital transformation.",
    fullDesc: "Before spending a single rupee on marketing, build a winning strategy. We audit your existing digital footprint, analyze competitors, identify growth bottlenecks, and map a clear execution plan.",
    iconName: "Compass",
    badge: "Roadmap",
    features: ["Competitor Analysis", "Customer Journey Mapping", "Tech & Tool Stack Setup", "Growth Milestones"],
    deliverables: ["Strategic Growth PDF", "Competitor Matrix", "Budget Allocation Plan", "Quarterly Roadmap"]
  },
  {
    id: "web-invitation",
    title: "Web Invitation",
    shortDesc: "Luxurious, interactive mobile-first digital web invitations for weddings, corporate galas, grand openings & milestone events.",
    fullDesc: "Ditch traditional static paper cards. We create bespoke, animated mobile-first digital web invitations with interactive WhatsApp RSVP, countdown timers, photo & video galleries, event itineraries, and direct 1-click Google Maps venue navigation.",
    iconName: "MailOpen",
    badge: "Interactive & Trendy",
    features: ["Interactive Mobile-First UI", "1-Click WhatsApp RSVP", "Google Maps Venue Navigation", "Music, Gallery & Countdown Timer"],
    deliverables: ["Custom Hosted Live Web Link", "WhatsApp Teaser Card & Story", "Live RSVP Guest Tracking", "Printable QR Code for Envelopes"]
  }
];
