import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery } from "@/sanity/queries/page";
import { settingsQuery } from "@/sanity/queries/settings";
import SectionRenderer from "@/components/shared/SectionRenderer";
import type { Page, SiteSettings } from "@/types/sanity";
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

  const settings = await sanityFetch<SiteSettings>({
    query: settingsQuery,
    tags: ["siteSettings"],
  });

  return (
    <FallbackHome
      sitePhone={settings?.phone}
      siteEmail={settings?.email}
      siteAddress={settings?.address}
      sitePec={settings?.pec}
    />
  );
}
