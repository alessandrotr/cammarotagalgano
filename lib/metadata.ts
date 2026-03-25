import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import type { PageSeo, SiteSettings } from "@/types/sanity";

export function generatePageMetadata(
  page: { title?: string; seo?: PageSeo } | null,
  settings: SiteSettings | null
): Metadata {
  const title =
    page?.seo?.metaTitle ||
    page?.title ||
    settings?.seoDefaults?.metaTitle ||
    "Studio Associato Cammarota Galgano";

  const description =
    page?.seo?.metaDescription ||
    settings?.seoDefaults?.metaDescription ||
    "Studio di Dottori Commercialisti a Napoli. Consulenza fiscale, tributaria, societaria e contabile dal 1992.";

  const ogImage = page?.seo?.ogImage || settings?.seoDefaults?.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: urlFor(ogImage).width(1200).height(630).url() }] : [],
      locale: "it_IT",
      type: "website",
      siteName: "Studio Associato Cammarota Galgano",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
