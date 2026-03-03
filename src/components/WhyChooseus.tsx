'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const WhyChooseUs = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])

  const features = [
    {
      number: '01',
      title: 'Lightning Fast Construction',
      description: 'Prefabricated components reduce on-site construction time by 60%. What takes months in traditional building, we accomplish in weeks.',
      stat: '60%',
      statLabel: 'Faster',
    },
    {
      number: '02',
      title: 'Precision Engineering',
      description: 'At Texo, every structure is crafted using advanced CNC and robotic fabrication, achieving tolerances of under 1 mm. This results in exceptional build consistency.',
      stat: '40%',
      statLabel: 'Less Waste',
    },
    {
      number: '03',
      title: 'Modular Scalability',
      description: 'Our plug-and-play modular system is designed for absolute flexibility. Scale, relocate, or reconfigure Texo units in under 7–10 days with zero compromise.',
      stat: '30%',
      statLabel: 'Savings',
    },
    {
      number: '04',
      title: 'Smart Material Usage',
      description: 'We use galvanized steel frames and high-grade R-25 insulation to ensure every Texo build lasts over 25 years, withstanding wind loads up to 150 km/h.',
      stat: '99.8%',
      statLabel: 'Quality Rate',
    },
    {
      number: '05',
      title: 'Rapid Deployment',
      description: 'With over 80% of work done off-site, Texo drastically shortens your build timeline and delivers complete, ready-to-use units faster than traditional methods.',
      stat: '100%',
      statLabel: 'Customizable',
    },
    {
      number: '06',
      title: 'Eco-Conscious Design',
      description: 'Texo builds are thermally optimized and energy-efficient by design. Our methods reduce material waste and lower energy usage by up to 30%.',
      stat: '10 Years',
      statLabel: 'Warranty',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden">

      <motion.div 
        style={{ y: y1 }}
        className="absolute top-40 right-20 w-32 h-32 border border-[#886c46]/20 rounded-lg rotate-45"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-60 left-32 w-24 h-24 border border-[#886c46]/20 rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
              </span>
              WHY CHOOSE US
            </span>
          </div>

          <h2 className={`${playfair.className} mb-6 text-4xl font-light leading-tight text-black md:text-5xl lg:text-6xl`}>
            Building Excellence,
            <br />
            <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
              One Module at a Time
            </span>
          </h2>

          <p className={`${merri.className} mx-auto max-w-2xl text-base font-light leading-relaxed text-black/80`}>
            We revolutionize construction through innovation, precision, and unwavering commitment to quality. 
            Discover what sets us apart in the prefab industry.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-8 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
          />
        </motion.div>

        {/* Premium Image Bento */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-28 grid gap-6 md:grid-cols-4 auto-rows-[200px]"
        >
          <div className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
            <Image src="/siteoffice-2.webp" alt="Prefab modular construction facility" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-[#886c46]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs tracking-[0.3em] text-white/70 mb-2">MODULAR ENGINEERING</p>
              <h3 className={`${playfair.className} text-3xl font-semibold leading-tight`}>Precision Built <br /> For Modern Infrastructure</h3>
            </div>
          </div>

          <div className="relative rounded-3xl bg-white border border-[#886c46]/20 p-6 flex flex-col justify-between">
            <span className="text-xs tracking-widest text-black/40">DELIVERY SPEED</span>
            <p className={`${playfair.className} text-3xl font-semibold text-[#886c46]`}>60%</p>
            <span className="text-sm text-black/60">Faster Build Time</span>
          </div>

          <div className="relative rounded-3xl bg-white border border-[#886c46]/20 p-6 flex flex-col justify-between">
            <span className="text-xs tracking-widest text-black/40">DELIVERY SPEED</span>
            <p className={`${playfair.className} text-3xl font-semibold text-[#886c46]`}>60%</p>
            <span className="text-sm text-black/60">Faster Build Time</span>
          </div>

          <div className="relative rounded-3xl bg-white border border-[#886c46]/20 p-6 flex flex-col justify-between">
            <span className="text-xs tracking-widest text-black/40">DELIVERY SPEED</span>
            <p className={`${playfair.className} text-3xl font-semibold text-[#886c46]`}>60%</p>
            <span className="text-sm text-black/60">Faster Build Time</span>
          </div>
          <div className="relative rounded-3xl bg-white border border-[#886c46]/20 p-6 flex flex-col justify-between">
            <span className="text-xs tracking-widest text-black/40">DELIVERY SPEED</span>
            <p className={`${playfair.className} text-3xl font-semibold text-[#886c46]`}>60%</p>
            <span className="text-sm text-black/60">Faster Build Time</span>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-[#886c46]/20 bg-linear-to-br from-white/50 to-transparent p-10 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                  <svg className="h-8 w-8 text-[#886c46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className={`${playfair.className} text-2xl font-bold text-black`}>Ready to Build Smarter?</h3>
                <p className={`${merri.className} text-sm text-gray-400`}>Let{`'`}s discuss your project and create something extraordinary</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} group relative overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-8 py-4 text-sm font-light tracking-wide text-white shadow-xl`}
            >
              <span className="relative z-10">Schedule Free Consultation</span>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}


const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#886c46]/25 hover:shadow-lg hover:shadow-[#886c46]/8"
    >
      {/* Top stripe */}
      <div className="h-1 w-full bg-linear-to-r from-[#886c46]/40 via-[#886c46] to-[#886c46]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-7">

        {/* Header row */}
        <div className="mb-6 flex items-start justify-between">
          {/* Step circle */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#886c46]/20 bg-[#886c46]/5 transition-colors duration-300 group-hover:bg-[#886c46]/10">
            <span className={`${playfair.className} text-base font-semibold text-[#886c46]`}>
              {feature.number}
            </span>
          </div>

          {/* Stat pill */}
          <div className="rounded-full border border-[#886c46]/15 bg-[#f8f5f0] px-3 py-1.5">
            <span className={`${playfair.className} text-sm font-semibold text-[#886c46]`}>
              {feature.stat}
            </span>
            <span className={`${merri.className} ml-1.5 text-[10px] uppercase tracking-wider text-black/40`}>
              {feature.statLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`${playfair.className} mb-3 text-xl font-semibold leading-snug text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`${merri.className} flex-1 text-[13.5px] font-light leading-relaxed text-[#5a5248]`}>
          {feature.description}
        </p>

        {/* Bottom accent */}
        <div className="mt-6 h-px w-full bg-black/5">
          <div className="h-px w-0 bg-linear-to-r from-[#886c46] to-transparent transition-all duration-500 group-hover:w-3/4" />
        </div>

      </div>
    </motion.div>
  )
}

export default WhyChooseUs