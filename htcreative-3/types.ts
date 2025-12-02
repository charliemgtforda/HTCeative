export interface Project {
  id: string;
  client: string;
  industry: string;
  category: 'Branding' | 'Websites' | 'Campaigns' | 'Print';
  description: string;
  story?: string; // New field for long-form narrative
  challenge?: string;
  approach?: string;
  outcome?: string;
  image: string;
  portfolio?: string[]; // Array of URLs for images or videos
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
}