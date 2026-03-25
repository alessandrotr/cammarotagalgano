export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories,
  author->{ name, photo }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories,
  body,
  author->{ name, role, photo },
  seo
}`;

export const allPostSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;
