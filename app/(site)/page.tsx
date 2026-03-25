import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery } from "@/sanity/queries/page";
import SectionRenderer from "@/components/shared/SectionRenderer";
import type { Page, Section } from "@/types/sanity";
import FallbackHome from "./FallbackHome";

export default async function HomePage() {
  const page = await sanityFetch<Page | null>({
    query: pageBySlugQuery,
    params: { slug: "home" },
    tags: ["page"],
  });

  if (page?.sections?.length) {
    return <SectionRenderer sections={page.sections} />;
  }

  return <FallbackHome />;
}
