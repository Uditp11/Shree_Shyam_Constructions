"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const serviceKeys = [
  "Industrial Flooring",
  "Car Parking Flooring",
  "Metallic Flooring",
  "3D Flooring",
  "Waterproofing",
  "Flake Flooring",
];

const quickLinks = [
  { label: "home", href: "#hero" },
  { label: "services", href: "#services" },
  { label: "whyEpoxy", href: "#features" },
  { label: "academy", href: "#training" },
  { label: "gallery", href: "#gallery" },
  { label: "contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-charcoal)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-electric)] to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>S</span>
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  SHREE SHYAM
                </p>
                <p className="text-[var(--color-silver)] text-[10px] tracking-[0.2em] uppercase">
                  Constructions
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              {t("footer.about")}
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-electric)] transition-colors group"
                >
                  <s.icon className="text-white/50 group-hover:text-white text-xs transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-[var(--color-electric)] text-sm transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {t(`nav.${link.label}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("footer.ourServices")}
            </h4>
            <ul className="space-y-2.5">
              {serviceKeys.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-white/50 hover:text-[var(--color-electric)] text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--color-electric)] text-xs shrink-0" />
                <a href="tel:+919999999999" className="text-white/50 text-sm hover:text-white transition-colors">
                  +91 999 999 9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-electric)] text-xs shrink-0" />
                <a href="mailto:info@shreeshyam.com" className="text-white/50 text-sm hover:text-white transition-colors">
                  info@shreeshyam.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-electric)] text-xs shrink-0 mt-1" />
                <span className="text-white/50 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 text-center">
          <p className="text-white/30 text-xs">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
