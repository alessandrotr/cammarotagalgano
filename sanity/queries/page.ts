export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  seo,
  sections[]{
    _type,
    _key,
    ...,
    _type == "servicesGrid" => {
      ...,
      services[]->{ _id, name, slug, shortDescription, icon, image }
    },
    _type == "teamGrid" => {
      ...,
      members[]->{ _id, name, slug, role, photo, specializations }
    },
    _type == "faqSection" => {
      ...,
      faqs[]->{ _id, question, answer, category }
    }
  }
}`;

export const allPageSlugsQuery = `*[_type == "page" && defined(slug.current)].slug.current`;
