export const settingsQuery = `*[_type == "siteSettings"][0]{
  title,
  description,
  logo,
  logoDark,
  email,
  phone,
  address,
  pec,
  partitaIva,
  whatsappNumber,
  googleMapsEmbed,
  socialLinks[],
  seoDefaults
}`;
