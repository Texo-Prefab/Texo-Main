"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Crosshair, Sparkles } from "lucide-react";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const pillars = [
  {
    icon: Eye,
    label: "Vision",
    headline: "Driven by Vision",
    body: "Every structure begins as an idea — a clearer way to build, a smarter use of space. We start with your ambitions and engineer toward them without compromise.",
    number: "01",
  },
  {
    icon: Crosshair,
    label: "Precision",
    headline: "Delivered with Precision",
    body: "From factory floor to final bolt, tolerances are measured in millimetres. Our ISO 9001:2025-certified process ensures every module arrives flawless and on schedule.",
    number: "02",
  },
  {
    icon: Sparkles,
    label: "Impact",
    headline: "Designed for Impact",
    body: "Lasting structures leave a mark — on communities, environments, and the people who inhabit them. We design with that responsibility at the forefront.",
    number: "03",
  },
];

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden"
    >
      

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full bg-[#886c46]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-center max-w-3xl mx-auto"
        >
          <span className={`${cormorant.className} text-[0.7rem] tracking-[0.32em] uppercase text-[#886c46] font-medium`}>
            Our Philosophy
          </span>

          <h2
            className={`${playfair.className} mt-4 text-4xl md:text-6xl font-semibold leading-[1.08] bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent`}
          >
            Driven by Vision.{" "}
            <br className="hidden md:block" />
            Delivered with Precision.{" "}
            <br className="hidden md:block" />
            Designed for Impact.
          </h2>
        </motion.div>

        <div className="relative h-px max-w-2xl mx-auto mb-20 bg-[#886c46]/10 overflow-hidden">
          <motion.div
            style={{ width: lineWidth }}
            className="absolute inset-y-0 left-0 bg-linear-to-r from-transparent via-[#886c46]/60 to-transparent"
          />
        </div>

        {/* ── Pillar Cards ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.75,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-8 rounded-3xl bg-white border border-[#886c46]/20 hover:border-[#886c46]/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient fill */}
              <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl" />

              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />

              {/* Right slide accent */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500 rounded-tr-3xl rounded-br-3xl" />

              <div className="relative">
                

                {/* Icon */}
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl border border-[#886c46]/30 bg-[#886c46]/5 group-hover:bg-[#886c46]/12 transition-colors duration-300">
                  <pillar.icon
                    size={22}
                    className="text-[#886c46]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label pill */}
                <span
                  className={`${cormorant.className} inline-block mb-3 text-[0.65rem] tracking-[0.26em] uppercase text-[#886c46] font-medium border border-[#886c46]/25 bg-[#886c46]/5 px-3 py-1 rounded-full`}
                >
                  {pillar.label}
                </span>

                {/* Headline */}
                <h3
                  className={`${playfair.className} text-xl font-semibold text-black mb-4 leading-snug`}
                >
                  {pillar.headline}
                </h3>

                {/* Divider */}
                <div className="h-px w-10 bg-[#886c46]/30 mb-4 group-hover:w-16 transition-all duration-500" />

                {/* Body */}
                <p className={`${cormorant.className} text-zinc-500 text-base leading-relaxed font-light`}>
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom quote strip ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
        >
          {["18+ Years Experience", "ISO 9001:2025 Certified", "Pan-India Delivery"].map(
            (stat, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="hidden md:block h-8 w-px bg-[#886c46]/20" />
                )}
                <span
                  className={`${cormorant.className} text-sm tracking-[0.18em] uppercase text-zinc-400 font-medium`}
                >
                  {stat}
                </span>
              </div>
            )
          )}
        </motion.div>

      </div>
    </section>
  );
}