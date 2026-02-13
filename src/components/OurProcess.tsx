// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Merriweather, Playfair_Display } from 'next/font/google'
// import { ArrowRight } from 'lucide-react'

// const merri = Merriweather({
//   subsets: ['latin'],
//   weight: ['300', '400', '700'],
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
// })

// const processes = [
//   {
//     step: '01',
//     title: 'Consultation & Planning',
//     description:
//       'We begin by understanding your site, requirements, and long-term goals. Every project starts with clarity and intention.',
//     image: '/siteoffice-2.webp',
//   },
//   {
//     step: '02',
//     title: 'Design & Engineering',
//     description:
//       'Detailed architectural planning and structural engineering ensure precision before manufacturing begins.',
//     image: '/siteoffice-2.webp',
//   },
//   {
//     step: '03',
//     title: 'Precision Manufacturing',
//     description:
//       'Modules are fabricated in a controlled facility using premium materials and strict quality standards.',
//     image: '/siteoffice-2.webp',
//   },
//   {
//     step: '04',
//     title: 'Delivery & Assembly',
//     description:
//       'Efficient on-site installation ensures speed without compromising craftsmanship or structural integrity.',
//     image: '/siteoffice-2.webp',
//   },
// ]

// const OurProcess = () => {
//   return (
//     <section className="py-32">
//       <div className="mx-auto max-w-7xl px-6 md:px-12">

//         {/* Header */}
//         <div className="mb-20 max-w-screen text-center">
//           <div
            
//             className="mb-6 inline-block"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0] backdrop-blur-sm">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
//               </span>
//               WHY CHOOSE US
//             </span>
//           </div>

//           <h2 className={`${playfair.className} text-5xl md:text-6xl font-light leading-tight text-[#2a2520]`}>
//             From Vision to Reality
//             <br />
//             <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
//               In Four Refined Steps
//             </span>
//           </h2>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {processes.map((item) => (
//             <div
//               key={item.step}
//               className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
//             >
//               {/* Image */}
//               <div className="relative h-64 w-full overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/20" />
//               </div>

//               {/* Content */}
//               <div className="p-10">
//                 <span className={`${playfair.className} text-6xl text-black/10`}>
//                   {item.step}
//                 </span>

//                 <h3 className={`${playfair.className} text-2xl font-semibold text-[#2a2520] mt-4 mb-4`}>
//                   {item.title}
//                 </h3>

//                 <p className={`${merri.className} text-[#5a5248] leading-relaxed mb-6`}>
//                   {item.description}
//                 </p>

//                 <button
//                   className={`${merri.className}
//                   inline-flex items-center gap-2
//                   text-sm text-[#886c46]
//                   transition-all duration-300
//                   hover:gap-3
//                   `}
//                 >
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default OurProcess


'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'

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

const stats = [
  { value: '60%', label: 'Faster than traditional build' },
  { value: '500+', label: 'Structures delivered' },
  { value: '10yr', label: 'Structural warranty' },
  { value: '95%', label: 'Client satisfaction rate' },
]

const highlights = [
  'ISO-certified manufacturing facility',
  'In-house architectural and structural team',
  'End-to-end project management',
  'Transparent fixed-price contracts',
  'Post-handover support & maintenance',
  'Fully compliant with national building codes',
]

const OurProcess = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

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

        {/* ── BELOW-CARDS MASTERPIECE ── */}
        <BottomContent imageY={imageY} />

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


const BottomContent = ({ imageY }: { imageY: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-stretch">

      {/* LEFT — Parallax image + stat strip */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Image frame */}
        <div className="relative h-125 overflow-hidden rounded-3xl">
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <Image
              src="/siteoffice-2.webp"
              alt="Premium prefab construction"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black/30 to-transparent" />

          {/* Floating label top-left */}
          <div className="absolute left-6 top-6">
            <div className="rounded-2xl border border-white/20 bg-black/40 px-5 py-3 backdrop-blur-md">
              <p className={`${merri.className} text-[10px] uppercase tracking-widest text-white/60`}>Est.</p>
              <p className={`${playfair.className} text-2xl font-bold text-white`}>2015</p>
            </div>
          </div>

          {/* Floating stat card bottom-right */}
          <div className="absolute bottom-6 right-6">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
              <p className={`${playfair.className} text-3xl font-bold text-white`}>500+</p>
              <p className={`${merri.className} text-xs font-light text-white/70`}>Structures delivered</p>
            </div>
          </div>
        </div>

        {/* Stat strip below image */}
        <div className="mt-5 grid grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-[#886c46]/15 bg-[#f8f5f0] px-3 py-4 text-center"
            >
              <p className={`${playfair.className} text-xl font-bold text-[#886c46]`}>{s.value}</p>
              <p className={`${merri.className} mt-1 text-[10px] font-light leading-tight text-[#5a5248]`}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* RIGHT — Narrative + highlights + CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center"
      >
        {/* Eyebrow */}
        <p className={`${merri.className} mb-4 text-[10px] uppercase tracking-[0.25em] text-[#886c46]`}>
          Why our process works
        </p>

        {/* Heading */}
        <h3 className={`${playfair.className} mb-6 text-3xl font-light leading-snug text-[#2a2520] md:text-4xl`}>
          Every detail planned,
          <br />
          <span className="font-bold">nothing left to chance.</span>
        </h3>

        {/* Body copy */}
        <p className={`${merri.className} mb-10 text-[15px] font-light leading-relaxed text-[#5a5248]`}>
          Our process is more than a workflow — it{`'`}s a commitment to delivering structures 
          that outlast expectations. From the first sketch to final handover, we maintain 
          absolute transparency and precision, so you always know exactly where your project stands.
        </p>

        {/* Highlights grid */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="flex items-start gap-3 rounded-xl border border-[#886c46]/10 bg-[#f8f5f0] px-4 py-3"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#886c46]" />
              <span className={`${merri.className} text-[13px] font-light leading-snug text-[#2a2520]`}>
                {h}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`${merri.className} group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-7 py-3.5 text-sm font-light tracking-wide text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#886c46]/20`}
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`${merri.className} group inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 px-7 py-3.5 text-sm font-light text-[#886c46] transition-all hover:border-[#886c46] hover:bg-[#886c46]/5`}
          >
            View Case Studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </motion.div>

    </div>
  )
}

export default OurProcess