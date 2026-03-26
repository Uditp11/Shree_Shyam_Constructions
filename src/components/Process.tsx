"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import { FaClipboardCheck, FaCogs, FaPaintRoller, FaStar } from "react-icons/fa";

const stepIcons = [FaClipboardCheck, FaCogs, FaPaintRoller, FaStar];

export default function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps") as { title: string; description: string }[];

  return (
    <section id="process" className="section-padding bg-[var(--color-charcoal)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <SectionTitle title={t("process.title")} subtitle={t("process.subtitle")} light />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-electric)] via-blue-400 to-cyan-400 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-electric)] via-blue-400 to-cyan-400 md:hidden" />

          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            const isLeft = i % 2 === 0;

            return (
              <AnimatedSection
                key={i}
                variant={isLeft ? "fadeRight" : "fadeLeft"}
                delay={i * 0.15}
                className="mb-10 md:mb-14 last:mb-0"
              >
                <div className={`flex items-start gap-5 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white/5 border border-white/8 rounded-xl p-5 md:p-6 hover:border-[var(--color-electric)]/30 transition-colors">
                      <h3
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="shrink-0 relative z-10 -ml-0.5 md:ml-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-electric)] to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Icon className="text-white text-lg" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-electric)] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
