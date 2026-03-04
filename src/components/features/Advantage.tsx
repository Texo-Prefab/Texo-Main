"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

import {
  Plug,
  ClipboardCheck,
  Factory,
  Timer,
  Move,
  Handshake,
  Hammer,
  Recycle,
} from "lucide-react";

const advantages = [
  {
    icon: Plug,
    title: "Plug & Play Construction",
    body: "Modular units arrive fully finished, just connect and start living.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Turnkey Experience",
    body: "From design to delivery to handover, it’s all handled by Texo.",
  },
  {
    icon: Factory,
    title: "Precision-Crafted in Smart Factories",
    body: "Engineered off-site under controlled conditions for consistent quality.",
  },
  {
    icon: Timer,
    title: "Speed Meets Your Style",
    body: "Delivered 50% faster than conventional builds with aesthetics intact.",
  },
  {
    icon: Move,
    title: "Scalable. Flexible. Mobile.",
    body: "Easily relocate, expand, or reconfigure as life evolves.",
  },
  {
    icon: Handshake,
    title: "Global-Grade Partners, Local Execution",
    body: "We build with Kohler, VEKA, Kajaria, and more — quality that’s always standard.",
  },
  {
    icon: Hammer,
    title: "Built to Last. Designed to Impress.",
    body: "Robust structural integrity paired with refined architectural finishes.",
  },
  {
    icon: Recycle,
    title: "Sustainable & Reusable",
    body: "Made from recyclable materials with long-term reuse in mind.",
  },
];
export default function Advantages() {
  return (
    <section className="relative py-32 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full bg-[#886c46]/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className={`${cormorant.className} text-[0.7rem] tracking-[0.32em] uppercase text-[#886c46] font-medium`}>
            Why Choose Texo
          </span>

          <h2 className={`${playfair.className} mt-4 text-4xl md:text-6xl font-semibold leading-[1.08] bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent`}>
            The Texo Prefab Advantage
          </h2>

          <p className={`${cormorant.className} mt-5 text-zinc-500 text-lg font-light leading-relaxed`}>
            Eighteen years of refinement, distilled into eight reasons why Indias most demanding builders choose Texo — and never look back.
          </p>

          <div className="mt-6 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
        </motion.div>

        {/* ── Cards Grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.65,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white text-black p-8 rounded-lg border border-[#886c46] hover:shadow-xl hover:shadow-[#886c46]/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background fill */}
              <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/4 to-[#d7a661]/4 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent" />

              {/* Right slide accent */}
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />

              <div className="relative">
                {/* Icon + Title — exact card structure from brief */}
                <div className="flex items-start gap-4 mb-4">
                  <adv.icon
                    className="text-[#886c46] shrink-0"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h2 className={`${playfair.className} text-base font-semibold leading-snug`}>
                    {adv.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="h-px w-8 bg-[#886c46]/30 mb-4 group-hover:w-14 transition-all duration-500" />

                {/* Body */}
                <p className={` text-black text-md  leading-relaxed`}>
                  {adv.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}