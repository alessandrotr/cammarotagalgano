import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  title: "Call to Action",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Testo",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "buttonText",
      title: "Testo Pulsante",
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Link Pulsante",
      type: "string",
    }),
    defineField({
      name: "backgroundColor",
      title: "Colore Sfondo",
      type: "string",
      options: {
        list: [
          { title: "Blu Scuro", value: "navy" },
          { title: "Arancione", value: "orange" },
          { title: "Bianco", value: "white" },
        ],
      },
      initialValue: "navy",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Call to Action", subtitle: "Sezione CTA" };
    },
  },
});
