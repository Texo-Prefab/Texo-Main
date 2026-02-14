'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  Zap,
  Thermometer,
  Layers,
  Sliders,
  ShieldCheck,
  Truck,
  Wind,
  BadgeCheck,
  Wrench,
  Leaf,
  ArrowUpRight,
  Plus,
  CheckCircle2,
} from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreFeatures = [
  {
    number: '01',
    icon: Zap,
    title: 'Rapid Deployment',
    subtitle: 'From blueprint to built — in days, not months',
    body: 'Our modular prefab systems arrive pre-engineered at your site, slashing construction time by up to 70%. Whether it\'s a security cabin on a remote road or a full prefab school, your structure is ready when you need it.',
    metric: '70%',
    metricLabel: 'Faster Than Conventional Build',
    tags: ['Site Offices', 'Portable Cabins', 'Security Booths'],
  },
  {
    number: '02',
    icon: Thermometer,
    title: 'Superior Thermal Performance',
    subtitle: 'PUF insulation engineered for extremes',
    body: 'Our PUF (Polyurethane Foam) insulated panels deliver industry-leading thermal resistance, keeping interiors 15–20°C cooler than ambient in desert heat and retaining warmth in sub-zero highlands — without heavy HVAC loads.',
    metric: '20°C',
    metricLabel: 'Temperature Delta Maintained',
    tags: ['Control Rooms', 'Clean Rooms', 'Solar Cabins'],
  },
  {
    number: '03',
    icon: Layers,
    title: 'Fully Modular Architecture',
    subtitle: 'Scale up. Move. Reconfigure. Repeat.',
    body: 'Every unit is designed as a module. Add sections as your project grows, relocate the entire structure to a new site, or repurpose it entirely. The same cabin that serves as a construction office today becomes a clinic cabin tomorrow.',
    metric: '100%',
    metricLabel: 'Relocatable & Reusable',
    tags: ['Prefab Structures', 'Bunk Houses', 'Modular Toilets'],
  },
  {
    number: '04',
    icon: Sliders,
    title: 'Bespoke Customisation',
    subtitle: 'Your vision. Our engineering.',
    body: 'No two projects are identical. We configure dimensions, interiors, electrical layouts, plumbing, fenestration, and cladding finishes to your exact specification — delivered with the precision of factory-controlled manufacturing.',
    metric: '500+',
    metricLabel: 'Custom Configurations Delivered',
    tags: ['Restaurant Cabins', 'ATM Booths', 'A-Frame Cabins'],
  },
]

const pillars = [
  {
    icon: ShieldCheck,
    title: 'ISO-Grade Quality Control',
    body: 'Every panel, weld, and joint passes multi-stage inspection before leaving our factory. Dimensional tolerances held within ±2mm.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery Network',
    body: 'Flat-bed fleets cover every state. Structures arrive on-site on schedule, no matter how remote the terrain.',
  },
  {
    icon: Wind,
    title: 'Wind & Seismic Rated',
    body: 'Structures engineered to withstand Beaufort 10 winds and Zone-III seismic loads — certified for demanding infrastructure projects.',
  },
  {
    icon: BadgeCheck,
    title: '5-Year Structural Warranty',
    body: 'Our confidence in manufacturing quality is backed by a comprehensive 5-year structural guarantee — one of the longest in the industry.',
  },
  {
    icon: Wrench,
    title: 'Turnkey Installation',
    body: 'Our skilled site crews handle foundation prep, installation, MEP connections, and commissioning — you receive a ready-to-occupy structure.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    body: 'Responsibly sourced timber, recyclable steel frames, and low-VOC finishes. Our wooden series carries FSC certification on all timber.',
  },
]

const stats = [
  { value: '5,000+', label: 'Structures Delivered' },
  { value: '18+', label: 'Years of Expertise' },
  { value: '32', label: 'States Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

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
      <section className="relative bg-[#0d0b08] pt-32 pb-24 px-6 md:px-12 overflow-hidden">
        
        {/* Gold glows */}
        <div className="absolute -top-32 -right-24 w-130 h-130 rounded-full bg-[#886c46]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-100 h-100 rounded-full bg-[#886c46]/8 blur-3xl pointer-events-none" />

        {/* Top rule */}
        <div className="absolute top-0  left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent" />

        <div className="max-w-7xl mx-auto relative mt-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

            {/* Left — copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className={`${merri.className} inline-flex items-center gap-2.5 rounded-full border border-[#886c46]/35 bg-[#886c46]/10 px-6 py-2.5 text-[0.65rem] font-light tracking-[0.28em] text-[#a8926d] uppercase`}>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
                  </span>
                  Why Choose Us
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-white mb-7`}
              >
                Built Different.
                <br />
                <span className="bg-linear-to-r from-white via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
                  Engineered to Last.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className={`${merri.className} text-base font-light leading-[1.9] text-white/55 max-w-md`}
              >
                For over 18 years, we have delivered modular structures that site managers,
                contractors, and enterprise clients trust for their most demanding projects
                across India.
              </motion.p>
            </div>

            {/* Right — stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="grid grid-cols-2 border border-[#886c46]/20 rounded-2xl overflow-hidden"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-8 md:p-10 ${i % 2 === 0 ? 'bg-white/4' : 'bg-white/2'} ${i < 2 ? 'border-b border-[#886c46]/15' : ''} ${i % 2 === 0 ? 'border-r border-[#886c46]/15' : ''}`}
                >
                  <div className={`${playfair.className} text-4xl font-bold text-[#a8926d] leading-none mb-2`}>
                    {s.value}
                  </div>
                  <div className={`${merri.className} text-[0.65rem] font-light text-white/40 uppercase tracking-widest leading-relaxed`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
      </section>


      {/* ── CORE FEATURES ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                Core Capabilities
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                What Sets Us Apart
              </h2>
            </div>
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/50 max-w-xs md:text-right`}>
              Every feature below is the result of real-world problem-solving across thousands of project sites.
            </p>
          </div>

          {/* Feature rows */}
          <div className="border border-black/8 rounded-2xl overflow-hidden divide-y divide-black/8">
            {coreFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group grid grid-cols-[60px_1fr] lg:grid-cols-[60px_1fr_260px] gap-0 hover:bg-[#faf8f5] transition-colors duration-300"
                >
                  {/* Number + icon col */}
                  <div className="flex flex-col items-center pt-10 pb-10 pl-8 pr-0 border-r border-black/6 gap-4">
                    <span className={`${playfair.className} text-xs font-bold text-[#886c46]/50 tracking-wider`}>
                      {f.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-lg shadow-[#886c46]/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="p-8 lg:p-10 lg:pr-16">
                    <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-black mb-1.5 group-hover:text-[#886c46] transition-colors duration-300`}>
                      {f.title}
                    </h3>
                    <p className={`${merri.className} text-[0.72rem] font-light uppercase tracking-[0.12em] text-[#886c46] mb-5`}>
                      {f.subtitle}
                    </p>
                    <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 mb-7`}>
                      {f.body}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map(tag => (
                        <span
                          key={tag}
                          className={`${merri.className} text-[0.62rem] font-light uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#886c46]/30 text-[#886c46]`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metric col — hidden on small */}
                  <div className="hidden lg:flex flex-col justify-center border-l border-black/6 px-10 py-10">
                    <div className={`${playfair.className} text-5xl font-extrabold text-[#886c46] leading-none mb-2.5`}>
                      {f.metric}
                    </div>
                    <div className={`${merri.className} text-[0.65rem] font-light uppercase tracking-[0.08em] text-black/40 leading-relaxed`}>
                      {f.metricLabel}
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ── BRAND PROMISE BAND ────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 md:px-12 bg-linear-to-r from-[#6f5838] via-[#886c46] to-[#6f5838] overflow-hidden">
        {/* Hatch pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-white/50 mb-5`}>
            Our Promise
          </p>
          <blockquote className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-6`}>
            {`"You receive a structure ready to work in —<br className="hidden md:block" /> not a site to manage."`}
          </blockquote>
          <p className={`${merri.className} text-sm font-light leading-[1.9] text-white/65 max-w-xl mx-auto`}>
            From the first site survey to the handover walkthrough, our team handles every step.
            Your time is better spent on your project — not ours.
          </p>
        </div>
      </section>


      {/* ── BRAND PILLARS ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
              Built Into Every Unit
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
              Standards You Can Count On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-white hover:bg-[#fdf9f5] transition-colors duration-300 p-10"
                  style={{ borderTop: i < 3 ? '3px solid #886c46' : '3px solid transparent' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#886c46]/15 to-[#886c46]/5 flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-[#886c46] group-hover:to-[#6f5838] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#886c46] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className={`${playfair.className} text-lg font-semibold text-black mb-3 leading-snug`}>
                    {p.title}
                  </h3>
                  <p className={`${merri.className} text-sm font-light leading-[1.85] text-black/55`}>
                    {p.body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


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