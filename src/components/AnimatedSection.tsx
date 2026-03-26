"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type Variant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "fadeDown";

const variants: Record<Variant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
