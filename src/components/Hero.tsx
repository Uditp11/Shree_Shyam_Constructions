"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  const { t } = useTranslation();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-700/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-80 md:h-80 bg-cyan-500/6 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/3 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 text-xs md:text-sm tracking-wider uppercase">
            SHREE SHYAM CONSTRUCTIONS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("hero.headline")}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-cyan-400">
            {t("hero.headlineSub")}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.6 }}
          className="text-[var(--color-silver)] text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.subheading")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,123,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#contact")}
            className="px-8 py-4 rounded-full bg-[var(--color-electric)] text-white font-semibold text-base md:text-lg shadow-lg shadow-blue-500/25 hover:bg-[var(--color-electric-dark)] transition-colors flex items-center gap-2"
          >
            {t("hero.getQuote")}
            <HiArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#services")}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base md:text-lg hover:border-white/40 transition-all"
          >
            {t("hero.viewServices")}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
