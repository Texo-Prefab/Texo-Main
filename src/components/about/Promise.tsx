"use client";

import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export default function Promise() {
 return (
    <div className="relative h-screen overflow-hidden">

  {/* Background image — full bleed */}
  <Image
    src="/products-hero.png"
    alt="Our Promise"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55 z-1" />


  {/* Top rule */}
  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/60 to-transparent z-3" />
  {/* Bottom rule */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent z-3" />

  {/* Side accents */}
  <div className="absolute top-0 left-12 bottom-0 w-px bg-linear-to-b from-transparent via-[#886c46]/15 to-transparent pointer-events-none hidden md:block z-3" />
  <div className="absolute top-0 right-12 bottom-0 w-px bg-linear-to-b from-transparent via-[#886c46]/15 to-transparent pointer-events-none hidden md:block z-3" />

  {/* Corner accents */}
  <div className="absolute top-6 left-6 md:left-12 w-8 h-8 border-t border-l border-[#886c46]/50 pointer-events-none z-3" />
  <div className="absolute top-6 right-6 md:right-12 w-8 h-8 border-t border-r border-[#886c46]/50 pointer-events-none z-3" />
  <div className="absolute bottom-6 left-6 md:left-12 w-8 h-8 border-b border-l border-[#886c46]/50 pointer-events-none z-3" />
  <div className="absolute bottom-6 right-6 md:right-12 w-8 h-8 border-b border-r border-[#886c46]/50 pointer-events-none z-3" />

  {/* Gold glow center */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full bg-[#886c46]/12 blur-[100px] pointer-events-none z-2" />

  {/* Content — same structure: flex-col, centered, text-center */}
  <div className="relative z-4 h-full flex flex-col justify-center items-center text-center px-6 py-12 gap-8">

    {/* Overline */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4"
    >
      <div className="h-px w-10 bg-[#886c46]" />
      <span className="text-[0.6rem] tracking-[0.32em] uppercase text-[#886c46] font-medium">
        Our Commitment
      </span>
      <div className="h-px w-10 bg-[#886c46]" />
    </motion.div>

    {/* Headline */}
    <motion.h2
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${playfair.className} text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-linear-to-r from-white via-[#a8926d] to-white bg-clip-text max-w-xl leading-[0.95] tracking-tight`}
    >
      OUR PROMISE
    </motion.h2>

    {/* Decorative divider */}
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, delay: 0.3 }}
      className="flex items-center gap-4"
    >
      <div className="h-px w-16 bg-linear-to-r from-transparent to-[#886c46]/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#886c46] shadow-[0_0_10px_rgba(136,108,70,0.8)]" />
      <div className="h-px w-16 bg-linear-to-l from-transparent to-[#886c46]/60" />
    </motion.div>

    {/* Body copy */}
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className={`${cormorant.className} max-w-3xl text-white/65 text-xl font-light leading-[1.9]`}
    >
      At TEXO PREFAB WORLD, our promise is simple — to deliver structures that stand strong,
      age beautifully, and exceed expectations. Every modular farmhouse, A-frame cabin, and
      custom-built space we create is engineered with precision, built using high-quality
      materials, and designed for long-term durability. We commit to transparent processes,
      timely delivery, and uncompromising craftsmanship, ensuring that what we build for you
      is not just a structure, but a space you can truly rely on for years to come.
    </motion.p>

  </div>
</div>
 )   
}