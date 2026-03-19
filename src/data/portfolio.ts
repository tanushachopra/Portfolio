// ================================================================
//  PORTFOLIO DATA — Replace all {{PLACEHOLDERS}} with your info
// ================================================================

export const PERSON = {
  name: "Tanusha Chopra",           // e.g. "Ibrahim Memon"
  title: "Aspiring Software Developer",         // e.g. "UI/UX Designer & Software Engineer"
  bio: "I’m a second-year engineering student driven to build meaningful solutions through technology with a strong interest in software development and problem solving. I continuously explore new tools and concepts while growing through hands-on projects and learning.",             // e.g. "A self-taught designer with 3+ years building beautiful, functional digital products."
  email: "tanushachopra23@gmail.com",         // e.g. "ibrahim@example.com"
  available: true,
  stats: [
    { num: "2nd",  label: "Year Student"  },
    { num: "5+", label: "Projects"    },
    { num: "Daily", label: "Learning & Practice"     },
  ],
  socials: {
    github:    "https://github.com/tanushachopra",    // e.g. "https://github.com/yourhandle"
    linkedin:  "www.linkedin.com/in/tanusha-chopra-2a5605319",  // e.g. "https://linkedin.com/in/yourhandle"
    
  },
};

export const ABOUT = {
 bio: "Hey, I'm Tanusha — a passionate engineering student driven to build meaningful solutions through technology. I enjoy exploring different areas of software development, working on real-world projects, and continuously improving my problem-solving skills.",
  // e.g. "Hey, I'm <strong>Ibrahim</strong> — a passionate developer who loves turning complex problems into elegant digital solutions. I live at the intersection of design and engineering."
  tags: ["Problem Solver", "Developer", "Fast Learner", "Tech Enthusiast"],
};

export const TYPING_PHRASES = [
  "Aspiring Software Developer",
  "Frontend Developer",
  "DSA Learner",
  "Tech Enthusiast",
];

export const SKILLS = [
  {
    icon: "🎨",
    title: "Frontend Development",
    pills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js"
    ],
  },
  {
    icon: "💻",
    title: "Programming & Core",
    pills: [
      "C++",
      "Python",
      "Data Structures & Algorithms",
      "DBMS"
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    pills: [
      "SQL",
      "Microsoft Excel",
      "Power BI",
      "Machine Learning"
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    pills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "WordPress"
    ],
  },
];
export const PROJECTS = [
  {
  id: 1,
  emoji: "🚀",
  title: "HelpZap",
  description: "A hyperlocal micro-gig marketplace platform designed to connect users with nearby workers for everyday tasks using radius-based task discovery. Built as a full-stack system using HTML, CSS, and JavaScript with a robust backend architecture, it includes scalable APIs, real-time task workflows, and AI-powered features such as chatbot assistance and task scoring. The platform also integrates verification, rating-based trust systems, and payment workflows to ensure reliability and a seamless user experience.",
  stack: ["HTML", "CSS", "JavaScript", "Backend API", "AI Workflow", "Firebase"],
  live: "https://help-zap-tau.vercel.app/",
  github: "https://github.com/tanushachopra/HelpZap",
  gradientFrom: "#6a11cb",
  gradientTo: "#2575fc",
},
    
  {
  id: 2,
  emoji: "💉",
  title: "JabTracker",
  description: "A full-stack vaccination management platform that enables users to locate nearby vaccination centers, book appointments, and track vaccination records efficiently. Integrated Google Maps API for location-based search and Firebase for authentication and real-time data storage. The platform supports managing vaccination details for individuals and family members, providing a centralized and user-friendly healthcare tracking system.",
  stack: ["HTML", "CSS", "JavaScript", "Firebase", "Google Maps API"],
  live: "https://jabtracker.web.app/",
  github: "https://github.com/tanushachopra/JabTracker",
  gradientFrom: "#11998e",
  gradientTo: "#38ef7d",
},

];

export const FEATURED = {
  title: "HelpZap – Hyperlocal Micro-Gig Marketplace",
  description: "HelpZapp is a full-stack hyperlocal micro-gig marketplace designed to connect users with nearby workers for everyday tasks using radius-based discovery. It features scalable backend APIs, real-time task workflows, and AI-powered capabilities such as chatbot assistance and intelligent task scoring. The platform also integrates verification systems, rating-based trust, and payment workflows to ensure a seamless and reliable user experience.",
  stack: ["HTML", "CSS", "JavaScript", "AI Workflows", "Firebase", "AI Integration"],
  live: "https://help-zap-tau.vercel.app/",
  github:"https://github.com/tanushachopra/HelpZap" ,
};

export const EXPERIENCE = [
  {
    icon: "💻",
    role: "Full Stack Web Development Intern",
    company: "IGDTUW",
    period: "June 2025 – July 2025",
    description:
      "Worked on building full-stack web applications using modern web technologies. Gained hands-on experience in developing responsive user interfaces, integrating backend APIs, and implementing real-world features such as authentication, data handling, and project workflows. Strengthened problem-solving skills and understanding of scalable web development.",
  },
  {
    icon: "🚁",
    role: "Surveillance Drone Training Program",
    company: "IGDTUW",
    period: "May 2025 – June 2025",
    description:
      "Participated in a hands-on training program focused on surveillance drone technology, where we designed, built, and operated drones for real-world applications. Gained practical exposure to drone systems, teamwork, and technical problem-solving. The project was showcased in the presence of senior officials, including the Chief Minister, highlighting its real-world relevance and impact.",
  },
];

