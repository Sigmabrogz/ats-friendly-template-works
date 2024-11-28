export type ResumeTemplate = 
  | "modern-minimal"
  | "professional-classic"
  | "creative-tech"
  | "bold-impact"
  | "elegant-simple"
  | "dynamic-tech";

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface ResumeData {
  template: ResumeTemplate;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    summary: string;
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: { language: string; proficiency: string }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
}

export interface ParsedResumeData extends Omit<ResumeData, 'template'> {}