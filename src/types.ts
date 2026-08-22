export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  category: 'database' | 'backend' | 'fullstack' | 'automation';
  icon: string;
  accentColor?: string;
  architectureDetails?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrent: boolean;
  responsibilities: {
    area: string;
    points: string[];
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  board?: string;
  period: string;
  grade: string;
  status: string;
  highlights: string[];
}

export interface PersonalDetails {
  dob: string;
  nationality: string;
  location: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

