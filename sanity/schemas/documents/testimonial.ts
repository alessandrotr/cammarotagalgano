import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonianza",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Azienda",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Citazione",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Valutazione",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
      options: {
        list: [1, 2, 3, 4, 5],
      },
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "photo",
    },
  },
});
