import SectionWrapper from "@/components/ui/SectionWrapper";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";
import type { ContentBlockSection } from "@/types/sanity";
import { cn } from "@/lib/utils";

export default function ContentBlock({
  heading,
  body,
  alignment = "left",
  backgroundColor = "white",
}: ContentBlockSection) {
  const bgMap: Record<string, "white" | "cream" | "navy"> = {
    white: "white",
    cream: "cream",
    navy: "navy",
  };

  const isNavy = backgroundColor === "navy";

  return (
    <SectionWrapper background={bgMap[backgroundColor] || "white"}>
      <div
        className={cn(
          "max-w-4xl",
          alignment === "center" && "mx-auto text-center",
          alignment === "right" && "ml-auto text-right",
          alignment === "left" && "mr-auto"
        )}
      >
        {heading && (
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold mb-8",
              isNavy ? "text-white" : "text-blue-dark"
            )}
          >
            {heading}
          </h2>
        )}
        {body && (
          <PortableTextRenderer
            value={body}
            className={cn(
              "prose prose-lg max-w-none",
              isNavy && "[&_p]:text-gray-300 [&_strong]:text-white"
            )}
          />
        )}
      </div>
    </SectionWrapper>
  );
}
