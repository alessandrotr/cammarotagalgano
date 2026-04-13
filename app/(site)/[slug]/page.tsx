import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery, allPageSlugsQuery } from "@/sanity/queries/page";
import { generatePageMetadata } from "@/lib/metadata";
import { settingsQuery } from "@/sanity/queries/settings";
import SectionRenderer from "@/components/shared/SectionRenderer";
import type { Page, SiteSettings } from "@/types/sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

const reservedSlugs = ["servizi", "professionisti", "chi-siamo", "news", "contatti"];

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: allPageSlugsQuery,
    tags: ["page"],
  });
  return slugs
    .filter((slug) => !reservedSlugs.includes(slug) && slug !== "home")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [page, settings] = await Promise.all([
    sanityFetch<Page | null>({ query: pageBySlugQuery, params: { slug }, tags: ["page"] }),
    sanityFetch<SiteSettings | null>({ query: settingsQuery, tags: ["settings"] }),
  ]);
  return generatePageMetadata(page, settings);
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = await sanityFetch<Page | null>({
    query: pageBySlugQuery,
    params: { slug },
    tags: ["page"],
  });

  if (!page) notFound();

  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {page.title}
          </h1>
        </div>
      </section>

      <SectionRenderer sections={page.sections} />
    </>
  );
}
