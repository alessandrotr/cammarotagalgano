import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-blue-dark mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-blue-dark mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-blue-dark mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-6 my-6 italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-orange hover:text-orange-dark underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-blue-dark">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-text-secondary">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={500}
            className="rounded-lg w-full"
          />
          {value.alt && (
            <figcaption className="text-sm text-text-light mt-2 text-center">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextBlock[];
  className?: string;
}

export default function PortableTextRenderer({
  value,
  className,
}: PortableTextRendererProps) {
  if (!value) return null;
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
