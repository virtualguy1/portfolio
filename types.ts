export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills: string;
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface BlogPost {
  title: string;
  date: string;
  link: string;
}

export interface MDXPost {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  navLinks: NavLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  socials: NavLink[];
}