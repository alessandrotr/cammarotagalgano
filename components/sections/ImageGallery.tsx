"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { urlFor } from "@/sanity/lib/image";
import type { ImageGallerySection } from "@/types/sanity";

export default function ImageGallery({
  heading,
  images,
  layout = "grid",
}: ImageGallerySection) {
  if (!images?.length) return null;

  return (
    <SectionWrapper>
      {heading && (
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-dark text-center mb-16">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group"
          >
            <Image
              src={urlFor(image).width(600).height(450).url()}
              alt={image.alt || image.caption || ""}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-blue-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </motion.figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
