export interface JobPosition {
  id: string;
  title: string;
  department: "Creative & Video" | "Performance & Ads" | "Web & Tech" | "Design & Branding" | "Social & Strategy" | "Accounts & Growth";
  location: string;
  type: "Full-Time" | "Part-Time" | "Internship" | "Hybrid";
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  featured?: boolean;
}

export const careersData: {
  openings: JobPosition[];
  culturePillars: { title: string; desc: string; icon: string }[];
  hiringSteps: { step: string; title: string; desc: string }[];
} = {
  culturePillars: [
    {
      title: "Real Commercial Budgets",
      desc: "Work on live client campaigns, high-ROI ad spends, and viral 9:16 reels that reach millions across India.",
      icon: "TrendingUp"
    },
    {
      title: "Elite Workstations & Gear",
      desc: "High-spec editing rigs, latest AI tool subscriptions, and high-speed fiber connectivity for peak productivity.",
      icon: "Laptop"
    },
    {
      title: "Fast-Track Career Growth",
      desc: "Performance-driven promotions without corporate bureaucracy. If you deliver outsized results, you advance fast.",
      icon: "Zap"
    },
    {
      title: "Direct Founder Mentorship",
      desc: "Work directly alongside visionary leadership and seasoned marketers who have scaled 100+ brands nationwide.",
      icon: "Award"
    }
  ],
  hiringSteps: [
    {
      step: "01",
      title: "Application & Portfolio Review",
      desc: "Submit your resume and best commercial portfolio or reel links. We review submissions within 48 hours."
    },
    {
      step: "02",
      title: "Paid Skill Assessment",
      desc: "A brief practical project or creative assignment simulating real agency client briefs."
    },
    {
      step: "03",
      title: "Culture & Strategy Interview",
      desc: "A 30-minute conversation with team leads to assess creative alignment, vision, and growth goals."
    },
    {
      step: "04",
      title: "Fast-Track Offer & Induction",
      desc: "Receive your offer letter and join our fast-paced creative headquarters with a dedicated onboarding roadmap."
    }
  ],
  openings: [
    {
      id: "video-editor-motion",
      title: "Senior Video Editor & Motion Designer",
      department: "Creative & Video",
      location: "Jalgaon HQ / Hybrid",
      type: "Full-Time",
      experience: "1 - 3 Years",
      salary: "Competitive + Performance Bonus",
      description: "We are looking for a high-energy video editor who understands modern pacing, sound design, hooks, and viral retention for Instagram Reels, YouTube Shorts, and Meta video ads.",
      responsibilities: [
        "Edit viral 9:16 video reels and high-converting commercial ad creatives",
        "Implement dynamic motion graphics, sound design, kinetic typography, and sound effects in Premiere Pro & After Effects",
        "Analyze audience retention graphs to refine hook timings and pacing",
        "Collaborate with shoot directors and content creators on visual storyboards"
      ],
      requirements: [
        "Proven portfolio of engaging Instagram Reels, YouTube Shorts, or commercial ads",
        "Mastery of Adobe Premiere Pro, After Effects, and DaVinci Resolve",
        "Deep understanding of trend cycles, trending audios, and hook optimization",
        "Ability to deliver fast-turnaround edits without compromising aesthetic fidelity"
      ],
      perks: ["Dedicated Editing Workstation", "Paid AI Tool Subscriptions", "Performance Bonuses on Viral Hits"],
      featured: true
    },
    {
      id: "performance-marketing-meta-ads",
      title: "Performance Marketing & Meta Ads Specialist",
      department: "Performance & Ads",
      location: "Jalgaon HQ / Hybrid",
      type: "Full-Time",
      experience: "1 - 3 Years",
      salary: "Industry Leading + ROAS Incentives",
      description: "Lead paid customer acquisition campaigns across Meta Ads (Facebook/Instagram) and Google Ads for our pan-India clients in Healthcare, E-Commerce, Real Estate, and Education.",
      responsibilities: [
        "Manage, scale, and optimize monthly client ad budgets with strict ROAS and CPL targets",
        "Conduct systematic A/B testing on ad creatives, angles, hooks, and landing page funnels",
        "Configure Meta Pixel, CAPI, Google Tag Manager, and custom conversion tracking",
        "Generate weekly analytics dashboards and data-driven growth recommendations"
      ],
      requirements: [
        "Demonstrated track record of managing ₹5L+ monthly ad spends with verifiable ROI",
        "In-depth knowledge of Meta Ads Manager, Google Ads, and GA4 Analytics",
        "Analytical mindset with strong copywriting and creative direction intuition",
        "Experience in high-intent lead generation and e-commerce ROAS scaling"
      ],
      perks: ["ROAS Profit Sharing", "Direct Client Interaction", "Advanced Ad Budget Allocation"],
      featured: true
    },
    {
      id: "fullstack-nextjs-developer",
      title: "Full-Stack Next.js Web Developer",
      department: "Web & Tech",
      location: "Jalgaon HQ / Remote (India)",
      type: "Full-Time",
      experience: "1 - 3 Years",
      salary: "Best in Industry",
      description: "Architect and engineer ultra-fast, visually stunning Next.js web applications, client portals, and e-commerce stores with modern TypeScript and Tailwind CSS.",
      responsibilities: [
        "Build responsive, high-performance web applications using Next.js (App Router), TypeScript, and Tailwind CSS",
        "Implement fluid UI micro-animations and interactive 3D components with Framer Motion",
        "Optimize web vitals for perfect 95+ Google Lighthouse scores and Technical SEO",
        "Integrate backend APIs, payment gateways (Razorpay/Stripe), and CMS platforms"
      ],
      requirements: [
        "Strong experience with React, Next.js, TypeScript, and modern CSS frameworks",
        "Obsession with clean UI/UX, responsive breakpoints, and smooth 60fps animations",
        "Familiarity with Vercel deployments, Git version control, and REST/GraphQL APIs",
        "Strong problem-solving ability and attention to design details"
      ],
      perks: ["Flexible Tech Stack", "Modern MacBook / Developer Rig", "Work on High-Traffic National Sites"],
      featured: true
    },
    {
      id: "brand-graphic-designer",
      title: "Brand Identity & Graphic Designer",
      department: "Design & Branding",
      location: "Jalgaon HQ",
      type: "Full-Time",
      experience: "1 - 2 Years",
      salary: "Competitive",
      description: "Create memorable brand identities, luxury packaging, promotional ad assets, and social media visuals that define national-scale brand positioning.",
      responsibilities: [
        "Design comprehensive brand identity systems: logos, typography systems, color guides, and stationery",
        "Produce high-CTR social media ad creatives, carousel layouts, and display banners",
        "Design product packaging, marketing brochures, and physical brand collaterals",
        "Maintain brand visual consistency across all client touchpoints"
      ],
      requirements: [
        "Exceptional Behance/Dribbble or PDF design portfolio",
        "Mastery of Adobe Illustrator, Photoshop, and Figma",
        "Solid command over typography, grid systems, negative space, and color theory",
        "Self-starter with high creative standards and quick design iteration speed"
      ],
      perks: ["Creative Freedom", "Diverse Industry Exposure", "Skill District Masterclasses Access"]
    },
    {
      id: "social-media-strategist",
      title: "Social Media Strategist & Content Creator",
      department: "Social & Strategy",
      location: "Jalgaon HQ",
      type: "Full-Time",
      experience: "1 - 2 Years",
      salary: "Competitive",
      description: "Own the content strategy and organic growth engines for our marquee agency clients across Instagram, LinkedIn, and YouTube.",
      responsibilities: [
        "Develop monthly content calendars, viral reel concepts, and strategic campaign themes",
        "Write engaging hooks, captions, and script breakdowns for on-camera talent",
        "Direct weekly content shoot sessions and guide visual pacing",
        "Analyze monthly reach, engagement metrics, and audience demographics to iterate strategies"
      ],
      requirements: [
        "Proven experience managing and growing brand accounts on Instagram or LinkedIn",
        "Strong storytelling and scriptwriting skills in English, Hindi, and Marathi",
        "Deep familiarity with social media algorithms, community building, and memes",
        "High energy and proactive collaboration skills"
      ],
      perks: ["On-Set Shoot Experience", "Client Strategy Ownership", "Fast Track Team Lead Promotion"]
    },
    {
      id: "skill-district-intern",
      title: "Creative & Digital Marketing Trainee (Skill District)",
      department: "Creative & Video",
      location: "Jalgaon HQ",
      type: "Internship",
      experience: "Fresher / Student",
      salary: "Paid Stipend + Full-Time Placement Opportunity",
      description: "Fast-track internship for ambitious freshers and Skill District graduates looking to launch an agency career with hands-on live client projects.",
      responsibilities: [
        "Assist senior editors, designers, and marketers on active client campaigns",
        "Learn and execute real-world ad setups, video edits, and visual design deliverables",
        "Participate in creative brainstorms and campaign concept development",
        "Graduate into full-time agency roles based on 3-month performance assessment"
      ],
      requirements: [
        "Passion for digital media, design, video editing, or marketing",
        "Basic familiarity with tools (Premiere Pro, Canva, Photoshop, or Ads Manager)",
        "Eagerness to learn rapidly in a high-growth, fast-paced agency environment"
      ],
      perks: ["Direct Full-Time Conversion", "Official Certification", "Real Client Case Studies"]
    }
  ]
};
