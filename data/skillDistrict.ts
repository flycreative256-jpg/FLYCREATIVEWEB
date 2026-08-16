export interface SkillTrack {
  id: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  iconName: string;
  description: string;
  skillsLearned: string[];
  careerRoles: string[];
}

export const skillDistrictData = {
  heading: "Learn Skills. Build Careers.",
  subtitle: "Skill District is our skill-development initiative focused on practical learning, internships and industry-ready digital skills.",
  overview: "At Fly Creative Solutions, we bridge the gap between classroom theory and real-world agency execution. Skill District offers hands-on training, live client project exposure, and guaranteed internship opportunities in Jalgaon.",
  highlights: [
    { title: "100% Practical Learning", desc: "Work on live agency client campaigns under senior mentors." },
    { title: "Guaranteed Internship", desc: "Top performers join Fly Creative Solutions agency teams directly." },
    { title: "Portfolio Creation", desc: "Graduate with 5+ real client projects ready for your resume." },
    { title: "Industry Certification", desc: "Receive recognized skill credentials & career placement support." }
  ],
  tracks: [
    {
      id: "graphic-design-track",
      title: "Graphic Design Masterclass",
      category: "Creative & Visuals",
      duration: "3 Months",
      mode: "Practical + Live Projects",
      iconName: "Palette",
      description: "Master Photoshop, Illustrator & Canva to create visual brand identities, social graphics, and print packaging.",
      skillsLearned: ["Adobe Photoshop", "Adobe Illustrator", "Brand Identity", "Social Creatives", "Print Layouts"],
      careerRoles: ["Graphic Designer", "Visual Artist", "UI Designer", "Brand Specialist"]
    },
    {
      id: "video-editing-track",
      title: "Video Editing & Motion Graphics",
      category: "Post Production",
      duration: "3 Months",
      mode: "Practical + Studio Access",
      iconName: "Film",
      description: "Learn Premiere Pro, After Effects, cinematic color grading, sound editing, and viral short-form reel editing.",
      skillsLearned: ["Premiere Pro", "After Effects", "Reels & Shorts Editing", "Sound Design", "Color Grading"],
      careerRoles: ["Video Editor", "Motion Graphics Artist", "Reel Creator", "Content Producer"]
    },
    {
      id: "web-design-track",
      title: "Web Design & Development",
      category: "Technology",
      duration: "4 Months",
      mode: "Practical Code + UI/UX",
      iconName: "Code",
      description: "Build modern, responsive websites using HTML, CSS, JavaScript, Tailwind, and React with modern design principles.",
      skillsLearned: ["HTML5 & CSS3", "JavaScript ES6+", "Tailwind CSS", "React/Next.js", "Figma UI/UX"],
      careerRoles: ["Frontend Developer", "Web Designer", "UI/UX Developer", "Freelance Web Creator"]
    },
    {
      id: "digital-marketing-track",
      title: "Digital Marketing & Performance Ads",
      category: "Marketing & Growth",
      duration: "3 Months",
      mode: "Live Ad Budget Campaigns",
      iconName: "TrendingUp",
      description: "Master Meta Ads, Google Ads, funnel strategy, email automation, analytics, and conversion optimization.",
      skillsLearned: ["Meta Ads Manager", "Google PPC Ads", "Funnel Building", "Conversion Tracking", "Analytics"],
      careerRoles: ["Digital Marketer", "Media Buyer", "Growth Hacker", "PPC Specialist"]
    },
    {
      id: "branding-track",
      title: "Brand Strategy & Visual Design",
      category: "Strategy & Branding",
      duration: "2 Months",
      mode: "Case Study & Client Audits",
      iconName: "Compass",
      description: "Learn how to position brands, write brand guidelines, define tone of voice, and lead corporate visual direction.",
      skillsLearned: ["Brand Architecture", "Positioning Strategy", "Typography", "Moodboarding", "Client Pitching"],
      careerRoles: ["Brand Strategist", "Creative Director", "Account Executive", "Marketing Lead"]
    },
    {
      id: "sem-seo-track",
      title: "SEO & Search Engine Marketing",
      category: "Search Intelligence",
      duration: "3 Months",
      mode: "Live Website Audits",
      iconName: "Search",
      description: "Dominate Google search results with technical SEO audits, local Map pack ranking, and Google Search Ads.",
      skillsLearned: ["Keyword Research", "Technical SEO", "Google Business Profile", "Google Ads", "Backlink Building"],
      careerRoles: ["SEO Executive", "Local SEO Specialist", "Search Marketer", "SEO Analyst"]
    }
  ]
};
