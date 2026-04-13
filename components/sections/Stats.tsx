"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { StatsSection } from "@/types/sanity";

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-5xl sm:text-6xl font-bold"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Stats({
  heading,
  stats,
  backgroundColor = "navy",
}: StatsSection) {
  if (!stats?.length) return null;

  const bg = backgroundColor === "cream" ? "cream" : backgroundColor === "white" ? "white" : "navy";
  const isNavy = bg === "navy";

  return (
    <SectionWrapper background={bg}>
      {heading && (
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${
            isNavy ? "text-white" : "text-blue-dark"
          }`}
        >
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={isNavy ? "text-white" : "text-orange"}>
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
            </div>
            <p
              className={`mt-2 text-sm sm:text-base font-medium ${
                isNavy ? "text-gray-300" : "text-text-secondary"
              }`}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
