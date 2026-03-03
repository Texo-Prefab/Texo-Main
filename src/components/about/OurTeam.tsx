"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function OurTeam() {
  return (
    <section className="relative py-28 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden px-6 md:px-12">

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-[#886c46]/6 blur-[140px] pointer-events-none" />

      {/* Rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#886c46]" />
              <span className={`${cormorant.className} text-[0.65rem] tracking-[0.32em] uppercase text-[#886c46] font-medium`}>
                The People Behind Every Build
              </span>
            </div>

            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.06]`}>
              <span className="text-black">One Team.</span>
              <br />
              <span className="bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
                One Standard.
              </span>
            </h2>
          </motion.div>

          {/* Right — para */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pb-2"
          >
            <div className="h-px w-10 bg-[#886c46]/30 mb-5 hidden lg:block" />
            <p className={`${cormorant.className} text-zinc-500 text-lg font-light leading-[1.9] mb-4`}>
              Behind every precision-cut panel, every on-time delivery, and every client who moves in ahead of schedule — there is a team that refuses to cut corners. At Texo, our people are our product.
            </p>
            <p className={`${cormorant.className} text-zinc-400 text-base font-light leading-[1.85]`}>
              Engineers, fabricators, logistics specialists, and client partners — united by a single obsession: building things that last. We hire for character, train for craft, and measure ourselves by the structures we leave behind.
            </p>
          </motion.div>

        </div>

        {/* ── Group Image ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl overflow-hidden border h-screen border-[#886c46]/15 shadow-2xl shadow-black/8 "
        >
          {/* Corner accents */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-[#886c46]/50 pointer-events-none z-10" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-[#886c46]/50 pointer-events-none z-10" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-[#886c46]/50 pointer-events-none z-10" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-[#886c46]/50 pointer-events-none z-10" />

          {/* Top rule on image */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent z-10" />

          {/* Image */}
          <div className="relative h-full overflow-hidden">
            <Image
              src="/products-hero.png"
              alt="Texo Prefab team"
              fill
              priority
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/10" />
          </div>

          {/* Floating caption bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="flex items-center gap-3 bg-black/35 backdrop-blur-md border border-[#886c46]/35 rounded-full px-6 py-3 whitespace-nowrap z-99">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
              </span>
              <span className={`${cormorant.className} text-[0.65rem] tracking-[0.25em] uppercase text-white/80 font-medium`}>
                Team Texo · Hyderabad, India
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* ── Bottom stat strip ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { v: "80+", l: "Team Members" },
            { v: "12+", l: "Specialisations" },
            { v: "18+", l: "Years Together" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              {i > 0 && <div className="hidden md:block h-6 w-px bg-[#886c46]/20" />}
              <div className="text-center">
                <p className={`${playfair.className} text-2xl font-bold text-[#886c46] leading-none mb-1`}>{s.v}</p>
                <p className={`${cormorant.className} text-[0.6rem] tracking-[0.22em] uppercase text-zinc-400 font-medium`}>{s.l}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}