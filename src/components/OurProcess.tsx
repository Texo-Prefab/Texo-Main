'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const processes = [
  {
    step: '01',
    title: 'Consultation & Planning',
    description: 'We begin by understanding your site, requirements, and long-term goals. Every project starts with clarity.',
    image: '/siteoffice-2.webp',
    accent: 'from-[#886c46] to-[#6f5838]',
  },
  {
    step: '02',
    title: 'Design & Engineering',
    description: 'Detailed architectural planning and structural engineering ensure precision before manufacturing begins.',
    image: '/siteoffice-2.webp',
    accent: 'from-black to-[#2a2520]',
  },
  {
    step: '03',
    title: 'Precision Manufacturing',
    description: 'Modules are fabricated in a controlled facility using premium materials and strict quality standards.',
    image: '/siteoffice-2.webp',
    accent: 'from-[#886c46] to-[#a8926d]',
  },
  {
    step: '04',
    title: 'Delivery & Assembly',
    description: 'Efficient on-site installation ensures speed without compromising craftsmanship or structural integrity.',
    image: '/siteoffice-2.webp',
    accent: 'from-black to-[#886c46]',
  },
]



const OurProcess = () => {
  const sectionRef = useRef(null)
  

  return (
    <section ref={sectionRef} className="relative bg-white py-28 overflow-hidden">

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(#886c46 1px, transparent 1px), linear-gradient(90deg, #886c46 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ── SECTION HEADER ── */}
        <SectionHeader />

        {/* ── CRISP 4-COLUMN CARDS ── */}
        <ProcessCards />


      </div>
    </section>
  )
}


/* ─────────────────────────────────────
   SECTION HEADER
───────────────────────────────────── */
const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
    >
      <div>
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46]/5 px-4 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#886c46]" />
          </span>
          <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] text-[#886c46]`}>
            How We Work
          </span>
        </div>

        <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-[#2a2520]`}>
          From Vision to Reality
          <br />
          <span className="font-bold text-[#886c46]">In Four Steps</span>
        </h2>
      </div>

      {/* Right side blurb */}
      <p className={`${merri.className} max-w-sm text-sm font-light leading-relaxed text-[#5a5248] md:text-right`}>
        A refined workflow built on transparency, precision, and an obsessive commitment to quality at every stage.
      </p>
    </motion.div>
  )
}


const ProcessCards = () => {
  return (
    <div className="mb-28 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {processes.map((item, index) => (
        <ProcessCard key={item.step} item={item} index={index} />
      ))}
    </div>
  )
}

const ProcessCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1"
    >
      {/* Connector line desktop */}
      {index < processes.length - 1 && (
        <div className="absolute -right-2.5 top-16 z-10 hidden h-px w-5 bg-[#886c46]/30 lg:block" />
      )}

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

        {/* Step pill */}
        <div className={`absolute bottom-4 left-4 rounded-full bg-linear-to-r ${item.accent} px-3 py-1 shadow-md`}>
          <span className={`${playfair.className} text-xs font-semibold tracking-wider text-white`}>
            {item.step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${playfair.className} mb-3 text-lg font-semibold leading-snug text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
          {item.title}
        </h3>

        <p className={`${merri.className} flex-1 text-[13px] font-light leading-relaxed text-[#5a5248]`}>
          {item.description}
        </p>

        {/* CTA Link */}
        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
          <span className={`${merri.className} text-[10px] uppercase tracking-[0.15em] text-black/30`}>
            Learn more
          </span>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#886c46]/10 text-[#886c46] transition-all duration-300 group-hover:bg-[#886c46] group-hover:text-white"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: index * 0.12 + 0.4 }}
        className={`h-1 origin-left bg-linear-to-r ${item.accent}`}
      />
    </motion.div>
  )
}


export default OurProcess