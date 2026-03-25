import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageGallery",
  title: "Galleria Immagini",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Immagini",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Didascalia",
            },
            {
              name: "alt",
              type: "string",
              title: "Testo alternativo",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Griglia", value: "grid" },
          { title: "Carosello", value: "carousel" },
        ],
      },
      initialValue: "grid",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Galleria Immagini", subtitle: "Sezione Galleria" };
    },
  },
});
