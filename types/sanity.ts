import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  alt?: string;
  caption?: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  logo?: SanityImage;
  logoDark?: SanityImage;
  email: string;
  phone: string;
  address: string;
  pec: string;
  partitaIva: string;
  whatsappNumber: string;
  googleMapsEmbed?: string;
  socialLinks?: { platform: string; url: string }[];
  seoDefaults?: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: SanityImage;
  };
}

export interface PageSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface HeroSection {
  _type: "hero";
  _key: string;
  heading: string;
  subheading?: string;
  backgroundImage?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
  style?: "dark" | "light" | "image";
}

export interface ContentBlockSection {
  _type: "contentBlock";
  _key: string;
  heading?: string;
  body?: PortableTextBlock[];
  alignment?: "left" | "center" | "right";
  backgroundColor?: "white" | "cream" | "navy";
}

export interface ServicesGridSection {
  _type: "servicesGrid";
  _key: string;
  heading?: string;
  subheading?: string;
  services?: Service[];
  layout?: "grid-3" | "grid-2" | "list";
}

export interface ImageGallerySection {
  _type: "imageGallery";
  _key: string;
  heading?: string;
  images?: (SanityImage & { caption?: string })[];
  layout?: "grid" | "carousel";
}

export interface CtaSection {
  _type: "cta";
  _key: string;
  heading: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: "navy" | "orange" | "white";
}

export interface ContactSectionType {
  _type: "contactSection";
  _key: string;
  heading?: string;
  subheading?: string;
  showMap?: boolean;
  showForm?: boolean;
  calendlyUrl?: string;
  sitePhone?: string;
  siteEmail?: string;
  siteAddress?: string;
  sitePec?: string;
}

export interface FaqSectionType {
  _type: "faqSection";
  _key: string;
  heading?: string;
  subheading?: string;
  faqs?: FAQ[];
}

export interface TeamGridSection {
  _type: "teamGrid";
  _key: string;
  heading?: string;
  subheading?: string;
  members?: TeamMember[];
}

export interface StatsSection {
  _type: "stats";
  _key: string;
  heading?: string;
  stats?: { number: string; label: string; suffix?: string }[];
  backgroundColor?: "navy" | "white" | "cream";
}

export type Section =
  | HeroSection
  | ContentBlockSection
  | ServicesGridSection
  | ImageGallerySection
  | CtaSection
  | ContactSectionType
  | FaqSectionType
  | TeamGridSection
  | StatsSection;

export interface Page {
  title: string;
  slug: { current: string };
  seo?: PageSeo;
  sections?: Section[];
}

export interface Service {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  description?: PortableTextBlock[];
  icon?: string;
  image?: SanityImage;
  order?: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: { name: string; role?: string; photo?: SanityImage };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage & { alt?: string };
  categories?: string[];
  body?: PortableTextBlock[];
  seo?: PageSeo;
}

export interface TeamMember {
  _id: string;
  name: string;
  slug: { current: string };
  role?: string;
  bio?: PortableTextBlock[];
  photo?: SanityImage;
  specializations?: string[];
  email?: string;
  phone?: string;
  linkedin?: string;
  order?: number;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: PortableTextBlock[];
  category?: string;
  order?: number;
}
