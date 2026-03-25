import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery } from "@/sanity/queries/page";
import SectionRenderer from "@/components/shared/SectionRenderer";
import type { Page } from "@/types/sanity";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Scopri la storia e i valori dello Studio Associato Cammarota Galgano. Dal 1992 al servizio di aziende e professionisti a Napoli.",
};

export default async function ChiSiamoPage() {
  const page = await sanityFetch<Page | null>({
    query: pageBySlugQuery,
    params: { slug: "chi-siamo" },
    tags: ["page"],
  });

  if (page?.sections?.length) {
    return <SectionRenderer sections={page.sections} />;
  }

  // Fallback
  return (
    <>
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Chi Siamo
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">
            Una storia di competenza, dedizione e risultati che dura da oltre 30 anni
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-dark mb-6">
              La Nostra Storia
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Lo <strong className="text-blue-dark">Studio Associato Cammarota Galgano</strong> nasce
                nel 1992 a Napoli, nel cuore della storica Via Toledo, con l&apos;obiettivo di offrire
                servizi professionali di eccellenza nel campo della consulenza fiscale, contabile e
                societaria.
              </p>
              <p>
                Con oltre 30 anni di esperienza, abbiamo costruito relazioni durature con i nostri
                clienti, accompagnandoli nella crescita e nello sviluppo delle loro attività con
                competenza, rigore e visione strategica.
              </p>
              <p>
                Il nostro approccio combina la tradizione professionale con l&apos;innovazione,
                garantendo soluzioni personalizzate e sempre aggiornate con l&apos;evoluzione
                normativa e fiscale.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-dark mb-6">
              I Nostri Valori
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Competenza",
                  desc: "Aggiornamento continuo e specializzazione in materia fiscale e societaria",
                },
                {
                  title: "Integrità",
                  desc: "Etica professionale e trasparenza in ogni rapporto con i clienti",
                },
                {
                  title: "Dedizione",
                  desc: "Ogni cliente riceve attenzione personalizzata e soluzioni su misura",
                },
                {
                  title: "Innovazione",
                  desc: "Strumenti moderni e approccio proattivo per anticipare le esigenze",
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-1 bg-orange rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-dark">{value.title}</h3>
                    <p className="text-text-secondary text-sm mt-1">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Stats
        _type="stats"
        _key="stats"
        stats={[
          { number: "30", suffix: "+", label: "Anni di Esperienza" },
          { number: "500", suffix: "+", label: "Clienti Assistiti" },
          { number: "3", label: "Professionisti" },
          { number: "1992", label: "Anno di Fondazione" },
        ]}
        backgroundColor="navy"
      />

      <CTA
        _type="cta"
        _key="cta"
        heading="Vuoi Conoscerci Meglio?"
        body="Vieni a trovarci nel nostro studio in Via Toledo, 424 a Napoli."
        buttonText="Contattaci"
        buttonLink="/contatti"
        backgroundColor="white"
      />
    </>
  );
}
