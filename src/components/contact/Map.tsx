"use client";

import { motion } from "framer-motion";
import { Merriweather, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const GOOGLE_MAPS_EMBED =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.4497597202917!2d78.45042250000002!3d17.5222345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f032d62a9b9%3A0x91d4d57891508253!2sTexo%20Prefab%20World%20%7C%20Prefab%20Homes%20%7C%20Porta%20Cabins%20%7C%20Farmhouse%20%26%20Office%20Containers!5e1!3m2!1sen!2sin!4v1773656131570!5m2!1sen!2sin";

export default function Map() {
  return (
    <section className={`${merri.className} relative bg-black overflow-hidden`}>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-150 h-100 rounded-full bg-[#886c46]/8 blur-[120px] z-0" />

      {/* Top border accent */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-0 border-x border-b border-white/8">

        

        {/* ── RIGHT: Embedded map ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 lg:pl-10 flex flex-col gap-0"
        >
          {/* Map frame */}
          <div className="relative w-full h-105 lg:h-full min-h-105 overflow-hidden border border-white/10">

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#886c46] z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#886c46] z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#886c46] z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#886c46] z-20 pointer-events-none" />

            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0) contrast(1.1) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Texo Prefab World Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom tagline bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className={`${playfair.className} text-xs italic text-[#886c46]/60`}>
            Rooted in India. Ready for the world.
          </p>
          <p className="text-[10px] font-light text-white/25 tracking-widest uppercase">
            Texo Prefab World · Hyderabad
          </p>
        </div>
      </div>

    </section>
  );
}