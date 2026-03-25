import type { Section } from "@/types/sanity";
import Hero from "@/components/sections/Hero";
import ContentBlock from "@/components/sections/ContentBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ImageGallery from "@/components/sections/ImageGallery";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import TeamGrid from "@/components/sections/TeamGrid";
import Stats from "@/components/sections/Stats";

const sectionComponents: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  contentBlock: ContentBlock,
  servicesGrid: ServicesGrid,
  imageGallery: ImageGallery,
  cta: CTA,
  contactSection: ContactSection,
  faqSection: FAQ,
  teamGrid: TeamGrid,
  stats: Stats,
};

interface SectionRendererProps {
  sections?: Section[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => {
        const Component = sectionComponents[section._type];
        if (!Component) return null;
        return <Component key={section._key} {...section} />;
      })}
    </>
  );
}
