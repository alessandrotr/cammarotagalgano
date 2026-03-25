export const allServicesQuery = `*[_type == "service"] | order(order asc){
  _id,
  name,
  slug,
  shortDescription,
  icon,
  image
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  shortDescription,
  description,
  icon,
  image
}`;

export const allServiceSlugsQuery = `*[_type == "service" && defined(slug.current)].slug.current`;
