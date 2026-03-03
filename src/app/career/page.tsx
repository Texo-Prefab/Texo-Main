"use client";

import React, { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MapPin, Briefcase, ChevronRight, Building2 } from "lucide-react";
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

const openings = [
  {
    title: "Junior Accountant",
    department: "Finance",
    location: "Hyderabad",
    type: "Full-Time",
    description:
      "We are seeking a Junior Accountant to join our finance team. The ideal candidate will support financial operations and ensure the accuracy of financial records.",
    responsibilities: [
      "Assist in day-to-day accounting tasks.",
      "Maintain financial records and documents.",
      "Reconcile bank statements and accounts.",
      "Assist in month-end and year-end financial reports.",
    ],
    requirements: [
      "Bachelor's degree in Accounting or Finance.",
      "Strong attention to detail and organizational skills.",
      "Proficiency in accounting software (e.g., QuickBooks).",
      "Excellent communication skills.",
    ],
  },
  {
    title: "Junior Accountant",
    department: "Finance",
    location: "Hyderabad",
    type: "Full-Time",
    description:
      "We are seeking a Junior Accountant to join our finance team. The ideal candidate will support financial operations and ensure the accuracy of financial records.",
    responsibilities: [
      "Assist in day-to-day accounting tasks.",
      "Maintain financial records and documents.",
      "Reconcile bank statements and accounts.",
      "Assist in month-end and year-end financial reports.",
    ],
    requirements: [
      "Bachelor's degree in Accounting or Finance.",
      "Strong attention to detail and organizational skills.",
      "Proficiency in accounting software (e.g., QuickBooks).",
      "Excellent communication skills.",
    ],
  },
];

export default function CareerPage() {
  const [phrase, cyclePhrase] = useCycle(
    "Shape Tomorrow",
    "Design the Future",
    "Build the Future",
    "Launch with Us"
  );

  useEffect(() => {
    const id = setInterval(() => cyclePhrase(), 4000);
    return () => clearInterval(id);
  }, [cyclePhrase]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO (UI/UX marvel) ─────────────────────────────────────────── */}
      <section className="relative w-full h-screen bg-linear-to-br from-[#0d0b08] to-[#1a1814] overflow-hidden pt-22">
        {/* animated blobs */}
        <Image src={'/products-hero.png'} alt="img" fill className="relative object-cover"/>
        <div className="h-full w-full absolute bg-black/40"/>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-0 left-0 w-72 h-72 bg-[#886c46]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#886c46]/10 rounded-full blur-3xl"
        />

        {/* center interactive text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            key={phrase}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text`}
          >
            {phrase}
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`${cormorant.className} mt-4 text-lg text-white/70 max-w-xl`}
          >
            Break the mold with us—no boring overlay text, just a fluid experience.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 bg-[#886c46] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#7a5d3a] transition"
          >
            Explore Openings
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </section>

      {/* ── OPENINGS ────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-[#886c46]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <span className={`${cormorant.className} text-[0.7rem] tracking-[0.32em] uppercase text-[#886c46] font-medium`}>
              Current Openings
            </span>
            <h2 className={`${playfair.className} mt-3 text-3xl md:text-4xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent`}>
              Open Positions
            </h2>
            <div className="mt-5 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border border-[#886c46]/20 hover:border-[#886c46]/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#886c46]/8 transition-all duration-400"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/3 to-[#d7a661]/3 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl" />

                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />

                <div className="absolute top-0 right-0 w-0.5 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />

                <div className="relative p-8">

                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${cormorant.className} text-[0.6rem] tracking-[0.24em] uppercase text-[#886c46] font-medium border border-[#886c46]/25 bg-[#886c46]/6 px-3 py-1 rounded-full`}>
                          {job.department}
                        </span>
                        <span className={`${cormorant.className} text-[0.6rem] tracking-[0.2em] uppercase text-zinc-400 font-medium border border-zinc-200 bg-zinc-50 px-3 py-1 rounded-full`}>
                          {job.type}
                        </span>
                      </div>
                      <h3 className={`${playfair.className} text-2xl font-semibold text-black leading-snug`}>
                        {job.title}
                      </h3>
                    </div>
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border border-[#886c46]/25 bg-[#886c46]/6 group-hover:bg-[#886c46]/14 transition-colors duration-300 mt-1">
                      <Briefcase size={20} className="text-[#886c46]" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-5">
                    <MapPin size={13} className="text-[#886c46]" strokeWidth={1.5} />
                    <span className={`${cormorant.className} text-sm text-zinc-500 font-medium`}>{job.location}</span>
                  </div>

                  <div className="h-px w-10 bg-[#886c46]/25 mb-5 group-hover:w-16 transition-all duration-500" />

                  <p className={`${cormorant.className} text-zinc-500 text-[0.97rem] font-light leading-relaxed mb-6`}>
                    {job.description}
                  </p>

                  <div className="mb-5">
                    <h4 className={`${playfair.className} text-sm font-semibold text-black mb-3 flex items-center gap-2`}>
                      <span className="w-1 h-4 rounded-full bg-[#886c46] inline-block" />
                      Roles & Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((r, j) => (
                        <li key={j} className={`${cormorant.className} flex items-start gap-2.5 text-[0.95rem] text-zinc-500 font-light leading-relaxed`}>
                          <ChevronRight size={13} className="text-[#886c46] mt-1 shrink-0" strokeWidth={2} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className={`${playfair.className} text-sm font-semibold text-black mb-3 flex items-center gap-2`}>
                      <span className="w-1 h-4 rounded-full bg-[#886c46] inline-block" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((r, j) => (
                        <li key={j} className={`${cormorant.className} flex items-start gap-2.5 text-[0.95rem] text-zinc-500 font-light leading-relaxed`}>
                          <ChevronRight size={13} className="text-[#886c46] mt-1 shrink-0" strokeWidth={2} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="mailto:careers@texoprefab.com"
                    className="group/btn relative inline-flex items-center gap-3 bg-[#886c46] hover:bg-[#7a5d3a] text-white px-7 py-3.5 rounded-xl transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg hover:shadow-[#886c46]/25"
                  >
                    <span className={`${cormorant.className} text-sm tracking-[0.14em] uppercase font-medium relative z-10`}>
                      Apply Now
                    </span>
                    <ChevronRight size={15} className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={2} />
                    <div className="absolute inset-0 bg-linear-to-r from-[#7a5d3a] to-[#886c46] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 border border-[#886c46]/20 bg-[#886c46]/4 rounded-2xl px-8 py-5">
              <Building2 size={18} className="text-[#886c46]" strokeWidth={1.5} />
              <p className={`${cormorant.className} text-zinc-500 text-base font-light`}>
                Don{`'`}t see a role that fits?{" "}
                <a href="mailto:careers@texoprefab.com" className="text-[#886c46] font-medium hover:underline underline-offset-2">
                  Send us your resume
                </a>{" "}
                — we{`'`}re always looking for exceptional people.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}