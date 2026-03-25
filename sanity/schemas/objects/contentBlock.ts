import { defineField, defineType } from "sanity";

export default defineType({
  name: "contentBlock",
  title: "Blocco Contenuto",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Contenuto",
      type: "blockContent",
    }),
    defineField({
      name: "alignment",
      title: "Allineamento",
      type: "string",
      options: {
        list: [
          { title: "Sinistra", value: "left" },
          { title: "Centro", value: "center" },
          { title: "Destra", value: "right" },
        ],
      },
      initialValue: "left",
    }),
    defineField({
      name: "backgroundColor",
      title: "Colore Sfondo",
      type: "string",
      options: {
        list: [
          { title: "Bianco", value: "white" },
          { title: "Crema", value: "cream" },
          { title: "Blu Scuro", value: "navy" },
        ],
      },
      initialValue: "white",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Blocco Contenuto", subtitle: "Sezione Contenuto" };
    },
  },
});
