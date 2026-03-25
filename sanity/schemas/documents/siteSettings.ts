import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Impostazioni Sito",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome del Sito",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrizione del Sito",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoDark",
      title: "Logo (versione chiara per sfondo scuro)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefono",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Indirizzo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "pec",
      title: "PEC",
      type: "string",
    }),
    defineField({
      name: "partitaIva",
      title: "Partita IVA",
      type: "string",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Numero WhatsApp",
      type: "string",
      description: "Formato internazionale, es: +393XXXXXXXXX",
    }),
    defineField({
      name: "googleMapsEmbed",
      title: "Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Piattaforma",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter/X", value: "twitter" },
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seoDefaults",
      title: "SEO Default",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
