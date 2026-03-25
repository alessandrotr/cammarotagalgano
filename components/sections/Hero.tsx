"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { urlFor } from "@/sanity/lib/image";
import type { HeroSection } from "@/types/sanity";
import { cn } from "@/lib/utils";

export default function Hero({
  heading,
  subheading,
  backgroundImage,
  ctaText,
  ctaLink,
  style = "dark",
}: HeroSection) {
  const isDark = style === "dark" || style === "image";

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        style === "dark" && "bg-blue-dark",
        style === "light" && "bg-cream"
      )}
    >
      {backgroundImage && (style === "image" || style === "dark") && (
        <>
          <Image
            src={urlFor(backgroundImage).width(1920).quality(85).url()}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-dark/75" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight",
            isDark ? "text-white" : "text-blue-dark"
          )}
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={cn(
              "mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed",
              isDark ? "text-gray-300" : "text-text-secondary"
            )}
          >
            {subheading}
          </motion.p>
        )}

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <Button
              href={ctaLink}
              variant="primary"
              size="lg"
            >
              {ctaText}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={cn(
            "w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2",
            isDark ? "border-white/40" : "border-blue-dark/40"
          )}
        >
          <div
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              isDark ? "bg-white/60" : "bg-blue-dark/60"
            )}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
