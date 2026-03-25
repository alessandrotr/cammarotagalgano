import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsQuery } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/sanity";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli, approfondimenti e novità fiscali dallo Studio Associato Cammarota Galgano.",
};

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({
    query: allPostsQuery,
    tags: ["post"],
  });

  return (
    <>
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Blog & Risorse
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Approfondimenti, novità fiscali e guide utili per aziende e professionisti
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {post.mainImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-text-light mb-3">
                      <time>{formatDate(post.publishedAt)}</time>
                      {post.categories?.[0] && (
                        <>
                          <span>·</span>
                          <span className="text-orange capitalize">
                            {post.categories[0]}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-blue-dark group-hover:text-orange transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 text-text-secondary text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {post.author && (
                      <p className="mt-4 text-sm text-text-light">
                        di {post.author.name}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                Gli articoli saranno disponibili a breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
