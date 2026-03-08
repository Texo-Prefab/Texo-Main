'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import { ProductData } from '@/lib/productsData'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

interface VariantsProps {
  product: ProductData
}

export default function Variants({ product }: VariantsProps) {
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

        {/* Header — identical structure to Advantages */}
        <div className="mb-16">
          <div className="flex items-start gap-6">

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}
              className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
            >
              <LucideIcons.Layers className="w-8 h-8 text-white" />
            </motion.div>

            <div className="flex-1">
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
                Available Variants
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`${merri.className} text-black/60 font-light text-lg max-w-2xl`}
              >
                Choose from our carefully curated range of {product.name} variants, each tailored to different needs and preferences.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Variant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.variants.map((variant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={variant.variantImage}
                  alt={variant.variantName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Bottom accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
                />
              </div>

              {/* Title */}
              <div className="px-6 py-5 bg-white">
                <h3 className={`${playfair.className} text-xl font-semibold text-black group-hover:text-[#886c46] transition-colors duration-300`}>
                  {variant.variantName}
                </h3>
              </div>
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