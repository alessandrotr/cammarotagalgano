import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Professionista",
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
      name: "role",
      title: "Ruolo",
      type: "string",
      description: "Es: Dottore Commercialista, Revisore Legale",
    }),
    defineField({
      name: "bio",
      title: "Biografia",
      type: "blockContent",
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "specializations",
      title: "Specializzazioni",
      type: "array",
      of: [{ type: "string" }],
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
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
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
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
