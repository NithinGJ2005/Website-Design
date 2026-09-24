export interface NavItem {
  label: string;
  href: string;
}

export interface CapabilityIndicator {
  number: string;
  title: string;
}

export interface InfoBlock {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: {
    overview: string;
    capabilities: string[];
    outcomes: string[];
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    bgImage: string;
    capabilities: CapabilityIndicator[];
    rightStatement: string;
  };
  about: {
    label: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    infoBlocks: InfoBlock[];
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    location: string;
    hours: string;
  };
  socialLinks: {
    label: string;
    url: string;
  }[];
}
