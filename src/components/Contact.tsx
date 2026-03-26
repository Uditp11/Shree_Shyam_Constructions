"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-[var(--color-offwhite)] bg-industrial relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <AnimatedSection variant="fadeLeft">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder={t("contact.form.name")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                  <input
                    type="tel"
                    placeholder={t("contact.form.phone")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder={t("contact.form.message")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-[var(--color-electric)] text-white font-semibold text-base hover:bg-[var(--color-electric-dark)] transition-colors shadow-lg shadow-blue-500/20"
                >
                  {t("contact.form.submit")}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info + Map */}
          <AnimatedSection variant="fadeRight">
            <div className="space-y-6">
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--color-electric)]/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center group-hover:bg-[var(--color-electric)] transition-colors">
                    <FaPhoneAlt className="text-[var(--color-electric)] group-hover:text-white transition-colors text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">{t("contact.info.phone")}</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)]">+91 999 999 9999</p>
                  </div>
                </a>

                <a
                  href="mailto:info@shreeshyam.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--color-electric)]/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center group-hover:bg-[var(--color-electric)] transition-colors">
                    <FaEnvelope className="text-[var(--color-electric)] group-hover:text-white transition-colors text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">{t("contact.info.email")}</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)]">info@shreeshyam.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[var(--color-electric)] text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">{t("contact.info.address")}</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)]">{t("contact.info.addressValue")}</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <FaWhatsapp className="text-green-500 group-hover:text-white transition-colors text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">WhatsApp</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)]">Chat with us</p>
                  </div>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-56 md:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v0"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
