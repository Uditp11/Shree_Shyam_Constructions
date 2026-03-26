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

        {/* ========== MOBILE: Clean stacked cards (< 768px) ========== */}
        <div className="md:hidden flex flex-col gap-5">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.12}>
                <div className="relative bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-[var(--color-electric)]/30 transition-colors">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-1 w-7 h-7 rounded-full bg-[var(--color-electric)] flex items-center justify-center shadow-md shadow-blue-500/30">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    {/* Icon */}
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-electric)] to-cyan-500 flex items-center justify-center shadow-md">
                      <Icon className="text-white text-base" />
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base font-bold text-white mb-1.5"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ========== DESKTOP: Alternating timeline (≥ 768px) ========== */}
        <div className="hidden md:block relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-electric)] via-blue-400 to-cyan-400" />

          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            const isLeft = i % 2 === 0;

            return (
              <AnimatedSection
                key={i}
                variant={isLeft ? "fadeRight" : "fadeLeft"}
                delay={i * 0.15}
                className="mb-14 last:mb-0"
              >
                <div className={`flex items-start ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-white/5 border border-white/8 rounded-xl p-6 hover:border-[var(--color-electric)]/30 transition-colors">
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
                  <div className="shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-electric)] to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Icon className="text-white text-lg" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-electric)] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
