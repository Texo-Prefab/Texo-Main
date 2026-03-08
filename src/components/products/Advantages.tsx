'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { ProductData } from '@/lib/productsData'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

interface AdvantagesProps {
  product: ProductData
}

export default function Advantages({ product }: AdvantagesProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">

      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-6">
            {/* Icon box — matching CategorySection */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}
              className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
            >
              <LucideIcons.Star className="w-8 h-8 text-white" />
            </motion.div>

            <div className="flex-1">
              {/* Amber rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '64px' } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}
              >
                Why Choose This
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`${merri.className} text-black/60 font-light text-lg max-w-2xl`}
              >
                Every detail of the {product.name} is engineered for performance, comfort, and lasting value.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-[#886c46]/50 bg-linear-to-br from-black/2 to-black/4 transition-all duration-500 p-7"
            >
              {/* Icon */}
              <div className="mb-5 w-12 h-12 rounded-xl bg-linear-to-br from-[#886c46]/15 to-[#886c46]/5 border border-[#886c46]/20 flex items-center justify-center transition-all duration-300 group-hover:from-[#886c46]/25 group-hover:to-[#886c46]/10 group-hover:border-[#886c46]/40">
                {(() => {
                  const iconMap: Record<string, LucideIcon> = {
                    'Trees': LucideIcons.TreePine,
                    'Zap': LucideIcons.Zap,
                    'Wrench': LucideIcons.Wrench,
                    'Thermometer': LucideIcons.Thermometer,
                    'LayoutDashboard': LucideIcons.LayoutDashboard,
                    'CloudRain': LucideIcons.CloudRain,
                  }
                  const IconComponent = iconMap[adv.icon] || LucideIcons.CheckCircle
                  return <IconComponent className="w-5 h-5 text-[#886c46]" />
                })()}
              </div>

              {/* Title */}
              <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors duration-300`}>
                {adv.title}
              </h3>

              {/* Description */}
              <p className={`${merri.className} text-black/60 font-light text-sm leading-relaxed`}>
                {adv.description}
              </p>

              {/* Bottom accent — same as ProductCard */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />
    </section>
  )
}