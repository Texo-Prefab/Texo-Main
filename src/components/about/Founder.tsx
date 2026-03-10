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

const founders = [
  {
    role: "Chief Executive Officer & Director",
    roleShort: "CEO",
    name: "Faiz Ahmed",
    image: "/products-hero.png",
    side: "left",
    message:
      "With 30+ years leading top-tier operations across India, GCC, and Europe, Faiz Ahmed is the visionary propelling Texo Prefab World forward. A seasoned executive in the portable and prefab space, he builds powerhouse teams and delivers standout projects fast. His mission? Set new standards in prefab by combining unmatched speed, premium quality, and personalized service. At Texo, he doesn’t just meet expectations he redefines them.",
    signature: "Faiz Ahmed",
  },
  {
    role: "Managing Partner",
    roleShort: "MP",
    name: "Mohammad ZaheerUddin",
    image: "/products-hero.png",
    side: "right",
    message:
      "With 15+ years of hands-on prefab expertise, Mohammad Zaheer Uddin is the operational engine of Texo Prefab World. Known for sharp execution, he leads a 25+ member team, delivering projects that consistently exceed client expectations. Rooted in precision, innovation, and service-first thinking, Mohammad ensures Texo delivers quality that speaks for itself on time, every time.",
    signature: "Mohammad ZaheerUddin",
  },
];

export default function Founders() {
  return (
    <section className="relative py-28 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden px-6 md:px-12">

      

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 rounded-full bg-[#886c46]/5 blur-[140px] pointer-events-none" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#886c46]" />
            <span className={`${cormorant.className} text-[0.65rem] tracking-[0.32em] uppercase text-[#886c46] font-medium`}>
              The People Behind Texo
            </span>
            <div className="h-px w-10 bg-[#886c46]" />
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold leading-[1.06] mb-5`}>
            <span className="text-black">Visionaries Who </span>
            <span className="bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
              Built It From Zero.
            </span>
          </h2>

          <p className={`${cormorant.className} text-black text-lg font-light leading-[1.85]`}>
            Texo was not built by capital alone — it was built by conviction. Meet the two founders whose decisions, values, and relentless standards shaped every module we have ever made.
          </p>

          <div className="mt-6 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
        </motion.div>

        {/* ── Founder Cards ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Profile Image Card */}
              <div className="relative w-48 h-56 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/10" />
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-[#886c46]/8 transition-all duration-500 p-8">

                {/* Name — Hero */}
                <h3 className={`${playfair.className} text-3xl font-semibold text-black leading-tight mb-1 text-center`}>
                  {founder.name}
                </h3>

                {/* Role — Subtle */}
                <p className={`${cormorant.className} text-sm tracking-[0.15em] uppercase text-[#886c46] font-medium mb-6 text-center`}>
                  {founder.role}
                </p>

                {/* Subtle divider */}
                <div className="h-px w-12 bg-[#886c46]/20 mb-6 mx-auto" />

                {/* Message — Primary Focus */}
                <blockquote className={` text-black leading-relaxed mb-8 text-center`}>
                  {founder.message}
                </blockquote>

                {/* Signature */}
                <div className="pt-6 border-t border-[#886c46]/10 text-center">
                  <p className={`${playfair.className} text-base font-semibold text-black`}>
                    {founder.signature}
                  </p>
                  <p className={`${cormorant.className} text-[0.7rem] tracking-[0.2em] uppercase text-zinc-400 font-medium mt-1`}>
                    {founder.roleShort} · Texo Prefab World
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}