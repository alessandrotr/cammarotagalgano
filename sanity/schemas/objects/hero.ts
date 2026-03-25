import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Sottotitolo",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "backgroundImage",
      title: "Immagine di Sfondo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaText",
      title: "Testo Pulsante",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Link Pulsante",
      type: "string",
    }),
    defineField({
      name: "style",
      title: "Stile",
      type: "string",
      options: {
        list: [
          { title: "Scuro", value: "dark" },
          { title: "Chiaro", value: "light" },
          { title: "Con Immagine", value: "image" },
        ],
      },
      initialValue: "dark",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Hero", subtitle: "Sezione Hero" };
    },
  },
});
