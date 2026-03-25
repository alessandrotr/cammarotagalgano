import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Articolo Blog",
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
      name: "author",
      title: "Autore",
      type: "reference",
      to: [{ type: "teamMember" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Data Pubblicazione",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Estratto",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "mainImage",
      title: "Immagine Principale",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Testo alternativo",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categorie",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Fiscale", value: "fiscale" },
          { title: "Tributario", value: "tributario" },
          { title: "Societario", value: "societario" },
          { title: "Contabile", value: "contabile" },
          { title: "Lavoro", value: "lavoro" },
          { title: "Novità Normative", value: "normative" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Contenuto",
      type: "blockContent",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage", title: "Open Graph Image", type: "image" }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Data Pubblicazione",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `di ${author}` : "",
        media,
      };
    },
  },
});
