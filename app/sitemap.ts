import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPageSlugsQuery } from "@/sanity/queries/page";
import { allServiceSlugsQuery } from "@/sanity/queries/services";
import { allPostSlugsQuery } from "@/sanity/queries/posts";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pageSlugs, serviceSlugs, postSlugs] = await Promise.all([
    sanityFetch<string[]>({ query: allPageSlugsQuery, tags: ["page"] }),
    sanityFetch<string[]>({ query: allServiceSlugsQuery, tags: ["service"] }),
    sanityFetch<string[]>({ query: allPostSlugsQuery, tags: ["post"] }),
  ]);

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/servizi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/professionisti`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/chi-siamo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/contatti`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/servizi/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postPages = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const dynamicPages = pageSlugs
    .filter((slug) => slug !== "home" && slug !== "chi-siamo")
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticPages, ...servicePages, ...postPages, ...dynamicPages];
}
