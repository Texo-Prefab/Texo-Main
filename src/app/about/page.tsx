'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { ArrowUpRight, Quote } from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '5,000+', label: 'Structures Delivered' },
  { value: '18+',    label: 'Years in Business'    },
  { value: '32',     label: 'States Covered'       },
  { value: '60%',    label: 'Repeat Client Rate'   },
]

const founders = [
  {
    name: 'Rajiv Mehta',
    role: 'Co-Founder & CEO',
    quote: '"I never wanted to build a factory. I wanted to build things that matter."',
    bio: 'Civil engineering graduate of VJTI Mumbai. Spent six years in a construction conglomerate before co-founding in 2006. Leads product strategy, client relationships, and long-term vision.',
    credentials: ['Civil Engg — VJTI Mumbai', 'Product & Strategy'],
    image: '/siteoffice-2.webp',
  },
  {
    name: 'Anand Mehta',
    role: 'Co-Founder & COO',
    quote: '"Operations is unglamorous — but it is the only part the client actually feels."',
    bio: 'Mechanical engineering graduate of COEP Pune. Designed the company\'s first QC checklist on a napkin in 2006. Owns manufacturing, logistics, and the 72-hour nationwide delivery commitment.',
    credentials: ['Mechanical Engg — COEP Pune', 'Operations & Logistics'],
    image: '/siteoffice-2.webp',
  },
]

const team = [
  { name: 'Priya Sharma',    role: 'Head of Design',          dept: 'Design',      image: '/siteoffice-2.webp' },
  { name: 'Kunal Desai',     role: 'Lead Structural Engineer', dept: 'Engineering', image: '/siteoffice-2.webp' },
  { name: 'Meera Pillai',    role: 'Client Relations',         dept: 'Sales',       image: '/siteoffice-2.webp' },
  { name: 'Arjun Khanna',    role: 'Factory Manager',          dept: 'Operations',  image: '/siteoffice-2.webp' },
  { name: 'Divya Nair',      role: 'Project Coordinator',      dept: 'Projects',    image: '/siteoffice-2.webp' },
  { name: 'Siddharth Bose',  role: 'Logistics Head',           dept: 'Operations',  image: '/siteoffice-2.webp' },
]

const certs = [
  {
    code: 'ISO',
    title: 'ISO 9001:2015',
    body: 'Quality Management System certified. Covers design, manufacturing, and post-installation support across all product lines.',
    year: 'Certified 2011',
  },
  {
    code: 'BIS',
    title: 'BIS Certified',
    body: 'Bureau of Indian Standards conformity marking on structural steel components and PUF insulation panels.',
    year: 'Certified 2014',
  },
  {
    code: 'MSME',
    title: 'MSME Registered',
    body: 'Registered under the Ministry of MSME, enabling preferential access to government infrastructure contracts.',
    year: 'Registered 2009',
  },
  {
    code: 'FSC',
    title: 'FSC Certified Timber',
    body: 'All timber used in our Wooden Series carries Forest Stewardship Council certification — responsibly sourced, chain-of-custody tracked.',
    year: 'Certified 2018',
  },
  {
    code: 'NBC',
    title: 'NBC Compliant',
    body: 'Structures engineered to National Building Code of India standards for fire safety, wind loads, and occupancy norms.',
    year: 'Ongoing Compliance',
  },
  {
    code: 'GBC',
    title: 'Green Build Compliant',
    body: 'Low-VOC finishes, recyclable steel frames, and responsibly sourced materials across all product categories.',
    year: 'Since 2020',
  },
]

const values = [
  { symbol: '◈', title: 'Honesty in Engineering',   body: 'We never over-specify to inflate invoices or under-engineer to cut costs. Every structure is built to what the site demands — nothing more, nothing less.' },
  { symbol: '◉', title: 'Speed Without Compromise',  body: 'Fast delivery is our signature, but not at the cost of quality. Factory-controlled manufacturing lets us be both — and we hold ourselves to both, always.' },
  { symbol: '◇', title: 'Context-First Design',      body: 'A cabin in Ladakh and one in coastal Goa face entirely different climates. We engineer for the specific site, not for the average site.' },
  { symbol: '◎', title: 'Long-Term Relationships',   body: 'Over 60% of our revenue comes from repeat clients. That number tells us more than any award ever could.' },
]

// ─── Shared primitives ────────────────────────────────────────────────────────

const Eyebrow = ({ label, light = false }: { label: string; light?: boolean }) => (
  <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase mb-4 ${light ? 'text-[#a8926d]' : 'text-[#886c46]'}`}>
    {label}
  </p>
)

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const About = () => {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════
          HERO — full-bleed dark, editorial split
      ══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative bg-[#0d0b08] overflow-hidden">
        {/* Gold orb */}
        <div className="absolute -top-48 -right-24 w-160 h-160 rounded-full bg-[#886c46]/10 blur-3xl pointer-events-none" />

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={heroInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent origin-left"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-0 relative z-10">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`${merri.className} mb-10 inline-flex items-center gap-2.5 rounded-full border border-[#886c46]/35 bg-[#886c46]/10 px-5 py-2 text-[0.62rem] font-light tracking-[0.28em] text-[#a8926d] uppercase`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#886c46]" />
            </span>
            Our Story
          </motion.span>

          {/* Asymmetric heading grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-end mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12 }}
              className={`${playfair.className} text-[clamp(3.4rem,7vw,5.5rem)] font-extrabold leading-[0.91] text-white`}
            >
              Eighteen Years.
              <br />
              <span className="bg-linear-to-r from-white via-[#c4a882] to-[#886c46] bg-clip-text text-transparent">
                Five Thousand
              </span>
              <br />
              Structures.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 18 }} animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="pb-2"
            >
              <div className="w-10 h-px bg-[#886c46] mb-7" />
              <p className={`${merri.className} text-[0.93rem] font-light leading-[1.95] text-white/52 mb-5`}>
                We started in a rented fabrication shed in Bhiwandi with four people and one welding machine. Today we operate across 32 states — but the founding principle hasn{`'`}t shifted an inch.
              </p>
              <p className={`${merri.className} text-[0.93rem] font-light leading-[1.95] text-white/52`}>
                A well-engineered modular structure should be accessible to every project. Not just the ones with unlimited budgets.
              </p>
            </motion.div>
          </div>

          {/* Stats — flush bottom, no padding below */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-[#886c46]/18"
          >
            {stats.map((s, i) => (
              <div key={i} className={`py-9 px-7 ${i < 3 ? 'border-r border-[#886c46]/12' : ''}`}>
                <div className={`${playfair.className} text-[2.4rem] font-bold text-[#a8926d] leading-none mb-2`}>{s.value}</div>
                <div className={`${merri.className} text-[0.6rem] font-light uppercase tracking-[0.18em] text-white/30 leading-snug`}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={heroInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.6, ease: 'easeInOut' }}
          className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#886c46]/35 to-transparent origin-left"
        />
      </section>


      {/* ══════════════════════════════════════════════════════
          MISSION — editorial pull quote + prose
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">

          <FadeUp>
            <Eyebrow label="What We Stand For" />
            <h2 className={`${playfair.className} text-3xl md:text-[2.6rem] font-bold text-black leading-[1.08]`}>
              Built on a<br />Simple Belief
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            {/* Pull quote */}
            <div className="relative pl-7 border-l-2 border-[#886c46]/35 mb-9">
              <Quote className="absolute -left-3.5 -top-1 w-6 h-6 text-[#886c46] fill-[#886c46]/15" />
              <p className={`${playfair.className} text-[1.55rem] md:text-[1.85rem] font-medium text-black/78 leading-[1.35] italic`}>
                {`"Every person on a project site deserves a structure that is safe, comfortable, and dignified — regardless of whether they are running the project or building it."`}
              </p>
              <p className={`${merri.className} text-[0.65rem] font-light text-[#886c46] uppercase tracking-widest mt-4`}>
                — Rajiv Mehta, Co-Founder
              </p>
            </div>
            {/* Prose */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <p className={`${merri.className} text-[0.88rem] font-light leading-[1.95] text-black/55`}>
                Modular construction used to mean compromise — temporary, flimsy, forgettable. We set out to prove that wrong. Today our structures stand on Himalayan resort sites, government school campuses, pharmaceutical clean rooms, and highway toll plazas alike.
              </p>
              <p className={`${merri.className} text-[0.88rem] font-light leading-[1.95] text-black/55`}>
                The engineering has evolved. The materials have sharpened. The design language has matured. But the founding belief is unchanged — and it is the reason 60% of our clients come back every time they build.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          FOUNDERS — compact, side-by-side horizontal cards
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">

          <FadeUp className="mb-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <Eyebrow label="The People Behind It" />
                <h2 className={`${playfair.className} text-3xl md:text-[2.6rem] font-bold text-black leading-[1.08]`}>
                  Co-Founders
                </h2>
              </div>
              <p className={`${merri.className} text-[0.8rem] font-light text-black/45 max-w-xs leading-relaxed`}>
                Brothers who are still on the floor — not just in the boardroom.
              </p>
            </div>
          </FadeUp>

          {/* Two cards, side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {founders.map((f, i) => (
              <FadeUp key={i} delay={i * 0.11} className="h-full">
                <div className="group relative bg-white hover:bg-[#fdfaf6] transition-colors duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-5 p-7 flex-1">

                    {/* Portrait */}
                    <div className="shrink-0 w-15 h-15 rounded-xl overflow-hidden border border-black/8 relative">
                      <Image src={f.image} alt={f.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-2 mb-0.5">
                        <div>
                          <h3 className={`${playfair.className} text-[1.15rem] font-bold text-black leading-tight`}>{f.name}</h3>
                          <p className={`${merri.className} text-[0.6rem] font-light uppercase tracking-[0.2em] text-[#886c46] mt-0.5`}>{f.role}</p>
                        </div>
                        <div className="shrink-0 w-6 h-6 rounded-full border border-[#886c46]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 mt-0.5">
                          <ArrowUpRight className="w-3 h-3 text-[#886c46]" />
                        </div>
                      </div>

                      {/* Quote */}
                      <p className={`${playfair.className} text-[0.88rem] font-medium italic text-black/50 leading-snug mt-3 mb-3.5`}>{f.quote}</p>

                      {/* Bio */}
                      <p className={`${merri.className} text-[0.76rem] font-light leading-[1.82] text-black/48 mb-4`}>{f.bio}</p>

                      {/* Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {f.credentials.map(c => (
                          <span key={c} className={`${merri.className} text-[0.58rem] font-light uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#886c46]/25 text-[#886c46]/75`}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-0.5 bg-linear-to-r from-[#886c46] via-[#c4a882] to-[#886c46] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Footnote */}
          <FadeUp delay={0.22} className="mt-2.5">
            <div className="flex items-center gap-4 bg-white border border-black/8 rounded-xl px-6 py-3.5">
              <div className="flex -space-x-2.5 shrink-0">
                {founders.map((f, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative ring-1 ring-black/6">
                    <Image src={f.image} alt={f.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className={`${merri.className} text-[0.7rem] font-light text-black/40 leading-relaxed`}>
                Both founders remain hands-on — factory floor, client calls, site visits. Every week.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          OUR TEAM — 6-person card grid, dark section
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-[#0d0b08] relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-130 h-130 rounded-full bg-[#886c46]/7 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <FadeUp className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <Eyebrow label="Our Team" light />
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
                  The People Who<br />Make It Happen
                </h2>
              </div>
              <p className={`${merri.className} text-[0.85rem] font-light text-white/38 max-w-xs leading-relaxed`}>
                180 skilled workers across factory and field. These are the six who lead them.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#886c46]/10 rounded-2xl overflow-hidden">
            {team.map((m, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="group bg-[#0d0b08] hover:bg-[#131108] transition-colors duration-300 p-5 flex flex-col items-center text-center h-full">

                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#886c46]/20 mb-4 group-hover:border-[#886c46]/50 transition-all duration-300">
                    <Image src={m.image} alt={m.name} fill className="object-cover object-top group-hover:scale-108 transition-transform duration-500" />
                    {/* Dept colour tag */}
                    <div className="absolute bottom-0 inset-x-0 h-0.75 bg-[#886c46] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Dept pill */}
                  <span className={`${merri.className} text-[0.52rem] font-light uppercase tracking-[0.16em] text-[#886c46]/70 mb-2`}>
                    {m.dept}
                  </span>

                  <h3 className={`${playfair.className} text-[0.9rem] font-semibold text-white leading-snug mb-1 group-hover:text-[#c4a882] transition-colors duration-300`}>
                    {m.name}
                  </h3>
                  <p className={`${merri.className} text-[0.65rem] font-light text-white/35 leading-relaxed`}>
                    {m.role}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Team footnote */}
          <FadeUp delay={0.4} className="mt-6">
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px w-12 bg-[#886c46]/25" />
              <p className={`${merri.className} text-[0.65rem] font-light text-white/25 uppercase tracking-[0.18em]`}>
                Plus 174 skilled craftspeople across factory &amp; field
              </p>
              <div className="h-px w-12 bg-[#886c46]/25" />
            </div>
          </FadeUp>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          VALUES — 2×2 tight grid on white
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <FadeUp className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <Eyebrow label="What We Believe" />
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                  Four Principles.<br />Zero Exceptions.
                </h2>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="group bg-white hover:bg-[#fdfaf6] transition-colors duration-300 p-10 md:p-12 h-full relative overflow-hidden">
                  {/* Ghost number */}
                  <span className={`${playfair.className} absolute -right-2 -bottom-4 text-[6rem] font-extrabold text-black/3 leading-none select-none pointer-events-none group-hover:text-[#886c46]/6 transition-colors duration-500`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="text-[1.4rem] text-[#886c46] mb-6 leading-none">{v.symbol}</div>
                  <h3 className={`${playfair.className} text-[1.2rem] font-semibold text-black mb-4 leading-snug`}>{v.title}</h3>
                  <p className={`${merri.className} text-[0.85rem] font-light leading-[1.9] text-black/55`}>{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          CERTIFICATIONS — premium credential showcase
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-90 h-90 rounded-full bg-[#886c46]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <FadeUp className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <Eyebrow label="Trust & Compliance" />
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                  Certifications &<br />Standards
                </h2>
              </div>
              <p className={`${merri.className} text-[0.85rem] font-light text-black/45 max-w-xs leading-relaxed`}>
                Every certificate below is an active, audited commitment — not a trophy on a shelf.
              </p>
            </div>
          </FadeUp>

          {/* 3-col grid — left has a large cert code, right has detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {certs.map((c, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="group bg-white hover:bg-[#fdfaf6] transition-all duration-300 p-8 flex flex-col h-full relative overflow-hidden">

                  {/* Large ghost code */}
                  <span className={`${playfair.className} absolute right-4 top-4 text-[4rem] font-extrabold text-black/4 leading-none select-none pointer-events-none group-hover:text-[#886c46]/8 transition-colors duration-500`}>
                    {c.code}
                  </span>

                  {/* Active cert badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className={`${merri.className} text-[0.58rem] font-light uppercase tracking-[0.2em] text-emerald-600`}>
                        Active
                      </span>
                    </div>
                    <span className={`${merri.className} text-[0.58rem] font-light uppercase tracking-[0.12em] text-black/28`}>
                      {c.year}
                    </span>
                  </div>

                  <h3 className={`${playfair.className} text-[1.15rem] font-bold text-black mb-3 leading-snug group-hover:text-[#886c46] transition-colors duration-300`}>
                    {c.title}
                  </h3>
                  <p className={`${merri.className} text-[0.8rem] font-light leading-[1.85] text-black/52 flex-1`}>
                    {c.body}
                  </p>

                  {/* Bottom gold line — hover reveal */}
                  <div className="mt-6 h-px bg-linear-to-r from-[#886c46]/0 via-[#886c46]/50 to-[#886c46]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Compliance note */}
          <FadeUp delay={0.35} className="mt-5">
            <div className="flex items-start gap-4 bg-white border border-black/8 rounded-xl px-7 py-5">
              <div className="w-8 h-8 rounded-full bg-[#886c46]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#886c46] text-sm leading-none">✓</span>
              </div>
              <div>
                <p className={`${merri.className} text-[0.75rem] font-light text-black/50 leading-relaxed`}>
                  All certification documentation is available on request. Clients on government or institutional contracts receive a full compliance packet with every order — including IS 875, IS 1893, and NBC conformity statements.
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          FACTORY — full-bleed split image + stats
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-110">

          {/* Photo */}
          <div className="relative h-64 lg:h-auto order-2 lg:order-1">
            <Image src="/siteoffice-2.webp" alt="Manufacturing facility" fill className="object-cover" />
            {/* Subtle dark-to-right vignette for text readability bleed */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/20" />
          </div>

          {/* Copy */}
          <div className="bg-[#0d0b08] flex items-center px-10 md:px-16 py-16 order-1 lg:order-2">
            <FadeUp>
              <Eyebrow label="Where We Build" light />
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white leading-tight mb-6`}>
                State-of-the-Art<br />Manufacturing Facility
              </h2>
              <p className={`${merri.className} text-[0.88rem] font-light leading-[1.92] text-white/48 mb-4`}>
                Our 45,000 sq ft factory in Bhiwandi, Maharashtra runs four dedicated production lines — PUF panel fabrication, structural steel welding, woodwork, and final assembly — all under one roof, all quality-controlled in-house.
              </p>
              <p className={`${merri.className} text-[0.88rem] font-light leading-[1.92] text-white/48 mb-10`}>
                Every outgoing structure passes a 47-point checklist. Dimensional tolerances held within ±2mm.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-[#886c46]/15 pt-8">
                {[
                  { v: '45,000', l: 'sq ft Factory' },
                  { v: '180+', l: 'Skilled Workers' },
                  { v: '47pt', l: 'QC Checklist' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className={`${playfair.className} text-2xl font-bold text-[#a8926d] leading-none mb-1.5`}>{s.v}</div>
                    <div className={`${merri.className} text-[0.6rem] font-light uppercase tracking-widest text-white/32 leading-relaxed`}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          CTA — clean, white, typographically bold
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 md:px-12 bg-white border-t border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(136,108,70,0.055)_0%,transparent_55%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <Eyebrow label="Work With Us" />
            <h2 className={`${playfair.className} text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold text-black leading-none mb-5`}>
              Let{`'`}s Build Something<br />Worth Talking About.
            </h2>
            <p className={`${merri.className} text-[0.88rem] font-light leading-[1.9] text-black/48 mb-11 max-w-md mx-auto`}>
              Whether you need a single security cabin or a full prefab campus, the Mehta team is ready — design it, build it, stand behind it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full text-[0.85rem] font-light tracking-wide shadow-xl shadow-[#886c46]/22 hover:shadow-2xl hover:shadow-[#886c46]/32 transition-all duration-300`}
              >
                Start a Conversation
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full border border-black/14 text-black/55 text-[0.85rem] font-light tracking-wide hover:border-[#886c46]/45 hover:text-[#886c46] transition-all duration-300`}
              >
                View Our Products
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}

export default About