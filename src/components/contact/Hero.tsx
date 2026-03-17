"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Merriweather, Playfair_Display } from "next/font/google";
import ProjectsPanel from "./ProjectsPanel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function Hero() {
  const [panelOpen, setPanelOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section
        className={`${merri.className} relative min-h-screen  flex items-center justify-center overflow-hidden px-6 py-24 mt-18`}
      >
        {/* ── Cinematic background ── */}
        {/* Dark grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Warm ambient glow — top left */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-150 h-150 rounded-full bg-[#886c46]/10 blur-[120px] z-0" />
        {/* Subtle glow — bottom right */}
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-125 h-125 rounded-full bg-[#886c46]/8 blur-[100px] z-0" />

        {/* Dot grid — very subtle on dark */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(136,108,70,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Parallax content wrapper */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24"
        >
          {/* ── Left: Caption ── */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#886c46]"
            >
              Our Footprint Across India
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight text-black"
            >
              States we have{" "}
              <span className={`${playfair.className} italic text-[#886c46]`}>
                served
              </span>
              ,<br />
              communities we&apos;ve{" "}
              <span className={`${playfair.className} italic text-[#886c46]`}>
                shaped.
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base font-light leading-relaxed text-black/80 max-w-md mx-auto lg:mx-0"
            >
              From the Himalayan foothills to the southern coastlines — we have
              delivered excellence, built lasting trust, and grown alongside
              communities in every corner of India.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="w-12 h-0.5 bg-[#886c46] rounded-full mx-auto lg:mx-0"
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-2 flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setPanelOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#886c46] text-white text-sm font-medium rounded-full shadow-xl shadow-[#886c46]/20 hover:bg-[#6f5838] transition-colors duration-300 group"
              >
                Explore Our Reach
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </motion.button>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`${playfair.className} text-sm italic text-[#886c46]/70 mt-1`}
            >
              Rooted in India. Ready for the world.
            </motion.p>
          </div>

          {/* ── Right: Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="shrink-0 relative flex items-center justify-center"
          >
            {/* Ambient glow rings behind map */}
            <div className="absolute w-105 h-105 rounded-full bg-[#886c46]/10 blur-3xl" />
            <div className="absolute w-80 h-80 rounded-full border border-[#886c46]/15" />
            <div className="absolute w-115 h-115 rounded-full border border-[#886c46]/8" />

            {/* Floating pin badge — glass style */}
            <div
              className="absolute top-6 right-2 lg:right-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 z-10 border border-black/15 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-[#886c46]" strokeWidth={2} />
              <span className="text-[11px] font-medium text-black/80 tracking-wide">
                Pan India
              </span>
            </div>

            {/* Clickable map */}
            <motion.button
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setPanelOpen(true)}
              className="relative z-10 group cursor-pointer focus:outline-none"
              aria-label="View our projects across India"
            >
              {/* Glow under map on hover */}
              <div className="absolute inset-0 rounded-full bg-[#886c46]/18 group-hover:bg-[#886c46]/15 blur-2xl transition-all duration-500" />

              <Image
                src="/india-map.svg"
                alt="Map of India highlighting states served"
                width={480}
                height={540}
                priority
                className="w-70 sm:w-90 lg:w-105 h-auto relative z-10"
                style={{
                  filter:
                    "drop-shadow(0 0 32px rgba(136,108,70,0.35)) drop-shadow(0 8px 24px rgba(0,0,0,0.5)) brightness(0.92) contrast(1.05)",
                }}
              />

              {/* Hover tooltip */}
              <span
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-[11px] font-medium px-3 py-1.5 rounded-full pointer-events-none border border-white/15 backdrop-blur-md text-white/90"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                View our projects →
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — matches second hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-10 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-white/60"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </section>

      <ProjectsPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </>
  );
}