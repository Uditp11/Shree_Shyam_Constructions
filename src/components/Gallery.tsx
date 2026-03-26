"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import SectionTitle from "./SectionTitle";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, category: "industrial", color: "from-blue-800 to-blue-950", label: "Industrial Epoxy Floor" },
  { id: 2, category: "commercial", color: "from-emerald-800 to-emerald-950", label: "Commercial Showroom" },
  { id: 3, category: "residential", color: "from-purple-800 to-purple-950", label: "Metallic Floor Design" },
  { id: 4, category: "industrial", color: "from-slate-700 to-slate-900", label: "Warehouse Flooring" },
  { id: 5, category: "commercial", color: "from-cyan-800 to-cyan-950", label: "Car Parking Floor" },
  { id: 6, category: "residential", color: "from-amber-800 to-amber-950", label: "3D Floor Art" },
  { id: 7, category: "industrial", color: "from-zinc-700 to-zinc-900", label: "Factory Floor Coating" },
  { id: 8, category: "commercial", color: "from-indigo-800 to-indigo-950", label: "Office Flake Floor" },
  { id: 9, category: "residential", color: "from-rose-800 to-rose-950", label: "Italian Style Floor" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ["all", "industrial", "commercial", "residential"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="section-padding bg-[var(--color-offwhite)] bg-industrial relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("gallery.title")} subtitle={t("gallery.subtitle")} />

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-[var(--color-charcoal)] text-white shadow-lg"
                  : "bg-white text-[var(--color-steel)] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t(`gallery.filters.${f}`)}
            </button>
          ))}
        </AnimatedSection>

        {/* Image grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project.id)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 bg-dots opacity-20" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <p className="text-white font-medium text-sm">{project.label}</p>
                      <p className="text-white/60 text-xs capitalize mt-1">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[11px] capitalize">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-3xl w-full aspect-video rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const p = projects.find((x) => x.id === selectedProject);
                  return (
                    <div className={`absolute inset-0 bg-gradient-to-br ${p?.color}`}>
                      <div className="absolute inset-0 bg-grid opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            {p?.label}
                          </p>
                          <p className="text-white/60 capitalize mt-2">{p?.category}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
