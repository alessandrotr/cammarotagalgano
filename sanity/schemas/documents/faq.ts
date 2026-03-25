import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Domanda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Risposta",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Generale", value: "generale" },
          { title: "Fiscale", value: "fiscale" },
          { title: "Societario", value: "societario" },
          { title: "Contabile", value: "contabile" },
          { title: "Lavoro", value: "lavoro" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Ordine",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordine",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
