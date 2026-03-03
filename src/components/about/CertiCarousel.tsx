"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2025",
    subtitle: "Quality Management System",
    image: "/products-hero.png",
    issuer: "Bureau Veritas",
    year: "2025",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    image: "/products-hero.png",
    issuer: "DNV GL",
    year: "2023",
  },
  {
    id: 3,
    title: "OHSAS 18001",
    subtitle: "Occupational Health & Safety",
    image: "/products-hero.png",
    issuer: "TÜV SÜD",
    year: "2022",
  },
  {
    id: 4,
    title: "CE Marking",
    subtitle: "European Conformity Standard",
    image: "/products-hero.png",
    issuer: "SGS Group",
    year: "2024",
  },
  {
    id: 5,
    title: "BIS Certification",
    subtitle: "Bureau of Indian Standards",
    image: "/products-hero.png",
    issuer: "BIS India",
    year: "2021",
  },
];

export default function CertiCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((prev) => (prev + dir + certificates.length) % certificates.length);
    },
    []
  );

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => paginate(1), 4000);
    return () => clearInterval(t);
  }, [autoplay, paginate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  // Visible indices: prev, active, next
  const prev = (active - 1 + certificates.length) % certificates.length;
  const next = (active + 1) % certificates.length;

  return (
    <section className="relative py-28 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden px-6 md:px-12">

      

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full bg-[#886c46]/6 blur-[140px] pointer-events-none" />

      {/* Rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#886c46]" />
            <Award size={16} className="text-[#886c46]" strokeWidth={1.5} />
            <div className="h-px w-10 bg-[#886c46]" />
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold leading-[1.06] mb-5`}>
            <span className="text-black">Certified for </span>
            <span className="bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
              Excellence.
            </span>
          </h2>

          <p className={`${cormorant.className} text-zinc-500 text-lg font-light leading-[1.85]`}>
            Every certificate we hold is a promise kept — to our clients, our craft, and the industry.
            Texo{`'`}s accreditations reflect eighteen years of building to the highest international standards.
          </p>

          <div className="mt-6 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
        </motion.div>

        {/* ── Carousel ────────────────────────────────────────── */}
        <div
          className="relative flex items-center justify-center gap-4 md:gap-6"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >

          {/* Prev ghost card */}
          <motion.div
            key={`prev-${prev}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block relative w-52 h-72 rounded-2xl overflow-hidden border border-[#886c46]/15 shadow-sm cursor-pointer shrink-0 group"
            onClick={() => paginate(-1)}
            style={{ filter: "blur(1px)", transform: "scale(0.93)" }}
          >
            <Image
              src={certificates[prev].image}
              alt={certificates[prev].title}
              fill
              className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-white/50" />
          </motion.div>

          {/* Main active card */}
          <div className="relative w-full max-w-sm md:max-w-md shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-[#886c46]/25 rounded-3xl overflow-hidden shadow-xl shadow-black/8"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent z-10" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#886c46]/40 pointer-events-none z-10" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#886c46]/40 pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#886c46]/40 pointer-events-none z-10" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#886c46]/40 pointer-events-none z-10" />

                {/* Certificate image */}
                <div className="relative w-full h-80 overflow-hidden bg-[#faf8f4]">
                  <Image
                    src={certificates[active].image}
                    alt={certificates[active].title}
                    fill
                    className="object-contain p-6"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/20" />
                </div>

                {/* Card body */}
                <div className="p-7 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`${cormorant.className} text-[0.6rem] tracking-[0.28em] uppercase text-[#886c46] font-medium`}>
                        {certificates[active].issuer} · {certificates[active].year}
                      </span>
                      <h3 className={`${playfair.className} text-2xl font-semibold text-black mt-1 leading-snug`}>
                        {certificates[active].title}
                      </h3>
                      <p className={`${cormorant.className} text-zinc-400 text-sm font-light mt-0.5 tracking-wide`}>
                        {certificates[active].subtitle}
                      </p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-xl border border-[#886c46]/25 bg-[#886c46]/6 flex items-center justify-center mt-1">
                      <Award size={18} className="text-[#886c46]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next ghost card */}
          <motion.div
            key={`next-${next}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block relative w-52 h-72 rounded-2xl overflow-hidden border border-[#886c46]/15 shadow-sm cursor-pointer shrink-0 group"
            onClick={() => paginate(1)}
            style={{ filter: "blur(1px)", transform: "scale(0.93)" }}
          >
            <Image
              src={certificates[next].image}
              alt={certificates[next].title}
              fill
              className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-white/50" />
          </motion.div>

        </div>

        {/* ── Controls ────────────────────────────────────────── */}
        <div className="mt-10 flex pt-6 flex-col items-center gap-6">

          {/* Arrow buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-xl border border-[#886c46]/25 bg-white hover:bg-[#886c46] hover:border-[#886c46] text-[#886c46] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm group"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-2 bg-[#886c46]"
                      : "w-2 h-2 bg-[#886c46]/25 hover:bg-[#886c46]/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-xl border border-[#886c46]/25 bg-white hover:bg-[#886c46] hover:border-[#886c46] text-[#886c46] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Counter */}
          <p className={`${cormorant.className} text-[0.65rem] tracking-[0.28em] uppercase text-zinc-400 font-medium`}>
            {String(active + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}
          </p>

        </div>

      </div>
    </section>
  );
}