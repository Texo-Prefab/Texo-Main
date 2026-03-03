"use client";

import { motion } from "framer-motion";
import { Cog, LayoutGrid, Shield, Rocket, Leaf } from "lucide-react";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const features = [
  {
    icon: Cog,
    label: "Engineering",
    headline: "Precision Engineering",
    body: "CNC and robotic fabrication ensures <1 mm tolerance for consistent, high-quality builds with 30% fewer on-site errors.",
    stat: "<1mm",
    statLabel: "Tolerance",
  },
  {
    icon: LayoutGrid,
    label: "Scalability",
    headline: "Modular Scalability",
    body: "Plug-and-play modular design allows seamless expansion, relocation, or reassembly — completed in under 24 hours.",
    stat: "24h",
    statLabel: "Reassembly",
  },
  {
    icon: Shield,
    label: "Materials",
    headline: "Smart Material Usage",
    body: "Galvanized steel and R-25 insulation deliver 25+ years durability and withstand wind loads up to 150 km/h.",
    stat: "25+",
    statLabel: "Years Life",
  },
  {
    icon: Rocket,
    label: "Deployment",
    headline: "Rapid Deployment",
    body: "80% off-site manufacturing slashes project timelines, enabling setup and delivery in record time.",
    stat: "80%",
    statLabel: "Off-Site Built",
  },
  {
    icon: Leaf,
    label: "Sustainability",
    headline: "Eco-Conscious Design",
    body: "Thermally optimized builds reduce material waste and cut energy consumption by up to 30%.",
    stat: "30%",
    statLabel: "Energy Saved",
  },
];

export default function KeyFeatures() {
  return (
    <section className="relative py-32 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-150 rounded-full bg-[#886c46]/5 blur-[120px] pointer-events-none" />

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
            What Sets Us Apart
          </span>
          <h2 className={`${playfair.className} mt-4 text-4xl md:text-6xl font-semibold leading-[1.08] bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent`}>
            Built-In Advantages,<br className="hidden md:block" /> By Design.
          </h2>
          <div className="mt-6 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
        </motion.div>

        {/* ── Main Layout ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* ── Left: Big Image ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15 min-h-140"
          >
            <Image
              src="/products-hero.png"
              alt="Texo Prefab Key Features"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-black/10 to-transparent" />

            {/* Top accent */}
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#886c46]/60 to-transparent" />

            {/* Floating badge bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-[#886c46] shadow-[0_0_8px_rgba(136,108,70,0.8)]">
                  <div className="w-2 h-2 rounded-full bg-[#886c46] animate-ping opacity-60" />
                </div>
                <span className={`${cormorant.className} text-white/90 text-sm tracking-[0.15em] uppercase font-medium`}>
                  ISO 9001:2025 Certified
                </span>
              </div>
              <p className={`${cormorant.className} mt-3 text-white/60 text-base font-light leading-relaxed`}>
                18+ years of engineering excellence, delivering precision-built modular structures across India.
              </p>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#886c46]/50 pointer-events-none" />
            <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#886c46]/50 pointer-events-none" />
            <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-[#886c46]/50 pointer-events-none" />
            <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#886c46]/50 pointer-events-none" />
          </motion.div>

          {/* ── Right: Feature Cards ─────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.headline}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex items-start gap-5 p-5 rounded-2xl bg-white border border-[#886c46]/15 hover:border-[#886c46]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/4 to-[#d7a661]/4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />

                {/* Right slide accent */}
                <div className="absolute top-0 right-0 w-0.5 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500 rounded-tr-2xl rounded-br-2xl" />

                {/* Icon */}
                <div className="relative shrink-0 w-11 h-11 flex items-center justify-center rounded-xl border border-[#886c46]/25 bg-[#886c46]/6 group-hover:bg-[#886c46]/14 transition-colors duration-300 mt-0.5 p-2">
                  <feature.icon size={19} className="text-[#886c46]" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <span className={`${cormorant.className} text-[0.6rem] tracking-[0.24em] uppercase text-[#886c46] font-medium`}>
                        {feature.label}
                      </span>
                      <h3 className={`${playfair.className} text-sm font-semibold text-black leading-snug`}>
                        {feature.headline}
                      </h3>
                    </div>
                    {/* Stat pill */}
                    <div className="shrink-0 text-right">
                      <span className={`${playfair.className} text-lg font-bold text-[#886c46] leading-none`}>
                        {feature.stat}
                      </span>
                      <p className={`${cormorant.className} text-[0.6rem] tracking-[0.16em] uppercase text-zinc-400 font-medium`}>
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="h-px w-8 bg-[#886c46]/25 mb-2 group-hover:w-14 transition-all duration-500" />
                  <p className={`${cormorant.className} text-zinc-500 text-[0.92rem] leading-relaxed font-light`}>
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}