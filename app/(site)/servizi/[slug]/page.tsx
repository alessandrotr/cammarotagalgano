import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { serviceBySlugQuery, allServiceSlugsQuery } from "@/sanity/queries/services";
import type { Service } from "@/types/sanity";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: allServiceSlugsQuery,
    tags: ["service"],
  });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await sanityFetch<Service | null>({
    query: serviceBySlugQuery,
    params: { slug },
    tags: ["service"],
  });

  return {
    title: service?.name || "Servizio",
    description: service?.shortDescription || "",
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await sanityFetch<Service | null>({
    query: serviceBySlugQuery,
    params: { slug },
    tags: ["service"],
  });

  if (!service) notFound();

  return (
    <>
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-medium mb-2">Servizi</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {service.name}
          </h1>
          {service.shortDescription && (
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              {service.shortDescription}
            </p>
          )}
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          {service.description && (
            <PortableTextRenderer value={service.description} />
          )}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-blue-dark mb-4">
              Hai bisogno di questo servizio?
            </h3>
            <Button href="/contatti" variant="primary" size="lg">
              Richiedi una Consulenza
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
