import blockContent from "./objects/blockContent";
import hero from "./objects/hero";
import contentBlock from "./objects/contentBlock";
import servicesGrid from "./objects/servicesGrid";
import imageGallery from "./objects/imageGallery";
import testimonials from "./objects/testimonials";
import cta from "./objects/cta";
import contactSection from "./objects/contactSection";
import faqSection from "./objects/faqSection";
import teamGrid from "./objects/teamGrid";
import stats from "./objects/stats";

import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import service from "./documents/service";
import post from "./documents/post";
import teamMember from "./documents/teamMember";
import testimonial from "./documents/testimonial";
import faq from "./documents/faq";

export const schemaTypes = [
  // Objects (must be registered before documents that reference them)
  blockContent,
  hero,
  contentBlock,
  servicesGrid,
  imageGallery,
  testimonials,
  cta,
  contactSection,
  faqSection,
  teamGrid,
  stats,
  // Documents
  siteSettings,
  page,
  service,
  post,
  teamMember,
  testimonial,
  faq,
];
