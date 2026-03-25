"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { TestimonialsSection } from "@/types/sanity";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-orange" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  heading,
  testimonials,
  style = "carousel",
}: TestimonialsSection) {
  const [current, setCurrent] = useState(0);

  if (!testimonials?.length) return null;

  if (style === "grid") {
    return (
      <SectionWrapper background="white">
        {heading && (
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-dark text-center mb-16">
            {heading}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-cream rounded-xl p-8 relative"
            >
              <svg
                className="absolute top-4 right-4 w-10 h-10 text-orange/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              {t.rating && <StarRating rating={t.rating} />}
              <p className="mt-4 text-text-secondary italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-semibold text-blue-dark">{t.name}</p>
                {t.company && (
                  <p className="text-sm text-text-light">{t.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  // Carousel
  const testimonial = testimonials[current];

  return (
    <SectionWrapper background="blue">
      {heading && (
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          {heading}
        </h2>
      )}
      <div className="max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              className="w-12 h-12 text-orange mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            {testimonial.rating && (
              <div className="flex justify-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
            )}
            <p className="text-xl text-gray-200 italic leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-white text-lg">
                {testimonial.name}
              </p>
              {testimonial.company && (
                <p className="text-gray-400">{testimonial.company}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-orange w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
