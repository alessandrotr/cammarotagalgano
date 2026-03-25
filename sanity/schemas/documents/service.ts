import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Servizio",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Descrizione Breve",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "description",
      title: "Descrizione Completa",
      type: "blockContent",
    }),
    defineField({
      name: "icon",
      title: "Icona",
      type: "string",
      description: "Nome icona (es: calculator, scale, briefcase, users, shield)",
      options: {
        list: [
          { title: "Calcolatrice", value: "calculator" },
          { title: "Bilancia", value: "scale" },
          { title: "Valigetta", value: "briefcase" },
          { title: "Utenti", value: "users" },
          { title: "Scudo", value: "shield" },
          { title: "Grafico", value: "chart" },
          { title: "Documento", value: "document" },
          { title: "Edificio", value: "building" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: { hotspot: true },
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
    select: { title: "name", subtitle: "shortDescription" },
  },
});
