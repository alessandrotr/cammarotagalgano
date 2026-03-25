import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allTeamQuery } from "@/sanity/queries/team";
import { urlFor } from "@/sanity/lib/image";
import type { TeamMember } from "@/types/sanity";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

export const metadata: Metadata = {
  title: "Professionisti",
  description:
    "Il team dello Studio Associato Cammarota Galgano: professionisti esperti in materia fiscale, contabile e societaria.",
};

export default async function ProfessionistiPage() {
  const team = await sanityFetch<TeamMember[]>({
    query: allTeamQuery,
    tags: ["teamMember"],
  });

  return (
    <>
      <section className="bg-blue-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            I Nostri Professionisti
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Un team di esperti dedicato alla tua crescita professionale e aziendale
          </p>
        </div>
      </section>

      <SectionWrapper>
        {team.length > 0 ? (
          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={member._id}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(400).height(530).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-light flex items-center justify-center">
                        <span className="text-6xl text-white/50 font-bold">
                          {member.name?.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-blue-dark">
                    {member.name}
                  </h2>
                  {member.role && (
                    <p className="text-orange font-medium text-lg mt-1">
                      {member.role}
                    </p>
                  )}
                  {member.specializations && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="text-sm bg-cream text-blue-dark px-3 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                  {member.bio && (
                    <div className="mt-4">
                      <PortableTextRenderer value={member.bio} />
                    </div>
                  )}
                  <div className="flex gap-4 mt-6">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-orange hover:text-orange-dark transition-colors"
                      >
                        {member.email}
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-orange hover:text-orange-dark transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">
              I profili dei professionisti saranno disponibili a breve.
            </p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
