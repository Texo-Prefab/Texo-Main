'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  ArrowUpRight,
  CheckCircle2,
  Quote,
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

const founders = [
  {
    name: 'Rajiv Mehta',
    title: 'Co-Founder & Managing Director',
    tenure: 'Est. 2006',
    bio: 'A civil engineer by training, Rajiv spent a decade on large-scale infrastructure sites before recognising the chronic problem of slow, expensive temporary structures. He founded the company on the belief that a modular cabin should be as precisely engineered as a permanent building — and considerably faster to deploy.',
    quote: 'We never set out to build cabins. We set out to eliminate site delays.',
    stat: { value: '18+', label: 'Years Leading the Company' },
    initials: 'RM',
  },
  {
    name: 'Sunita Kapoor',
    title: 'Co-Founder & Chief Operations Officer',
    tenure: 'Est. 2006',
    bio: 'With a background in manufacturing systems and supply chain management, Sunita architected the factory workflow that lets us deliver custom structures in days rather than months. She oversees quality, logistics, and the installation network that spans 32 states.',
    quote: 'Quality isn\'t a checkpoint. It\'s designed into the process from the first weld.',
    stat: { value: '5,000+', label: 'Structures Overseen' },
    initials: 'SK',
  },
]

const certifications = [
  {
    title: 'BIS Certified',
    body: 'Bureau of Indian Standards certification across our core structural product range, verifying compliance with national manufacturing norms.',
    year: 'Since 2009',
    image: '/siteoffice-2.webp',
  },
  {
    title: 'ISO 9001:2015',
    body: 'Internationally recognised Quality Management System certification, applied to every stage of our design, manufacturing, and delivery process.',
    year: 'Renewed 2024',
    image: '/products-hero.png',
  },
  {
    title: 'MSME Registered',
    body: 'Registered with the Ministry of Micro, Small & Medium Enterprises, enabling preferential procurement for government and public-sector projects.',
    year: 'Active',
    image: '/siteoffice-2.webp',
  },
  {
    title: 'Green Build Compliant',
    body: 'Our insulation and cladding systems meet the energy-efficiency benchmarks set by the Green Building Council of India.',
    year: 'Since 2017',
    image: '/products-hero.png',
  },
  {
    title: 'FSC Timber Certified',
    body: 'All timber used in our wooden cabin series is sourced exclusively from Forest Stewardship Council-certified sustainable forests.',
    year: 'Since 2019',
    image: '/siteoffice-2.webp',
  },
  {
    title: 'NSIC Empanelled',
    body: 'Empanelled with the National Small Industries Corporation, making us eligible for government infrastructure and accommodation tenders across India.',
    year: 'Active',
    image: '/products-hero.png',
  },
]

const milestones = [
  { year: '2006', event: 'Founded in Pune with a single factory and four employees.' },
  { year: '2010', event: 'Crossed 500 structures delivered. Expanded to a second manufacturing facility.' },
  { year: '2014', event: 'Launched the PUF insulated panel range, setting a new thermal standard for site cabins.' },
  { year: '2018', event: 'ISO 9001 certification awarded. Pan-India delivery network reaches 28 states.' },
  { year: '2021', event: 'Introduced the modular bunk house and prefab school product lines.' },
  { year: '2024', event: 'Surpassed 5,000 structures delivered across 32 states.' },
]

const values = [
  {
    number: '01',
    title: 'Precision Over Speed',
    body: 'We move fast — but never at the cost of dimensional accuracy, structural integrity, or finish quality. Every unit is built as if it will stand for decades.',
  },
  {
    number: '02',
    title: 'Accountability at Every Step',
    body: 'We assign a named project manager to every order. You can reach them directly — not a call centre. Your project is someone\'s personal responsibility.',
  },
  {
    number: '03',
    title: 'Engineering-First Thinking',
    body: 'Every design decision is grounded in structural and thermal engineering, not aesthetics alone. Beautiful structures that also perform, always.',
  },
]

const stats = [
  { value: '5,000+', label: 'Structures Delivered' },
  { value: '18+', label: 'Years of Expertise' },
  { value: '32', label: 'States Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0d0b08] pt-32 pb-24 px-6 md:px-12 overflow-hidden">

        <div className="absolute -top-32 -right-24 w-130 h-130 rounded-full bg-[#886c46]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-100 h-100 rounded-full bg-[#886c46]/8 blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent" />

        <div className="max-w-7xl mx-auto relative mt-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

            <div>
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
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-white mb-7`}
              >
                18 Years.
                <br />
                <span className="bg-linear-to-r from-white via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
                  One Standard.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className={`${merri.className} text-base font-light leading-[1.9] text-white/55 max-w-md`}
              >
                We started in Pune with a single factory and a conviction that modular
                structures deserved the same engineering rigour as permanent buildings.
                That belief has driven every unit we have built since 2006.
              </motion.p>
            </div>

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

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />
      </section>


      {/* ── ORIGIN STORY ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                Why We Exist
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-8`}>
                A Problem We Lived on Site
              </h2>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 mb-6`}>
                Before this company existed, our founders spent years managing construction sites where temporary structures were universally treated as afterthoughts — leaky, hot in summer, structurally suspect, and months behind schedule.
              </p>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 mb-6`}>
                In 2006, Rajiv and Sunita decided the industry needed someone who would engineer these structures properly: factory-controlled tolerances, certified insulation, rated structural frames — and the logistics to deliver them on time, every time.
              </p>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60`}>
                That is still the only thing we do. And we believe that focus is exactly why 98% of our clients return.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute left-[22px] top-4 bottom-4 w-px bg-[#886c46]/20" />
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex gap-6 pb-8 last:pb-0"
                  >
                    <div className="relative shrink-0 w-11 flex flex-col items-center">
                      <div className="w-[11px] h-[11px] rounded-full bg-[#886c46] border-2 border-white ring-1 ring-[#886c46]/40 mt-1 z-10" />
                    </div>
                    <div>
                      <span className={`${playfair.className} text-[0.7rem] font-bold text-[#886c46] tracking-widest`}>
                        {m.year}
                      </span>
                      <p className={`${merri.className} text-sm font-light leading-[1.8] text-black/60 mt-1`}>
                        {m.event}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── VALUES BAND ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 md:px-12 bg-linear-to-r from-[#6f5838] via-[#886c46] to-[#6f5838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-transparent hover:bg-white/5 transition-colors duration-300 p-10 md:p-12"
              >
                <span className={`${playfair.className} text-[0.65rem] font-bold text-white/25 tracking-[0.2em] block mb-5`}>
                  {v.number}
                </span>
                <h3 className={`${playfair.className} text-xl font-semibold text-white mb-4 leading-snug`}>
                  {v.title}
                </h3>
                <p className={`${merri.className} text-sm font-light leading-[1.9] text-white/60`}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FOUNDERS ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
              The People Behind the Company
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
              Our Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white hover:bg-[#fdf9f5] transition-colors duration-300 p-10 md:p-14 flex flex-col gap-10"
                style={{ borderTop: '3px solid #886c46' }}
              >
                <div className="flex items-center gap-6">
                  <div className={`${playfair.className} w-16 h-16 rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center text-white text-lg font-bold shadow-xl shadow-[#886c46]/25 shrink-0`}>
                    {f.initials}
                  </div>
                  <div>
                    <h3 className={`${playfair.className} text-2xl font-bold text-black leading-snug`}>
                      {f.name}
                    </h3>
                    <p className={`${merri.className} text-[0.65rem] font-light uppercase tracking-[0.14em] text-[#886c46] mt-1`}>
                      {f.title}
                    </p>
                    <p className={`${merri.className} text-[0.6rem] font-light uppercase tracking-widest text-black/30 mt-0.5`}>
                      {f.tenure}
                    </p>
                  </div>
                </div>

                <p className={`${merri.className} text-sm font-light leading-[1.95] text-black/60`}>
                  {f.bio}
                </p>

                <div className="border-l-2 border-[#886c46]/40 pl-6">
                  <Quote className="w-5 h-5 text-[#886c46]/40 mb-3" />
                  <p className={`${playfair.className} text-base font-medium text-black/70 leading-relaxed italic`}>
                    {f.quote}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-black/6 flex items-end gap-4">
                  <div className={`${playfair.className} text-4xl font-extrabold text-[#886c46] leading-none`}>
                    {f.stat.value}
                  </div>
                  <div className={`${merri.className} text-[0.62rem] font-light uppercase tracking-[0.08em] text-black/35 leading-relaxed mb-1`}>
                    {f.stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TEAM ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* aspect-[4/3] on the wrapper is what gives `fill` its height */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/siteoffice-2.webp"
                  alt="Our team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0b08]/40 via-transparent to-transparent pointer-events-none z-10" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-[#886c46]/25 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border border-[#886c46]/15 -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                The People Behind Every Unit
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-8`}>
                Built by a Team That Takes It Personally
              </h2>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 mb-6`}>
                Behind every structure we deliver is a team of engineers, fabricators, designers, and logistics specialists who treat your deadline as their own. Many of our factory crew and site installation teams have been with us for over a decade — because when you build something you're proud of, you stay.
              </p>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60 mb-6`}>
                From the draftsperson who translates your brief into a fabrication drawing, to the installation crew who drives through the night to make your site-ready date — this team's pride in their craft is the reason 98% of our clients return.
              </p>
              <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/60`}>
                We are grateful for every single one of them.
              </p>

              <div className="mt-10 pt-8 border-t border-black/6 grid grid-cols-3 gap-6">
                {[
                  { value: '120+', label: 'Team Members' },
                  { value: '11 yrs', label: 'Avg. Tenure' },
                  { value: '3', label: 'Facilities' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className={`${playfair.className} text-2xl font-bold text-[#886c46] leading-none mb-1.5`}>
                      {s.value}
                    </div>
                    <div className={`${merri.className} text-[0.6rem] font-light uppercase tracking-widest text-black/35 leading-relaxed`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── CERTIFICATIONS ────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                Credentials
              </p>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black leading-tight`}>
                Certified. Verified.<br />Trusted.
              </h2>
            </div>
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/50 max-w-xs md:text-right`}>
              Our certifications aren't collected for appearances. Each one represents a manufacturing or compliance standard we hold ourselves to daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 rounded-2xl overflow-hidden">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-white hover:bg-[#fdf9f5] transition-colors duration-300 flex flex-col"
                style={{ borderTop: i < 3 ? '3px solid #886c46' : '3px solid transparent' }}
              >
                {/* aspect-[3/2] on the wrapper gives `fill` a defined height */}
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${merri.className} text-[0.58rem] font-light uppercase tracking-widest text-white/80 bg-[#0d0b08]/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full`}>
                      {cert.year}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col gap-3 flex-1">
                  <h3 className={`${playfair.className} text-lg font-semibold text-black leading-snug`}>
                    {cert.title}
                  </h3>
                  <p className={`${merri.className} text-sm font-light leading-[1.85] text-black/55`}>
                    {cert.body}
                  </p>
                </div>
              </motion.div>
            ))}
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
            {['BIS Certified', 'ISO 9001', 'MSME Registered', 'Green Build Compliant'].map((cert, i) => (
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


      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 md:px-12 bg-[#0d0b08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(136,108,70,0.15)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46]/70 mb-5`}>
              Work With Us
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-6`}>
              Let's Build Something That Lasts.
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
                View Our Features
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default About