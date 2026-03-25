import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSection",
  title: "Sezione Contatti",
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
      name: "showMap",
      title: "Mostra Mappa",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "showForm",
      title: "Mostra Form",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "calendlyUrl",
      title: "URL Calendly (opzionale)",
      type: "url",
      description: "Inserisci l'URL di Calendly per permettere la prenotazione di consulenze",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Sezione Contatti", subtitle: "Contatti" };
    },
  },
});
