import { Project, SkillCategory, Education, WorkExperience, PersonalDetails } from '../types';
import profilePic from '../assets/images/shiksak.jpeg';

export const PERSONAL_INFO = {
  name: "MUHAMMED MIDLAJ MK",
  displayName: "Muhammed Midlaj MK",
  shortName: "Midlaj",
  initials: "MK",
  title: "Oracle SQL Developer | Database Engineer",
  tagline: "Oracle SQL Developer & Database Engineer with 2+ years of hands-on experience designing, optimizing, and automating enterprise-level retail databases and ERP backend systems.",
  email: "midlajmuhammed443@gmail.com",
  phone: "+965 66907621",
  location: "Hawally Block-1, Kuwait",
  nationality: "Indian",
  dob: "10 February 2002",
  status: "Full-Time at Regency Group (Grand Hyper Market)",
  profileImage: profilePic,
  aboutParagraphs: [
    "I am an Oracle SQL Developer and Database Engineer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems for enterprise-level retail solutions.",
    "Skilled in PL/SQL development, performance tuning, and reporting, with a proven track record of building automated solutions for data-driven business processes, fine-tuning high-throughput transaction tables with millions of records, and integrating backend logic with front-end portals and ERP systems."
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
    role: "Software Developer / Software Administrator",
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
    id: "database",
    title: "Database Management",
    skills: [
      { name: "Oracle SQL", level: "Expert", isPrimary: true },
      { name: "PL/SQL", level: "Expert", isPrimary: true },
      { name: "Microsoft SQL Server", level: "Advanced", isPrimary: true },
      { name: "Query Performance Tuning", level: "Advanced", isPrimary: true },
      { name: "Oracle RMAN Backups", level: "Proficient", isPrimary: false },
      { name: "Materialized Views & Triggers", level: "Expert", isPrimary: true }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "C#", level: "Advanced", isPrimary: true },
      { name: "Python", level: "Intermediate", isPrimary: true },
      { name: "C", level: "Proficient", isPrimary: false },
      { name: "Java", level: "Proficient", isPrimary: false },
      { name: "JavaScript", level: "Intermediate", isPrimary: true }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Technologies",
    skills: [
      { name: "ASP.NET Core", level: "Advanced", isPrimary: true },
      { name: "REST API", level: "Advanced", isPrimary: true },
      { name: "HTML & CSS", level: "Advanced", isPrimary: false },
      { name: "Bootstrap", level: "Advanced", isPrimary: false },
      { name: "jQuery & AJAX", level: "Proficient", isPrimary: false }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environments",
    skills: [
      { name: "Oracle SQL Developer", level: "Expert", isPrimary: true },
      { name: "Oracle Toad", level: "Advanced", isPrimary: true },
      { name: "Visual Studio", level: "Advanced", isPrimary: true },
      { name: "Visual Studio Code", level: "Advanced", isPrimary: true },
      { name: "Excel Pivot Integration", level: "Advanced", isPrimary: false }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "auto-po-algorithm",
    title: "Auto Ordering Algorithm in PL/SQL (Auto PO)",
    shortDescription: "Automated product ordering algorithm in PL/SQL that generates purchase orders based on sales trends, stock levels, and threshold limits.",
    fullDescription: "Created an enterprise-grade automated product ordering algorithm using PL/SQL to optimize inventory management for multi-branch retail stores. The algorithm autonomously calculates and generates purchase orders based on real-time sales data, current stock levels, buffer parameters, and predefined supplier thresholds, drastically reducing manual intervention and eliminating stockouts.",
    tags: ["PL/SQL", "ORACLE SQL", "AUTO PURCHASE ORDER", "INVENTORY ERP", "ALGORITHM"],
    category: "database",
    icon: "Package",
    accentColor: "indigo",
    architectureDetails: [
      "Designed high-performance PL/SQL packages and scheduled batch jobs for real-time inventory threshold evaluation",
      "Dynamic PO generation matching supplier lead times, minimum order quantities (MOQ), and store consumption velocity",
      "Seamless integration with enterprise inventory and ERP modules ensuring timely reordering",
      "Eliminated stockouts and manual purchase entry overhead across retail outlets"
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  },
  {
    id: "customer-loyalty-program",
    title: "Customer Loyalty Program Backend",
    shortDescription: "High-throughput PL/SQL backend engine for customer point redemption, tier deduction, and voucher issuance.",
    fullDescription: "Architected and implemented robust backend logic for customer point redemption and voucher issuance using optimized PL/SQL procedures. Ensured the backend handled high-concurrency real-time point deductions, fraud validation, and voucher verification while guaranteeing 100% ACID transactional consistency across retail points of sale.",
    tags: ["PL/SQL", "ORACLE SQL", "STORED PROCEDURES", "TRANSACTIONS", "LOYALTY ENGINE"],
    category: "database",
    icon: "ShieldAlert",
    accentColor: "purple",
    architectureDetails: [
      "Engineered atomic PL/SQL stored procedures for instant point redemption and voucher issuance",
      "Handled high-volume concurrent transaction processing with stringent concurrency control and integrity checks",
      "Real-time voucher validation and expiration mechanics integrated with POS registers",
      "Audited point ledger tables with transactional rollback safety"
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  },
  {
    id: "ivision-blog-app",
    title: "iVision Blog – Database Design & Integration",
    shortDescription: "Centralized relational database structure in Oracle SQL and module integration for the iVision ASP.NET Core application.",
    fullDescription: "Designed and implemented a normalized relational database schema in Oracle SQL for a centralized blog management platform to support smooth retail operations and internal corporate communication. Developed schema constraints, relationships, indexes, and procedures, collaborating with front-end engineers to seamlessly hook into the iVision ASP.NET Core web application.",
    tags: ["ORACLE SQL", "ASP.NET CORE", "C#", "REST API", "RELATIONAL DB"],
    category: "fullstack",
    icon: "Database",
    accentColor: "emerald",
    architectureDetails: [
      "Engineered comprehensive relational tables, primary/foreign key relationships, and integrity constraints",
      "Efficient data management for users, hierarchical categories, tags, posts, and nested comments",
      "RESTful API integration with the iVision ASP.NET Core enterprise web application",
      "Optimized query execution plans and dynamic views for rapid content retrieval"
    ],
    githubUrl: "https://github.com/muhammedmidlajmk",
    liveUrl: "https://www.linkedin.com/in/muhammed-midlaj-584820294",
    featured: true
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Diploma in Computer Engineering (3-Year)",
    institution: "SSM Polytechnic College, Tirur, Kerala",
    board: "Department of Technical Education, Kerala, India",
    period: "Completed Feb 2023",
    grade: "CGPA: 8.1 / 10",
    status: "Graduated with Honors",
    highlights: [
      "3-Year intensive technical engineering curriculum in Computer Science & Systems",
      "Deep focus on Relational Database Management, Data Structures, and Software Development",
      "Completed practical capstone systems in Database Systems and C#/.NET"
    ]
  },
  {
    degree: "Higher Secondary Education – Science",
    institution: "Department of General and Higher Education, Kerala, India",
    board: "Board of Higher Secondary Examinations, Kerala",
    period: "Completed 2020",
    grade: "Score: 85.2%",
    status: "Completed",
    highlights: [
      "Concentration in Mathematics, Physics, Chemistry, and Computer Science",
      "Achieved 85.2% distinction in state board examinations"
    ]
  }
];
