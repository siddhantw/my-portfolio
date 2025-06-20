export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  social: SocialLinks;
  bio: string;
  image: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  github: string;
  youtube: string;
  website?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
}

export type SkillCategory = 
  | "Programming Languages"
  | "Testing Tools"
  | "Frameworks"
  | "DevOps"
  | "Databases"
  | "Cloud Platforms"
  | "Project Management"
  | "Soft Skills";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  image?: string;
  gallery?: string[];
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  highlights: string[];
  challenges?: string[];
  solutions?: string[];
  impact?: string;
}

export type ProjectCategory = 
  | "Test Automation"
  | "Quality Engineering"
  | "DevOps"
  | "Team Leadership"
  | "Process Improvement"
  | "Training & Development";

export type ProjectStatus = "Completed" | "In Progress" | "Planned" | "On Hold";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  pricing?: ServicePricing;
  duration?: string;
  deliverables: string[];
}

export interface ServicePricing {
  type: "Fixed" | "Hourly" | "Project-based" | "Custom";
  amount?: number;
  currency?: string;
  description?: string;
}

export interface Speaking {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  type: SpeakingType;
  audience: number;
  topics: string[];
  description: string;
  links: {
    slides?: string;
    video?: string;
    event_page?: string;
  };
  image?: string;
}

export type SpeakingType = 
  | "Keynote"
  | "Technical Talk"
  | "Workshop"
  | "Panel Discussion"
  | "Webinar"
  | "Podcast";

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar?: string;
  date: string;
  rating?: number;
  relationship: TestimonialRelationship;
}

export type TestimonialRelationship = 
  | "Colleague"
  | "Manager"
  | "Direct Report"
  | "Client"
  | "Vendor"
  | "Conference Attendee";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
  description?: string;
  skills: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: AwardCategory;
  image?: string;
}

export type AwardCategory = 
  | "Professional Excellence"
  | "Leadership"
  | "Innovation"
  | "Community Contribution"
  | "Speaking"
  | "Technical Achievement";

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  category: string;
  featured: boolean;
  image?: string;
  readTime: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface ThemeConfig {
  mode: "light" | "dark" | "system";
  primaryColor: string;
  fontFamily: string;
  borderRadius: string;
  animations: boolean;
}

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export interface AccessibilityFeatures {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: "small" | "medium" | "large";
  screenReader: boolean;
  keyboardNavigation: boolean;
}