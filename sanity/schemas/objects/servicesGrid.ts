import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesGrid",
  title: "Griglia Servizi",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titolo",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Sottotitolo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "services",
      title: "Servizi",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Griglia 3 colonne", value: "grid-3" },
          { title: "Griglia 2 colonne", value: "grid-2" },
          { title: "Lista", value: "list" },
        ],
      },
      initialValue: "grid-3",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Griglia Servizi", subtitle: "Sezione Servizi" };
    },
  },
});
