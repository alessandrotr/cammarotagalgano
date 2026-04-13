import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import type { CtaSection } from "@/types/sanity";

export default function CTA({
  heading,
  body,
  buttonText,
  buttonLink,
  backgroundColor = "navy",
}: CtaSection) {
  const bg = backgroundColor === "dark" ? "navy" : backgroundColor === "white" ? "cream" : "navy";
  const isLight = backgroundColor === "white";

  return (
    <SectionWrapper background={bg}>
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${
            isLight ? "text-blue-dark" : "text-white"
          }`}
        >
          {heading}
        </h2>
        {body && (
          <p
            className={`mt-4 text-lg ${
              isLight ? "text-text-secondary" : "text-gray-300"
            }`}
          >
            {body}
          </p>
        )}
        {buttonText && buttonLink && (
          <div className="mt-8">
            <Button
              href={buttonLink}
              variant={isLight ? "primary" : "outline-light"}
              size="lg"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
