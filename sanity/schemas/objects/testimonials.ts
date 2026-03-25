import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonianze",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonianze",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    defineField({
      name: "style",
      title: "Stile",
      type: "string",
      options: {
        list: [
          { title: "Carosello", value: "carousel" },
          { title: "Griglia", value: "grid" },
        ],
      },
      initialValue: "carousel",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Testimonianze", subtitle: "Sezione Testimonianze" };
    },
  },
});
