import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allServicesQuery } from "@/sanity/queries/services";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/types/sanity";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "I servizi dello Studio Associato Cammarota Galgano: consulenza fiscale, contabilità, consulenza societaria, revisione legale e consulenza del lavoro.",
};

export default async function ServiziPage() {
  const services = await sanityFetch<Service[]>({
    query: allServicesQuery,
    tags: ["service"],
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            I Nostri Servizi
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Offriamo soluzioni professionali complete per aziende, professionisti e privati
          </p>
        </div>
      </section>

      <SectionWrapper>
        {services.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service._id}
                href={`/servizi/${service.slug.current}`}
                className="group flex flex-col bg-cream rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(service.image).width(600).height(300).url()}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex-1">
                  <h2 className="text-2xl font-bold text-blue-dark group-hover:text-orange transition-colors">
                    {service.name}
                  </h2>
                  {service.shortDescription && (
                    <p className="mt-3 text-text-secondary leading-relaxed">
                      {service.shortDescription}
                    </p>
                  )}
                  <span className="inline-flex items-center mt-4 text-sm font-semibold text-orange">
                    Scopri di più →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">
              I servizi saranno disponibili a breve.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="navy">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Non trovi quello che cerchi?
          </h2>
          <p className="mt-4 text-gray-300">
            Contattaci per discutere le tue esigenze specifiche
          </p>
          <div className="mt-8">
            <Button href="/contatti" variant="primary" size="lg">
              Contattaci
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
