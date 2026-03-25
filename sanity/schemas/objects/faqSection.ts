import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqSection",
  title: "Sezione FAQ",
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
      name: "faqs",
      title: "Domande",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "FAQ", subtitle: "Sezione FAQ" };
    },
  },
});
