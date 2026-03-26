"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: Props) {
  return (
    <AnimatedSection className="text-center mb-12 md:mb-16">
      <h2
        className={`font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? "text-white" : "text-[var(--color-charcoal)]"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-[var(--color-electric)] rounded-full" />
      </div>
      <p
        className={`text-base md:text-lg max-w-2xl mx-auto ${
          light ? "text-[var(--color-silver)]" : "text-[var(--color-steel)]"
        }`}
      >
        {subtitle}
      </p>
    </AnimatedSection>
  );
}
