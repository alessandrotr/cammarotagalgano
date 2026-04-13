import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postBySlugQuery, allPostSlugsQuery } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/sanity";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: allPostSlugsQuery,
    tags: ["post"],
  });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["post"],
  });

  return {
    title: post?.seo?.metaTitle || post?.title || "Articolo",
    description: post?.seo?.metaDescription || post?.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["post"],
  });

  if (!post) notFound();

  return (
    <>
      <section className="bg-blue-dark pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="text-orange hover:text-orange-light text-sm mb-4 inline-flex items-center gap-1"
          >
            ← Torna alle News
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-6 text-gray-300">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.photo && (
                  <Image
                    src={urlFor(post.author.photo).width(40).height(40).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm">{post.author.name}</span>
              </div>
            )}
            <span className="text-sm">
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      {post.mainImage && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8">
          <Image
            src={urlFor(post.mainImage).width(900).height(450).url()}
            alt={post.mainImage.alt || post.title}
            width={900}
            height={450}
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>
      )}

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {post.body && <PortableTextRenderer value={post.body} />}
      </article>
    </>
  );
}
