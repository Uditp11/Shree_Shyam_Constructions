"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function CallToAction() {
  const { t } = useTranslation();

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-electric)] via-blue-600 to-blue-800" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-xl" />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <AnimatedSection variant="scaleIn">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("cta.headline")}
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            {t("cta.subheading")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+919999999999"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-white text-[var(--color-electric)] font-bold text-base shadow-xl flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <FaPhoneAlt />
              {t("cta.callNow")}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleScroll}
              className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              {t("cta.getQuote")}
              <HiArrowRight />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
