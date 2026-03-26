import type { Metadata } from "next";
import type { SiteSettings } from "@/types/sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/queries/settings";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Associato Cammarota Galgano a Napoli. Richiedi una consulenza fiscale, contabile o societaria.",
};

export default async function ContattiPage() {
  const settings = await sanityFetch<SiteSettings>({
    query: settingsQuery,
    tags: ["siteSettings"],
  });

  return (
    <>
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Contattaci
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Siamo a disposizione per una consulenza personalizzata. Compila il form o contattaci direttamente.
          </p>
        </div>
      </section>

      <ContactSection
        _type="contactSection"
        _key="contact"
        heading=""
        showMap={true}
        showForm={true}
        sitePhone={settings?.phone}
        siteEmail={settings?.email}
        siteAddress={settings?.address}
        sitePec={settings?.pec}
      />
    </>
  );
}
