"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";
import type { FaqSectionType } from "@/types/sanity";

export default function FAQ({ heading, subheading, faqs }: FaqSectionType) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs?.length) return null;

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

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
            >
              <span className="font-semibold text-blue-dark pr-4">
                {faq.question}
              </span>
              <span
                className={`text-orange text-2xl font-light transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <PortableTextRenderer value={faq.answer} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
