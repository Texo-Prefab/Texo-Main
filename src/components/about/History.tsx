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

export default function History() {
  return (
    <section className="relative bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden py-0">

     

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-150 rounded-full bg-[#886c46]/6 blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[85vh]">

        {/* ── LEFT: Image ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 h-[50vh] overflow-hidden flex justify-center items-center"
        >
          <Image
            src="/products-hero.png"
            alt="Texo Prefab history"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-white/30 lg:to-[#faf8f4]/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#886c46]/50 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#886c46]/50 pointer-events-none" />

          {/* Floating year badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 left-8"
          >
            <div className="bg-black/40 backdrop-blur-md border border-[#886c46]/40 rounded-2xl px-6 py-4">
              <p className={`${playfair.className} text-3xl font-bold text-[#a8926d] leading-none`}>2006</p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-white/60 font-medium mt-1">Est. Hyderabad</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Text ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 flex items-center px-8 md:px-14 lg:px-16 py-20 lg:py-0"
        >

          <div className="max-w-lg w-full">

            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[#886c46]" />
              <span className={`${cormorant.className} text-[0.65rem] tracking-[0.3em] uppercase text-[#886c46] font-medium`}>
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`${playfair.className} text-4xl md:text-5xl font-semibold leading-[1.08] mb-2`}
            >
              <span className="text-black">Eighteen Years of</span>
              <br />
              <span className="bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
                Building India.
              </span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="h-px w-12 bg-[#886c46]/40 mb-8 origin-left"
            />

            {/* Body paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <p className={`${cormorant.className} text-zinc-500 text-lg font-light leading-[1.85]`}>
                At Texo Prefab World, we don’t just construct spaces—we craft smart, scalable environments that adapt to how you live, work, and grow. With 7+ years of expertise, our ISO 9001:2025-certified studio based in Hyderabad delivers precision-engineered prefab structures for both luxury living and large-scale industrial use.
              </p>
              <p className={`${cormorant.className} text-zinc-500 text-lg font-light leading-[1.85]`}>
               From signature A-Frame homes and sleek cottages to high-performance control rooms, warehouses, and container offices, our modular systems are built for speed, sustainability, and standout design. Whether you’re envisioning a minimalist getaway or a functional operations hub, Texo’s plug-and-play approach redefines how space is imagined—crafted to move with you and built to last.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/30 to-transparent" />

    </section>
  );
}