export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  category: 'backend' | 'database' | 'security' | 'fullstack';
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

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
