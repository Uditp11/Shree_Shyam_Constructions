"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";

export default function TrainingAcademy() {
  const { t } = useTranslation();
  const points = t("training.points") as string[];

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="training" className="section-padding bg-[var(--color-offwhite)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-industrial" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image area */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-charcoal)]">
              {/* Gradient placeholder for training image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[#2a2d32] to-[var(--color-steel)]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaGraduationCap className="text-6xl md:text-7xl text-[var(--color-gold)] mx-auto mb-4" />
                    <p className="text-white/60 text-sm tracking-widest uppercase">
                      Training Academy
                    </p>
                  </div>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)]" />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection variant="fadeRight">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 mb-6">
                <FaGraduationCap className="text-[var(--color-gold)] text-sm" />
                <span className="text-[var(--color-gold)] text-xs font-semibold tracking-wider uppercase">
                  {t("training.subtitle")}
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("training.title")}
              </h2>

              <p className="text-[var(--color-steel)] text-base md:text-lg mb-6 leading-relaxed">
                {t("training.description")}
              </p>

              {/* Points */}
              <ul className="space-y-3 mb-8">
                {points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-[var(--color-gold)] text-lg mt-0.5 shrink-0" />
                    <span className="text-[var(--color-charcoal)] text-sm md:text-base">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(212,168,67,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleScroll}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-white font-semibold text-base shadow-lg"
              >
                {t("training.cta")}
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
