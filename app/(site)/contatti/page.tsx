import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Associato Cammarota Galgano a Napoli. Richiedi una consulenza fiscale, contabile o societaria.",
};

export default function ContattiPage() {
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
      />
    </>
  );
}
