import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pagina",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
        }),
        defineField({ name: "ogImage", title: "Open Graph Image", type: "image" }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sezioni",
      type: "array",
      of: [
        { type: "hero" },
        { type: "contentBlock" },
        { type: "servicesGrid" },
        { type: "imageGallery" },
        { type: "testimonials" },
        { type: "cta" },
        { type: "contactSection" },
        { type: "faqSection" },
        { type: "teamGrid" },
        { type: "stats" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug || ""}`,
      };
    },
  },
});
