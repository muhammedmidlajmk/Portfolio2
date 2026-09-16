import { Project, SkillCategory, Education, WorkExperience, PersonalDetails } from '../types';
import profilePic from '../assets/images/shiksak.jpeg';

export const PERSONAL_INFO = {
  name: "MUHAMMED MIDLAJ MK",
  displayName: "Muhammed Midlaj MK",
  shortName: "Midlaj",
  initials: "MM",
  title: "Oracle SQL Developer | Database Engineer | .NET Core MVC Developer",
  tagline: "Oracle SQL Developer, Database Engineer, and .NET Core MVC Developer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems and ASP.NET Core MVC applications for enterprise-level retail solutions.",
  email: "midlajmuhammed443@gmail.com",
  phone: "+965 66907621",
  location: "Hawally Block-1, Kuwait",
  nationality: "Indian",
  dob: "10 February 2002",
  status: "Full-Time at Regency Group (Grand Hyper Market)",
  profileImage: profilePic,
  aboutParagraphs: [
    "Oracle SQL Developer, Database Engineer, and .NET Core MVC Developer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems and ASP.NET Core MVC applications for enterprise-level retail solutions.",
    "Skilled in PL/SQL development, performance tuning, and reporting, with a track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems.",
    "Currently expanding academic foundation through a Bachelor's degree in Computer Applications (BCA) to complement hands-on industry experience."
  ],
  socials: {
    github: "https://github.com/muhammedmidlajmk",
    linkedin: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    email: "mailto:midlajmuhammed443@gmail.com",
    phone: "tel:+96566907621"
  }
};

export const PERSONAL_DETAILS: PersonalDetails = {
  dob: "10 February 2002",
  nationality: "Indian",
  location: "Hawally Block-1, Kuwait",
  phone: "+965 66907621"
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Regency Group For Corporate Management (Grand Hyper Market)",
    location: "Kuwait",
    role: "Software Developer | .NET Core MVC Developer | Software Administrator",
    period: "Jun 2023 – Present",
    isCurrent: true,
    responsibilities: [
      {
        area: "Oracle SQL & PL/SQL Development",
        points: [
          "Created complex stored procedures, functions, packages, and triggers in PL/SQL to handle backend business logic for retail operations and ERP workflows.",
          "Developed and fine-tuned high-performance SQL queries for real-time dashboards and reporting systems.",
          "Implemented data validation, transformation, and integrity checks for transaction tables with millions of records."
        ]
      },
      {
        area: ".NET Core MVC Development",
        points: [
          "Developed and maintained web applications using ASP.NET Core MVC, implementing backend logic, controllers, and views for internal business portals.",
          "Integrated ASP.NET Core MVC applications with Oracle databases to deliver end-to-end retail and ERP solutions.",
          "Built REST APIs to connect front-end portals with backend PL/SQL services and business logic."
        ]
      },
      {
        area: "Data Integration & Automation",
        points: [
          "Created automated PL/SQL jobs to process inventory data, generate auto purchase orders, and monitor low stock levels.",
          "Built scheduled backup scripts and recovery plans using Oracle RMAN, ensuring business continuity through proper archival strategies.",
          "Developed custom reports and dashboards for management, providing detailed insights into sales trends, inventory levels, and customer behavior.",
          "Collaborated with cross-functional teams to gather reporting requirements and design database solutions that met business needs and improved overall efficiency."
        ]
      },
      {
        area: "Reporting & Business Intelligence",
        points: [
          "Developed custom SQL reports for sales, inventory, and employee performance analysis.",
          "Built dynamic views and materialized views for reporting using Oracle SQL Developer with Excel pivot integration."
        ]
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "C#", level: "Advanced", isPrimary: true },
      { name: "Python", level: "Proficient", isPrimary: true },
      { name: "C", level: "Proficient", isPrimary: false },
      { name: "Java", level: "Proficient", isPrimary: false },
      { name: "JavaScript", level: "Proficient", isPrimary: true }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    skills: [
      { name: "Oracle SQL", level: "Expert", isPrimary: true },
      { name: "PL/SQL", level: "Expert", isPrimary: true },
      { name: "Microsoft SQL Server", level: "Advanced", isPrimary: true },
      { name: "Query Performance Tuning", level: "Advanced", isPrimary: true },
      { name: "Oracle RMAN Backups", level: "Proficient", isPrimary: false }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & APIs",
    skills: [
      { name: "ASP.NET Core MVC", level: "Advanced", isPrimary: true },
      { name: "ASP.NET Core", level: "Advanced", isPrimary: true },
      { name: "REST API", level: "Advanced", isPrimary: true }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: "Advanced", isPrimary: true },
      { name: "CSS", level: "Advanced", isPrimary: true },
      { name: "Bootstrap", level: "Advanced", isPrimary: true },
      { name: "jQuery", level: "Proficient", isPrimary: false },
      { name: "AJAX", level: "Proficient", isPrimary: true }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environments",
    skills: [
      { name: "Visual Studio", level: "Advanced", isPrimary: true },
      { name: "Visual Studio Code", level: "Advanced", isPrimary: true },
      { name: "Oracle SQL Developer", level: "Expert", isPrimary: true },
      { name: "Oracle Toad", level: "Advanced", isPrimary: true }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "auto-po-algorithm",
    title: "Auto Ordering Algorithm in PL/SQL (Auto PO)",
    shortDescription: "Automated product ordering algorithm using PL/SQL to optimize inventory management for retail stores.",
    fullDescription: "Created an automated product ordering algorithm using PL/SQL to optimize inventory management for retail stores. The algorithm automatically generates purchase orders based on sales data, stock levels, and predefined thresholds, reducing manual intervention and eliminating stockouts. Integrated the solution with the inventory management system, ensuring accurate and timely reordering of products.",
    tags: ["PL/SQL", "ORACLE SQL", "INVENTORY MANAGEMENT", "AUTO PO", "ALGORITHM"],
    category: "database",
    icon: "Package",
    accentColor: "blue",
    architectureDetails: [
      "Created an automated product ordering algorithm using PL/SQL to optimize inventory management for retail stores.",
      "Algorithm automatically generates purchase orders based on sales data, stock levels, and predefined thresholds, reducing manual intervention and stockouts.",
      "Integrated the solution with the inventory management system, ensuring accurate and timely reordering of products."
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  },
  {
    id: "customer-loyalty-program",
    title: "Customer Loyalty Program",
    shortDescription: "Backend logic for customer point redemption, voucher issuance, and real-time deductions using PL/SQL procedures.",
    fullDescription: "Designed backend logic for customer point redemption and voucher issuance using PL/SQL procedures. Ensured the backend system handled real-time point deductions and voucher validations, maintaining data accuracy across enterprise retail operations.",
    tags: ["PL/SQL", "ORACLE SQL", "STORED PROCEDURES", "LOYALTY ENGINE", "TRANSACTIONS"],
    category: "database",
    icon: "ShieldCheck",
    accentColor: "blue",
    architectureDetails: [
      "Designed backend logic for customer point redemption and voucher issuance using PL/SQL procedures.",
      "Ensured the backend system handled real-time point deductions and voucher validations, maintaining data accuracy."
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  },
  {
    id: "ivision-blog-app",
    title: "iVision Blog (Web Application) - Database Design & Integration",
    shortDescription: "Relational database structure in Oracle SQL and ASP.NET Core MVC integration for centralized blog management.",
    fullDescription: "Designed and implemented a relational database structure in Oracle SQL for a centralized blog management system for smooth retail operations. Developed tables, relationships, and constraints to manage users, posts, categories, tags, and comments efficiently. Collaborated with front-end developers to integrate the blog module into the iVision ASP.NET Core MVC application.",
    tags: ["ORACLE SQL", "ASP.NET CORE MVC", "C#", "DATABASE DESIGN", "REST API"],
    category: "fullstack",
    icon: "Database",
    accentColor: "blue",
    architectureDetails: [
      "Designed and implemented a relational database structure in Oracle SQL for a centralized blog management system for smooth retail operations.",
      "Developed tables, relationships, and constraints to manage users, posts, categories, tags, and comments efficiently.",
      "Collaborated with front-end developers to integrate the blog module into the iVision ASP.NET Core MVC application."
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KL University (Online)",
    board: "Final Semester",
    period: "Expected Completion: March 2027",
    grade: "Pursuing (Final Semester)",
    status: "In Progress",
    highlights: [
      "Expanding academic foundation through a Bachelor's degree in Computer Applications to complement hands-on industry experience",
      "Advanced studies in software development, data structures, and computer applications"
    ]
  },
  {
    degree: "Diploma in Computer Engineering (3-Year)",
    institution: "SSM Polytechnic College, Tirur, Kerala",
    board: "Department of Technical Education, Kerala, India",
    period: "Feb 2023",
    grade: "CGPA: 8.1",
    status: "Completed",
    highlights: [
      "3-Year comprehensive curriculum in Computer Engineering and Software Principles",
      "Core competencies in Database Management, Object-Oriented Programming, and Systems Engineering"
    ]
  },
  {
    degree: "Higher Secondary Education - Science",
    institution: "Department of General and Higher Education, Kerala, India",
    board: "Department of General and Higher Education, Kerala, India",
    period: "2020",
    grade: "85.2%",
    status: "Completed",
    highlights: [
      "Rigorous foundations in Mathematics, Physics, Chemistry, and Computer Science"
    ]
  }
];
