"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "navy" | "blue";
  noPadding?: boolean;
  id?: string;
}

const bgMap = {
  white: "bg-white",
  cream: "bg-cream",
  navy: "bg-blue-dark text-text-on-dark",
  blue: "bg-blue text-text-on-dark",
};

export default function SectionWrapper({
  children,
  className,
  background = "white",
  noPadding = false,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        bgMap[background],
        !noPadding && "py-20 md:py-28",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
