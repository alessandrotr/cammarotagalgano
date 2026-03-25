import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamGrid",
  title: "Griglia Team",
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
      name: "members",
      title: "Professionisti",
      type: "array",
      of: [{ type: "reference", to: [{ type: "teamMember" }] }],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Team", subtitle: "Sezione Team" };
    },
  },
});
