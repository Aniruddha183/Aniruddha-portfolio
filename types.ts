import { ComponentType } from 'react';

export interface StackItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  technologies: string;
  description: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: ComponentType<{ className?: string }>;
  url: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}
