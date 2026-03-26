"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import {
  FaIndustry,
  FaPaintBrush,
  FaCar,
  FaPuzzlePiece,
  FaNewspaper,
  FaTint,
  FaGem,
  FaMagic,
  FaCube,
} from "react-icons/fa";

const icons = [
  FaIndustry,
  FaPaintBrush,
  FaCar,
  FaPuzzlePiece,
  FaNewspaper,
  FaTint,
  FaGem,
  FaMagic,
  FaCube,
];

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items") as { title: string; description: string }[];

  return (
    <section id="services" className="section-padding bg-[var(--color-offwhite)] bg-industrial relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("services.title")} subtitle={t("services.subtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.08} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,123,255,0.1)" }}
                  className="group relative glass-card rounded-2xl p-6 md:p-7 cursor-pointer transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/50 to-transparent" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-electric)] to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-charcoal)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-electric)] transition-colors duration-300">
                      <Icon className="text-white text-lg" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-electric)] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-steel)] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-2 text-[var(--color-electric)] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn more</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
