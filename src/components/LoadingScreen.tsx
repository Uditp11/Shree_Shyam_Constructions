"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-charcoal)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated logo / brand mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-electric)] to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <span className="text-white text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                S
              </span>
            </div>
            {/* Spinning ring */}
            <motion.div
              className="absolute -inset-3 rounded-2xl border-2 border-[var(--color-electric)] opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Company name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-xl md:text-2xl font-bold tracking-wider mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SHREE SHYAM CONSTRUCTIONS
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[var(--color-silver)] text-sm tracking-[0.3em] uppercase"
          >
            Building Excellence
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-electric)] to-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
