"use client";

import { useState, useRef } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const PHONE = "+91-7014550073";
const PHONE_TEL = "tel:+917014550073";
const EMAIL = "shreeshyamconstructions671@gmail.com";
const WHATSAPP = "https://wa.me/917014550073";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic validation
    const formData = new FormData(formRef.current);
    const name = formData.get("from_name") as string;
    const phone = formData.get("phone") as string;
    if (!name?.trim() || !phone?.trim()) return;

    setSending(true);
    setError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[var(--color-offwhite)] bg-industrial relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <AnimatedSection variant="fadeLeft">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {/* Success message */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-green-50 border border-green-200"
                >
                  <FaCheckCircle className="text-green-500 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">
                    Thank you! Your quote request has been sent successfully. We&#39;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-red-50 border border-red-200"
                >
                  <p className="text-red-700 text-sm font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </motion.div>
              )}

              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                {/* Honeypot (spam prevention) */}
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder={t("contact.form.name")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="reply_to"
                    placeholder={t("contact.form.email")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t("contact.form.phone")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder={t("contact.form.message")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-electric)] focus:ring-2 focus:ring-blue-500/10 transition-all text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={sending ? {} : { scale: 1.02 }}
                  whileTap={sending ? {} : { scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-blue-500/20 transition-colors ${
                    sending
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[var(--color-electric)] text-white hover:bg-[var(--color-electric-dark)]"
                  }`}
                >
                  {sending ? "Sending..." : t("contact.form.submit")}
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
                  href={PHONE_TEL}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--color-electric)]/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center group-hover:bg-[var(--color-electric)] transition-colors">
                    <FaPhoneAlt className="text-[var(--color-electric)] group-hover:text-white transition-colors text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">{t("contact.info.phone")}</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)]">{PHONE}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--color-electric)]/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-electric)]/10 flex items-center justify-center group-hover:bg-[var(--color-electric)] transition-colors">
                    <FaEnvelope className="text-[var(--color-electric)] group-hover:text-white transition-colors text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-steel)]">{t("contact.info.email")}</p>
                    <p className="text-sm font-semibold text-[var(--color-charcoal)] break-all">{EMAIL}</p>
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
                  href={WHATSAPP}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.4627969256809!2d75.8810905757064!3d25.208240508400365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b0016d4315d%3A0x79553a787c00ecbd!2sShree%20Shyam%20Constructions!5e0!3m2!1sen!2sde!4v1774562695341!5m2!1sen!2sde"
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
