// User and Profile Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: string;
  userId: string;
  bio?: string;
  location?: string;
  website?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    youtube?: string;
  };
  skills: string[];
  experience: Experience[];
  education: Education[];
}

// Experience and Education Types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  description?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: Date;
  endDate?: Date;
  impact?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export type ProjectCategory = 
  | 'dashboard' 
  | 'automation' 
  | 'testing-framework' 
  | 'blog' 
  | 'innovation' 
  | 'mobile-app' 
  | 'web-app';

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  features: string[];
  price: {
    amount?: number;
    currency: string;
    period?: 'hour' | 'day' | 'week' | 'month' | 'project';
    display: string;
  };
  duration: string;
  category: ServiceCategory;
  available: boolean;
}

export type ServiceCategory = 
  | 'consulting' 
  | 'mentorship' 
  | 'training' 
  | 'speaking' 
  | 'development';

// Speaking and Event Types
export interface SpeakingEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  venue?: string;
  type: EventType;
  topic: string;
  audience: string;
  status: EventStatus;
  url?: string;
  recording?: string;
  slides?: string;
  images: string[];
  feedback?: EventFeedback[];
}

export type EventType = 
  | 'keynote' 
  | 'technical-session' 
  | 'workshop' 
  | 'panel' 
  | 'lightning-talk' 
  | 'webinar';

export type EventStatus = 
  | 'upcoming' 
  | 'confirmed' 
  | 'completed' 
  | 'cancelled';

export interface EventFeedback {
  rating: number;
  comment?: string;
  attendee?: string;
  anonymous: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
  project?: string;
  date: Date;
  featured: boolean;
  linkedin?: string;
  approved: boolean;
}

// Skill Types
export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  percentage: number;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  yearsOfExperience: number;
  certifications: string[];
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Blog and Content Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt?: Date;
  updatedAt: Date;
  status: 'draft' | 'published' | 'archived';
  categories: string[];
  tags: string[];
  featuredImage?: string;
  readingTime: number;
  views: number;
  likes: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords: string[];
  };
}

// Contact and Communication Types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  repliedAt?: Date;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  interests: string[];
  subscribed: boolean;
  subscribedAt: Date;
}

// Analytics Types
export interface PageView {
  path: string;
  timestamp: Date;
  userAgent?: string;
  referrer?: string;
  country?: string;
  device?: string;
}

export interface SiteMetrics {
  totalViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  topReferrers: Array<{
    domain: string;
    visits: number;
  }>;
}