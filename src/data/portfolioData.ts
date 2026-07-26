import { Project, SkillCategory, Education } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammed Midlaj MK",
  shortName: "Midlaj",
  initials: "MK",
  title: "Software Developer & BCA Scholar",
  tagline: "Building full-stack applications with a focus on Clean Architecture and Optimized Databases.",
  email: "muhammedmidlajmk08@gmail.com",
  secondaryEmail: "muhammedmidlajmk08@email.com",
  profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCythtaM-iOKWi0JUUiQtcC3CH8o9bhUDiaFY53ZRWXFa4mGuVRFevtTZlWDusVoP6dl3e&s=10",
  aboutParagraphs: [
    "I'm Muhammed Midlaj MK, specializing in ASP.NET, C#, and Oracle SQL. My journey in tech is driven by the challenge of turning complex logic into seamless user experiences.",
    "I focus heavily on backend efficiency—designing high-speed database queries for complex SKUs, building robust RESTful APIs, and exploring network security through research in Zero-Day DDoS Detection at the fog layer."
  ],
  location: "India",
  status: "Available for Internships & Full-Time Roles",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:muhammedmidlajmk08@gmail.com"
  }
};

export const EDUCATION_DATA: Education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "University Department of Computer Applications",
  period: "Graduating Batch",
  status: "Currently Pursuing / Scholar",
  highlights: [
    "Focus on Database Management Systems & Advanced Data Structures",
    "Active Research in Network Cybersecurity & DDoS Defense Systems",
    "Built real-world enterprise projects in C# / .NET and Oracle SQL"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & Frameworks",
    skills: [
      { name: "C# / .NET", level: "Advanced", isPrimary: true },
      { name: "ASP.NET Core", level: "Advanced", isPrimary: true },
      { name: "Python", level: "Intermediate", isPrimary: true },
      { name: "JavaScript (ES6+)", level: "Advanced", isPrimary: true },
      { name: "TypeScript", level: "Intermediate", isPrimary: false }
    ]
  },
  {
    id: "database",
    title: "Databases & ORMs",
    skills: [
      { name: "Oracle SQL", level: "Advanced", isPrimary: true },
      { name: "SQL Server / T-SQL", level: "Advanced", isPrimary: true },
      { name: "Entity Framework", level: "Intermediate", isPrimary: false },
      { name: "RESTful APIs", level: "Advanced", isPrimary: true }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    skills: [
      { name: "Tailwind CSS", level: "Advanced", isPrimary: true },
      { name: "React.js", level: "Intermediate", isPrimary: true },
      { name: "HTML5 / CSS3", level: "Advanced", isPrimary: false },
      { name: "Responsive Layouts", level: "Advanced", isPrimary: false }
    ]
  },
  {
    id: "security",
    title: "Security & Dev Tools",
    skills: [
      { name: "Fog DDoS Research", level: "Research Level", isPrimary: true },
      { name: "Network Security", level: "Intermediate", isPrimary: true },
      { name: "Git & GitHub", level: "Advanced", isPrimary: true },
      { name: "Clean Architecture", level: "Intermediate", isPrimary: false }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "inventory-management",
    title: "Inventory Management System",
    shortDescription: "A high-performance system for tracking complex SKUs, built with C# and Oracle SQL. Optimized for large-scale data retrieval.",
    fullDescription: "A full-scale enterprise resource planning module designed for multi-tier warehouses with thousands of stock keeping units (SKUs). Features real-time stock updating, automated reorder triggers, relational SKU variant mapping, and sub-millisecond query optimization.",
    tags: ["ASP.NET", "ORACLE SQL", "C#", "RESTful API"],
    category: "backend",
    icon: "Package",
    accentColor: "indigo",
    architectureDetails: [
      "Layered Clean Architecture pattern with Data Access Layer separation",
      "Optimized Oracle SQL stored procedures for bulk SKU indexing",
      "Automated stock delta alerts and transactional consistency",
      "Role-based authorization for inventory managers and warehouse staff"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true
  },
  {
    id: "cybersecurity-research",
    title: "Cybersecurity Research: Fog DDoS Detection",
    shortDescription: "Developing Fog-Level Zero-Day DDoS Detection methods. Research focused on proactive threat mitigation in network layers.",
    fullDescription: "Academic research project investigating machine learning and anomaly detection algorithms at fog computing nodes to mitigate zero-day Distributed Denial of Service (DDoS) attacks prior to reaching centralized cloud servers.",
    tags: ["PYTHON", "NETWORKING", "SECURITY", "FOG COMPUTING"],
    category: "security",
    icon: "ShieldAlert",
    accentColor: "purple",
    architectureDetails: [
      "Edge packet feature extraction for real-time traffic analysis",
      "Zero-Day attack pattern classification model using Python",
      "Low-latency filtering pipeline reducing cloud server overload by up to 85%",
      "Comprehensive research paper drafting with simulated network telemetry"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true
  },
  {
    id: "student-portal-api",
    title: "Academic Portal REST Services",
    shortDescription: "Backend service layer for academic institutions handling student enrolment, course scheduling, and grade transcripts.",
    fullDescription: "Robust Web API built with ASP.NET Core and SQL Server providing secure endpoints for mobile and web clients, featuring JWT token authentication and transactional data processing.",
    tags: ["ASP.NET CORE", "SQL SERVER", "JWT AUTH", "C#"],
    category: "fullstack",
    icon: "GraduationCap",
    accentColor: "blue",
    architectureDetails: [
      "RESTful API endpoints with Swagger/OpenAPI documentation",
      "JWT-based stateless authentication and authorization matrix",
      "Optimized SQL join queries with indexed database views",
      "Built-in audit logging and centralized error handling middleware"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: false
  },
  {
    id: "query-optimizer-tool",
    title: "Oracle SQL Performance Profiler",
    shortDescription: "Developer utility for analyzing query execution plans and indexing recommendations in Oracle SQL environment.",
    fullDescription: "Specialized tool designed to parse slow SQL queries, highlight full table scans, suggest optimal composite indexes, and streamline database administration tasks.",
    tags: ["ORACLE SQL", "DATABASE DESIGN", "PERFORMANCE", "PYTHON"],
    category: "database",
    icon: "Database",
    accentColor: "emerald",
    architectureDetails: [
      "EXPLAIN PLAN parsing engine with visual query cost breakdown",
      "Index fragmentation and table statistics analyzer",
      "Automated SQL refactoring suggestions for complex joins",
      "Exportable PDF and JSON performance diagnostic reports"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: false
  }
];
