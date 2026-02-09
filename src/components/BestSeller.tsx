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

interface Office {
  id: number
  name: string
  size: string
  image: string
  features: string[]
  badge?: string
}

const bestSellerOffices: Office[] = [
  {
    id: 1,
    name: "Executive Studio",
    size: "120 sq ft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: ["Soundproof walls", "Climate control", "Premium finishes"],
    badge: "Most Popular"
  },
  {
    id: 2,
    name: "Team Hub",
    size: "240 sq ft",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    features: ["Conference setup", "Dual entry", "Smart lighting"],
    badge: "Best Value"
  },
  {
    id: 3,
    name: "Innovation Pod",
    size: "180 sq ft",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    features: ["Creative layout", "Glass walls", "Tech integrated"]
  }
]

const BestSeller = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden">
      
      {/* Background decoration */}
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
        
        <HeaderSection />

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {bestSellerOffices.map((office, index) => (
            <OfficeCard key={office.id} office={office} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

const HeaderSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      className="text-center mb-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-block"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
          </span>
          BESTSELLERS
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${playfair.className} mb-6 text-4xl font-light leading-tight text-black md:text-5xl lg:text-6xl`}
      >
        Our Most Loved Offices,
        <br />
        <span className="font-bold bg-linear-to-r from-[#d7a661] via-black to-[#d7a661] bg-clip-text text-transparent">
          Designed for Excellence
        </span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`${merri.className} mx-auto max-w-2xl text-base font-light leading-relaxed text-black/80`}
      >
        Handpicked designs trusted by hundreds of businesses. Each office combines 
        premium craftsmanship with innovative prefab technology.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: '100px' } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="mx-auto mt-8 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />
    </motion.div>
  )
}

const OfficeCard = ({ office, index }: { office: Office; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-[#886c46]/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-2xl border bg-white backdrop-blur-md transition-all duration-500 border-[#886c46] group-hover:border-[#886c46]/50 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        
        {office.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className="absolute top-4 right-4 z-20 bg-linear-to-r from-[#886c46] to-[#6f5838] text-[#f8f5f0] text-xs font-light tracking-wider px-3 py-1.5 rounded-full shadow-lg"
          >
            {office.badge}
          </motion.div>
        )}

        <div className="relative h-64 overflow-hidden bg-[#f8f5f0]">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={office.image}
            alt={office.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative z-10 p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          >
            <h3 className={`${playfair.className} text-2xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-[#886c46]`}>
              {office.name}
            </h3>
            
            <div className="mb-5">
              <span className={`${merri.className} text-black/60 text-sm font-light`}>{office.size}</span>
            </div>

            <ul className="space-y-2.5 mb-6">
              {office.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.3 + (i * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`${merri.className} flex items-center text-black/70 text-sm font-light`}
                >
                  <svg className="w-4 h-4 text-[#886c46] mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '60%' } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 + 0.5 }}
              className="mb-5 h-px bg-[#886c46]/70"
            />

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`${merri.className} w-full bg-linear-to-r from-[#886c46] to-[#6f5838] text-[#f8f5f0] font-light tracking-wide py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:from-[#6f5838] group-hover:to-[#886c46]`}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#886c46]/15 blur-3xl" />
        </div>
      </div>
    </motion.div>
  )
}



export default BestSeller