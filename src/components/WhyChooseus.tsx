'use client'
import React, { useRef, useState } from 'react'
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
      title: 'Sustainable & Eco-Friendly',
      description: 'Factory-controlled production minimizes waste and energy consumption. Our modular designs incorporate recycled materials and green technologies.',
      stat: '40%',
      statLabel: 'Less Waste',
    },
    {
      number: '03',
      title: 'Cost-Effective Solutions',
      description: 'Streamlined manufacturing and reduced labor costs translate to savings for you. Predictable pricing with no surprise expenses or delays.',
      stat: '30%',
      statLabel: 'Savings',
    },
    {
      number: '04',
      title: 'Superior Quality Control',
      description: 'Every module is manufactured in our controlled facility, ensuring consistent quality standards that exceed traditional construction methods.',
      stat: '99.8%',
      statLabel: 'Quality Rate',
    },
    {
      number: '05',
      title: 'Infinite Customization',
      description: 'From floor plans to finishes, every detail can be tailored to your vision. Modular design doesn\'t mean cookie-cutter results.',
      stat: '100%',
      statLabel: 'Customizable',
    },
    {
      number: '06',
      title: 'Expert Support & Warranty',
      description: 'Dedicated project managers guide you through every phase. Comprehensive warranties and post-construction support ensure your investment is protected.',
      stat: '10 Years',
      statLabel: 'Warranty',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen  py-24 overflow-hidden">
     

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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
              </span>
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} mb-6 text-4xl font-light leading-tight text-black md:text-5xl lg:text-6xl`}
          >
            Building Excellence,
            <br />
            <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
              One Module at a Time
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${merri.className} mx-auto max-w-2xl text-base font-light leading-relaxed text-black/80`}
          >
            We revolutionize construction through innovation, precision, and unwavering commitment to quality. 
            Discover what sets us apart in the prefab industry.
          </motion.p>

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
    <Image
      src="/siteoffice-2.webp"
      alt="Prefab modular construction facility"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
    <div className="absolute inset-0 bg-[#886c46]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="absolute bottom-8 left-8 right-8 text-white">
      <p className="text-xs tracking-[0.3em] text-white/70 mb-2">MODULAR ENGINEERING</p>
      <h3 className={`${playfair.className} text-3xl font-semibold leading-tight`}>
        Precision Built <br /> For Modern Infrastructure
      </h3>
    </div>
  </div>

  <div className="relative rounded-3xl overflow-hidden group">
    <Image
      src="/siteoffice-2.webp"
      alt="Prefab factory production"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

    <div className="absolute bottom-5 left-5 text-white">
      <p className="text-xs tracking-widest text-white/70">FACTORY CONTROLLED</p>
      <p className={`${playfair.className} text-lg font-semibold`}>Higher Quality</p>
    </div>
  </div>

  <div className="relative rounded-3xl bg-white border border-[#886c46]/20 p-6 flex flex-col justify-between">
    <span className="text-xs tracking-widest text-black/40">DELIVERY SPEED</span>
    <p className={`${playfair.className} text-3xl font-semibold text-[#886c46]`}>
      60%
    </p>
    <span className="text-sm text-black/60">Faster Build Time</span>
  </div>

  <div className="relative md:col-span-2 rounded-3xl overflow-hidden group">
    <Image
      src="/siteoffice-2.webp"
      alt="Prefab housing project"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

    <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-sm">
      <p className="text-xs tracking-[0.25em] text-white/70 mb-2">TURNKEY PROJECTS</p>
      <h4 className={`${playfair.className} text-2xl font-semibold`}>
        Residential • Commercial • Industrial
      </h4>
    </div>
  </div>

</motion.div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

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
                <h3 className={`${playfair.className} text-2xl font-bold text-black`}>
                  Ready to Build Smarter?
                </h3>
                <p className={`${merri.className} text-sm text-gray-400`}>
                  Let{`'`}s discuss your project and create something extraordinary
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} group relative overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-8 py-4 text-sm font-light tracking-wide text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-[#886c46]/20`}
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Outer Glow Effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#886c46]/20 to-[#6f5838]/20 blur-2xl"
      />

      {/* Main Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-[#886c46]/20 bg-linear-to-br from-white via-[#faf8f5] to-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#886c46]/40 group-hover:shadow-[0_20px_60px_rgba(136,108,70,0.12)]">
        
        {/* Decorative Top Corner */}
        <div className="absolute right-0 top-0 h-24 w-24 bg-linear-to-br from-[#886c46]/10 to-transparent blur-xl" />
        
        {/* Icon Section - Large & Bold */}
        <div className="relative px-8 pt-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.12 + 0.2,
              type: "spring",
              stiffness: 200
            }}
            className="inline-flex"
          >
            <div className="relative">
              {/* Icon Background with Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] blur-lg opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#886c46]/80 to-[#6f5838]/80 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div className="h-8 w-8 text-white flex justify-center items-center transition-transform duration-500 group-hover:scale-110 leading-none">
                    <span className={`${merri.className} text-4xl leading-none`}>
                        {feature.number}
                    </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Number Badge - Minimalist */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
            className="absolute right-8 top-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#886c46]/20 bg-white/60 backdrop-blur-sm">
              <span className={`${playfair.className} text-sm font-semibold text-[#886c46]`}>
                {feature.number}
              </span>
            </div>
          </motion.div> */}
        </div>

        {/* Content Section */}
        <div className="relative px-8 pb-8 pt-6">
          
          {/* Title with Accent */}
          <div className="mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '40px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.4 }}
              className="mb-3 h-0.5 rounded-full bg-linear-to-r from-[#886c46] to-transparent"
            />
            <h3 className={`${playfair.className} text-2xl font-semibold leading-tight text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
              {feature.title}
            </h3>
          </div>

          {/* Description */}
          <p className={`${merri.className} mb-8 text-[15px] font-light leading-relaxed text-black`}>
            {feature.description}
          </p>

          {/* Stats Display - Large & Impactful */}
          <div className="mb-6 rounded-2xl border border-[#886c46]/10 bg-linear-to-br from-[#886c46]/5 to-transparent p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-[#886c46]/20 group-hover:bg-[#886c46]/10">
            <div className="flex items-baseline gap-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.12 + 0.5,
                  type: "spring",
                  stiffness: 150
                }}
                className={`${playfair.className} bg-linear-to-r from-[#886c46] to-[#6f5838] bg-clip-text text-5xl font-bold text-transparent transition-all duration-500 group-hover:scale-110`}
              >
                {feature.stat}
              </motion.span>
              <div className="flex flex-col">
                <span className={`${merri.className} text-xs uppercase tracking-[0.15em] text-[#886c46]/90`}>
                  {feature.statLabel}
                </span>
                <span className={`${merri.className} text-xs font-light text-[#5a5248]`}>
                  Improvement
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="relative h-1.5 overflow-hidden rounded-full bg-[#886c46]/10">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.12 + 0.6,
                ease: "easeOut"
              }}
              className="h-full rounded-full bg-linear-to-r from-[#886c46]/12 via-[#a8926d] to-[#886c46]/12"
            />
          </div>
        </div>

        {/* Hover Glow - Bottom Right */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-linear-to-br from-[#886c46]/40 to-[#6f5838]/40 blur-3xl"
        />

        {/* Shimmer Effect on Hover */}
        <motion.div
          animate={{
            x: isHovered ? '100%' : '-100%',
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Floating Shadow */}
      <motion.div
        animate={{
          y: isHovered ? 12 : 0,
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 -z-10 rounded-3xl bg-[#886c46]/30 blur-2xl"
      />
    </motion.div>
  )
}

export default WhyChooseUs