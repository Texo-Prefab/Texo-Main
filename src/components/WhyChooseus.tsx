'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'

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
      color: 'from-amber-500 to-orange-600'
    },
    {
      number: '02',
      
      title: 'Sustainable & Eco-Friendly',
      description: 'Factory-controlled production minimizes waste and energy consumption. Our modular designs incorporate recycled materials and green technologies.',
      stat: '40%',
      statLabel: 'Less Waste',
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '03',
      
      title: 'Cost-Effective Solutions',
      description: 'Streamlined manufacturing and reduced labor costs translate to savings for you. Predictable pricing with no surprise expenses or delays.',
      stat: '30%',
      statLabel: 'Savings',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      number: '04',
      
      title: 'Superior Quality Control',
      description: 'Every module is manufactured in our controlled facility, ensuring consistent quality standards that exceed traditional construction methods.',
      stat: '99.8%',
      statLabel: 'Quality Rate',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '05',
      
      title: 'Infinite Customization',
      description: 'From floor plans to finishes, every detail can be tailored to your vision. Modular design doesn\'t mean cookie-cutter results.',
      stat: '100%',
      statLabel: 'Customizable',
      color: 'from-rose-500 to-red-600'
    },
    {
      number: '06',
      
      title: 'Expert Support & Warranty',
      description: 'Dedicated project managers guide you through every phase. Comprehensive warranties and post-construction support ensure your investment is protected.',
      stat: '10 Years',
      statLabel: 'Warranty',
      color: 'from-teal-500 to-cyan-600'
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen  py-24 overflow-hidden">
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#886c46] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6f5838] rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#886c46 1px, transparent 1px), linear-gradient(90deg, #886c46 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

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
            <span className="font-bold bg-linear-to-r from-[#d7a661] via-black to-[#d7a661] bg-clip-text text-transparent">
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
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
    >
            <div className="absolute inset-0 rounded-2xl bg-[#886c46]/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-full overflow-hidden rounded-2xl border  bg-white backdrop-blur-md transition-all duration-500 border-[#886c46] group-hover:border-[#886c46]/50 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                
                <div className="relative z-10 px-6 py-6">

                    <motion.span
                        initial={{ opacity: 0, y: -8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                        className={`${playfair.className} absolute top-5 left-6 text-4xl font-semibold text-[#886c46]`}
                    >
                        {feature.number}
                    </motion.span>

                    <div className="pt-10">

                        <h3 className={`${playfair.className} mb-3 text-xl font-semibold text-black transition-colors duration-300 group-hover:text-[#886c46]`}>
                        {feature.title}
                        </h3>

                        <p className={`${merri.className} mb-6 text-sm font-light leading-relaxed text-black/70 max-w-[32ch]`}>
                        {feature.description}
                        </p>

                        <div className="flex items-baseline gap-2">
                        <span className={`${playfair.className} text-2xl font-semibold text-black transition-colors duration-300 group-hover:text-[#886c46]`}>
                            {feature.stat}
                        </span>
                        <span className={`${merri.className} text-xs uppercase tracking-wider text-black/40`}>
                            {feature.statLabel}
                        </span>
                        </div>

                        <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '50%' } : { width: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                        className="mt-5 h-px bg-[#886c46]/70"
                        />

                    </div>
                </div>


                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#886c46]/15 blur-3xl" />
                </div>

            </div>
    </motion.div>
)
}

export default WhyChooseUs