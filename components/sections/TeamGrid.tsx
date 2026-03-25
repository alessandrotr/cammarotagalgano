"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { urlFor } from "@/sanity/lib/image";
import type { TeamGridSection } from "@/types/sanity";

export default function TeamGrid({
  heading,
  subheading,
  members,
}: TeamGridSection) {
  if (!members?.length) return null;

  return (
    <SectionWrapper>
      {(heading || subheading) && (
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-dark">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
              {member.photo ? (
                <Image
                  src={urlFor(member.photo).width(400).height(530).url()}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-blue-light flex items-center justify-center">
                  <span className="text-6xl text-white/50 font-bold">
                    {member.name?.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                {member.specializations && (
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs bg-orange/90 text-white px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-dark">{member.name}</h3>
            {member.role && (
              <p className="text-orange font-medium mt-1">{member.role}</p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
