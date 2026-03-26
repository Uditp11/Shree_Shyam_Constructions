"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "whyEpoxy", href: "#features" },
  { key: "academy", href: "#training" },
  { key: "gallery", href: "#gallery" },
  { key: "process", href: "#process" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, language, toggleLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-electric)] to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-blue-500/30 transition-shadow">
              <span className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                S
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white text-sm font-bold tracking-wide leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                SHREE SHYAM
              </p>
              <p className="text-[var(--color-silver)] text-[10px] tracking-[0.2em] uppercase">
                Constructions
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all hover:bg-white/5"
            >
              {language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
            </button>

            {/* CTA */}
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:flex items-center px-5 py-2 rounded-full bg-[var(--color-electric)] text-white text-sm font-semibold hover:bg-[var(--color-electric-dark)] transition-colors shadow-md shadow-blue-500/20"
            >
              {t("nav.getQuote")}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 glass-dark"
          >
            <div className="flex flex-col items-center gap-2 pt-8 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-center py-3 text-white text-lg hover:bg-white/5 rounded-xl transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full py-3 rounded-full bg-[var(--color-electric)] text-white font-semibold text-lg shadow-lg"
              >
                {t("nav.getQuote")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
