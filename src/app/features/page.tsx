'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  ArrowUpRight,
  Plus,
  CheckCircle2,
} from 'lucide-react'
import PlugnPlay from '@/components/features/PlugnPlay'
import Image from 'next/image'
import Vision from '@/components/features/Vision'
import KeyFeatures from '@/components/features/KeyFeatures'
import Advantages from '@/components/features/Advantage'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})







const process = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Site visit or detailed brief. We understand your exact requirements, timeline, and budget constraints.',
  },
  {
    step: '02',
    title: 'Design & Quote',
    desc: 'Custom layout drawings, material spec, and a detailed quote delivered within 48 hours.',
  },
  {
    step: '03',
    title: 'Manufacturing',
    desc: 'Factory-controlled production with real-time updates. Quality checks at every milestone.',
  },
  {
    step: '04',
    title: 'Installation',
    desc: 'Our crew delivers, installs, and commissions your structure. You receive keys — not worries.',
  },
]

const certs = ['BIS Certified', 'ISO 9001', 'MSME Registered', 'Green Build Compliant']

const faqs = [
  {
    q: 'How long does it take to manufacture and deliver a prefab cabin?',
    a: 'Lead times vary by complexity: a standard portable cabin or security booth typically takes 7–14 working days from order confirmation. Larger structures like prefab schools or bunk house complexes run 3–6 weeks. Delivery is scheduled alongside manufacturing so the unit arrives site-ready without delay.',
  },
  {
    q: 'Can the structures be expanded or modified after installation?',
    a: 'Absolutely. Modular expansion is a core design principle. You can add bays, stack units vertically, extend floor plates, or upgrade interiors at any point. We maintain records of every delivered unit so our engineering team can design precise additions that integrate seamlessly.',
  },
  {
    q: 'What structural standards do your cabins comply with?',
    a: 'All structures are engineered to comply with IS 875 for wind loads, IS 1893 for seismic considerations, and NBC fire safety norms. Site offices and accommodation units also meet applicable factory and labour welfare regulations. Documentation packets are provided with every order.',
  },
  {
    q: 'Do you handle foundation work and site preparation?',
    a: 'Our turnkey packages include site survey, foundation design (PCC or anchor-bolt footings depending on soil type), delivery, installation, and commissioning. For clients who prefer to manage civil work independently, we supply detailed foundation drawings at no extra charge.',
  },
  {
    q: 'What insulation options are available?',
    a: 'We offer three primary insulation systems: PUF sandwich panels (best-in-class thermal performance, ideal for control rooms and clean rooms), mineral wool panels (fire-rated with excellent acoustic performance), and EPS-core panels (lightweight and cost-effective for temporary accommodations). Our team recommends the right system based on your climate zone and occupancy type.',
  },
  {
    q: 'Is financing or rental available for short-term projects?',
    a: 'Yes. We offer structured rental programmes for construction site offices, portable toilets, and temporary accommodation — with monthly rates and flexible return windows. For outright purchase, we work with several NBFCs to facilitate easy financing for MSMEs and large contractors alike.',
  },
  {
    q: 'Can you produce custom branded structures for commercial use?',
    a: 'Our specialised structures division handles fully branded commercial cabins — from restaurant units and retail kiosks to branded ATM enclosures and smoking rooms for hospitality chains. We manage everything from concept renders to final branded installation.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-b border-black/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group cursor-pointer"
      >
        <span className={`${playfair.className} text-[1.05rem] font-medium text-black leading-relaxed group-hover:text-[#886c46] transition-colors duration-300`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-0.5 w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#886c46] group-hover:text-[#886c46] text-black/40 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 pb-7 pr-14`}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Features = () => {
  return (
    <div className="min-h-screen bg-white ">

    {/* ── HERO ──────────────────────────────────────────────────────────────── */}
<section className="relative bg-[#0d0b08] pt-22 pb-24 px-6 md:px-12 overflow-hidden h-screen">

  <Image
    src="/products-hero.png"
    alt="Products Hero"
    fill
    priority
    className="object-cover object-center z-0"
  />

  <div className="absolute inset-0 z-1 bg-black/50" />

  

  
  {/* Top rule */}
  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent z-3" />

  {/* Vertical side accents */}
  <div className="absolute top-0 left-12 bottom-0 w-px bg-linear-to-b from-transparent via-[#886c46]/15 to-transparent pointer-events-none hidden md:block z-3" />
  <div className="absolute top-0 right-12 bottom-0 w-px bg-linear-to-b from-transparent via-[#886c46]/15 to-transparent pointer-events-none hidden md:block z-3" />

  <div className="max-w-7xl mx-auto relative mt-32 z-10">
    <div className="flex justify-center items-center text-center w-full">

      <div className="max-w-4xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className={`${merri.className} inline-flex items-center gap-2.5 rounded-full border border-[#886c46] bg-black/40 px-6 py-2.5 text-[0.65rem] font-light tracking-[0.28em] text-white uppercase backdrop-blur-sm shadow-[0_0_24px_rgba(136,108,70,0.12)]`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
            </span>
            Features
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.92] text-white mb-8 tracking-tight`}
        >
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="block"
          >
            Built Different.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="block bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent drop-shadow-[0_0_48px_rgba(136,108,70,0.2)]"
          >
            Engineered to Last.
          </motion.span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-linear-to-r from-transparent to-[#886c46]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]/70 shadow-[0_0_8px_rgba(136,108,70,0.6)]" />
          <div className="h-px w-16 bg-linear-to-l from-transparent to-[#886c46]/50" />
        </motion.div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className={`${merri.className} text-base md:text-lg font-light leading-[1.9] text-white max-w-2xl mx-auto`}
        >
          For over 18 years, we have delivered modular structures that site managers,
          contractors, and enterprise clients trust for their most demanding projects
          across India.
        </motion.p>

      </div>
    </div>
  </div>

  {/* Corner accents */}
  <div className="absolute top-16 left-6 md:left-12 w-8 h-8 border-t border-l border-[#886c46]/40 pointer-events-none z-3" />
  <div className="absolute top-16 right-6 md:right-12 w-8 h-8 border-t border-r border-[#886c46]/40 pointer-events-none z-3" />
  <div className="absolute bottom-4 left-6 md:left-12 w-8 h-8 border-b border-l border-[#886c46]/40 pointer-events-none z-3" />
  <div className="absolute bottom-4 right-6 md:right-12 w-8 h-8 border-b border-r border-[#886c46]/40 pointer-events-none z-3" />

  {/* Bottom rule */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent z-3" />
</section>

      {/* ── BRAND PILLARS ─────────────────────────────────────────────────────── */}
      <Vision />
      <KeyFeatures />
      <PlugnPlay />
      <Advantages />


      {/* ── TRUST STRIP ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0d0b08] py-14 px-6 md:px-12 border-t border-[#886c46]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <p className={`${playfair.className} text-xl md:text-2xl font-medium text-white leading-snug max-w-md`}>
            Trusted by{' '}
            <span className="text-[#a8926d]">infrastructure giants, MSMEs</span>{' '}
            and everything in between.
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-end">
            {certs.map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#886c46]/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#886c46]" />
                </div>
                <span className={`${merri.className} text-[0.6rem] font-light tracking-widest uppercase text-white/35`}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div>
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                How It Works
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                From Enquiry to Handover
              </h2>
            </div>
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/50 max-w-xs`}>
              A clear, four-step process so you always know exactly where your project stands.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white hover:bg-[#faf8f5] transition-colors duration-300 p-10 flex flex-col gap-6"
              >
                {/* Step orb */}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl shadow-[#886c46]/25 shrink-0">
                  <span className={`${playfair.className} text-base font-bold text-white`}>{item.step}</span>
                </div>

                {/* Connector dot row */}
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                <div>
                  <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`${merri.className} text-sm font-light leading-[1.85] text-black/55`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto">

          {/* FAQ header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div>
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                FAQ
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                Questions We<br />Hear Most
              </h2>
            </div>
            <div>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/55 mb-6`}>
                Can{`'`}t find your answer below? Our team responds to all enquiries within one business day — with a real answer, not a template.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#886c46]/45 text-[#886c46] text-sm font-light tracking-wide hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-300`}
              >
                Contact Our Experts
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Accordion */}
          <div className="bg-white border border-black/8 rounded-2xl px-8 md:px-12 divide-y divide-black/8">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>

        </div>
      </section>


      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 md:px-12 bg-[#0d0b08] overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(136,108,70,0.15)_0%,transparent_65%)] pointer-events-none" />
        {/* Top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46]/70 mb-5`}>
              Ready to Build?
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-6`}>
              Your Site Deserves a Structure That Works as Hard as You Do.
            </h2>
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-white/50 mb-12 max-w-lg mx-auto`}>
              Get a custom quote in 48 hours. No obligation, no boilerplate — just engineering that fits your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full text-sm font-light tracking-wide shadow-xl shadow-[#886c46]/30 hover:shadow-2xl hover:shadow-[#886c46]/40 transition-all duration-300`}
              >
                Request a Quote
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full border border-white/15 text-white/60 text-sm font-light tracking-wide hover:border-[#886c46]/50 hover:text-[#a8926d] transition-all duration-300`}
              >
                Browse Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Features