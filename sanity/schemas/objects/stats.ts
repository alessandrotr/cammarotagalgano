import { defineField, defineType } from "sanity";

export default defineType({
  name: "stats",
  title: "Statistiche",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Statistiche",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Numero",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Etichetta",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "suffix",
              title: "Suffisso",
              type: "string",
              description: "Es: +, %, ecc.",
            }),
          ],
          preview: {
            select: { title: "number", subtitle: "label" },
            prepare({ title, subtitle }) {
              return { title: `${title} — ${subtitle}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "backgroundColor",
      title: "Colore Sfondo",
      type: "string",
      options: {
        list: [
          { title: "Blu Scuro", value: "navy" },
          { title: "Bianco", value: "white" },
          { title: "Crema", value: "cream" },
        ],
      },
      initialValue: "navy",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Statistiche", subtitle: "Sezione Statistiche" };
    },
  },
});
