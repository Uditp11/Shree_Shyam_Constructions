"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCheck, FaFlask, FaTools, FaCoins } from "react-icons/fa";

const featureIcons = [FaShieldAlt, FaCheck, FaFlask, FaTools, FaCoins];
const featureColors = [
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-emerald-700",
  "from-purple-500 to-purple-700",
  "from-orange-500 to-orange-700",
  "from-cyan-500 to-cyan-700",
];

export default function Features() {
  const { t } = useTranslation();
  const items = t("features.items") as { title: string; description: string }[];

  return (
    <section id="features" className="section-padding bg-[var(--color-charcoal)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle title={t("features.title")} subtitle={t("features.subtitle")} light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((item, i) => {
            const Icon = featureIcons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl p-6 bg-white/5 border border-white/8 hover:border-[var(--color-electric)]/30 transition-all duration-300 h-full text-center"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${featureColors[i]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white text-xl" />
                  </div>

                  <h3
                    className="text-white font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
