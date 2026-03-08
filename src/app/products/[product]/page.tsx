'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  CheckCircle,
  MapPin,
  Star,
  Plus,
  Minus,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Package,
  X,
} from 'lucide-react'
import Contact from '@/components/Contact'
import { productsData, getProductsByCategory, getProductByName, ProductData } from '@/lib/productsData'
import Hero from '@/components/products/Hero'
import Advantages from '@/components/products/Advantages'
import Variants from '@/components/products/Variants'

interface CountUpProps {
  end: number
  duration?: number
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [motionValue, end, isInView])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(latest).toString()
      }
    })
  }, [springValue])

  return <span ref={nodeRef}>0</span>
}

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

interface FullscreenModalProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  productName: string
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({ images, initialIndex, isOpen, onClose, productName }) => {
  const [current, setCurrent] = useState(initialIndex)

  useEffect(() => {
    setCurrent(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1))

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Main image */}
        <div className="relative w-full h-full max-w-7xl max-h-screen p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`${productName} ${current + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
          <span className={`${merri.className} text-sm text-white/80 font-light tracking-wider`}>
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-2xl overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                i === current ? 'border-[#886c46] opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}



/* ─── ProductPage ─────────────────────────────────────────────────────── */
const ProductPage = () => {
  const params = useParams()
  const productName = decodeURIComponent(params.product as string)
  const product = getProductByName(productName)

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const trustRef = useRef(null)
  const isTrustInView = useInView(trustRef, { once: true, margin: '-100px' })

  const openModal = useCallback((index: number) => {
    setModalIndex(index)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Product Not Found</h1>
          <p className="text-black/60 mb-8">The product you{`'`}re looking for doesn{`'`}t exist.</p>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#886c46] text-white rounded-full">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.name !== product.name)
  const toggleFaq = (index: number) => setExpandedFaq(expandedFaq === index ? null : index)

  

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      <Hero product={product} />

      
      <Advantages product={product} />

      <section className="relative py-24 px-6 md:px-12 bg-black/3 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '64px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />
              <div className="w-6 h-6 rounded-full bg-[#886c46]/10 flex items-center justify-center">
                <Package className="w-3.5 h-3.5 text-[#886c46]" strokeWidth={1.5} />
              </div>
              <span className={`${merri.className} text-xs uppercase tracking-[0.3em] text-[#886c46] font-light`}>Gallery</span>
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-2`}>
              Explore in Detail
            </h2>
            <p className={`${merri.className} text-black/50 font-light`}>
              {product.gallery.length} images · {product.name}
            </p>
          </motion.div>

          {/* 4-image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.gallery.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredGallery(index)}
                onClick={() => openModal(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
                }`}
                style={{ aspectRatio: index === 0 ? '1/1' : '1/1' }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredGallery === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Gradient overlay — deepens on hover */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredGallery === index
                    ? 'bg-linear-to-t from-black/80 via-black/40 to-black/10'
                    : 'bg-linear-to-t from-black/40 via-transparent to-transparent'
                }`} />

                {/* Bottom accent bar — slides up on hover */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-[#886c46] via-[#c9a97a] to-[#886c46] transition-opacity duration-300 ${
                  hoveredGallery === index ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Image number */}
                <div className="absolute top-4 left-4">
                  <span className={`${playfair.className} text-2xl font-bold text-white/30 transition-colors duration-300 ${
                    hoveredGallery === index ? 'text-white/60' : ''
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover: expand icon + label */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-400 ${
                  hoveredGallery === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  <span className={`${merri.className} text-xs text-white/80 font-light tracking-widest uppercase`}>
                    View
                  </span>
                </div>

                {/* Category tag on first image */}
                {index === 0 && (
                  <div className="absolute bottom-5 left-5">
                    <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
                      {product.category}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Variants product={product}/>

      

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '64px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />
              <div className="w-6 h-6 rounded-full bg-[#886c46]/10 flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-[#886c46]" strokeWidth={1.5} />
              </div>
              <span className={`${merri.className} text-xs uppercase tracking-[0.3em] text-[#886c46] font-light`}>FAQ</span>
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}>
              Frequently Asked Questions
            </h2>
            <p className={`${merri.className} text-black/50 font-light text-lg`}>
              Everything you need to know about our {product.name}
            </p>
          </motion.div>

          <div className="space-y-4">
            {product.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white border border-black/10 rounded-2xl overflow-hidden hover:border-[#886c46]/30 hover:shadow-md hover:shadow-[#886c46]/5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-black/2 transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className={`${playfair.className} text-2xl font-bold text-[#886c46]/20`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`${merri.className} text-black font-medium`}>{item.question}</h3>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    expandedFaq === index ? 'bg-[#886c46] text-white' : 'bg-black/5 text-[#886c46]'
                  }`}>
                    {expandedFaq === index
                      ? <Minus className="w-4 h-4" strokeWidth={1.5} />
                      : <Plus className="w-4 h-4" strokeWidth={1.5} />
                    }
                  </div>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-18 border-t border-black/5">
                        <p className={`${merri.className} text-black/60 font-light leading-relaxed pt-4`}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAND ──────────────────────────────────────────────── */}
      <section ref={trustRef} className="relative py-24 px-6 md:px-12 bg-black/3 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={isTrustInView ? { width: '64px' } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />
              <span className={`${merri.className} text-xs uppercase tracking-[0.3em] text-[#886c46] font-light`}>Our Track Record</span>
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}>
              Trusted by Thousands
            </h2>
            <p className={`${merri.className} text-black/50 font-light text-lg`}>
              Our commitment to excellence speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, value: product.trustBand.citiesCovered, label: 'Cities Covered', delay: 0.2 },
              { icon: CheckCircle, value: product.trustBand.completedProjects, label: 'Projects Completed', delay: 0.4 },
              { icon: Star, value: product.trustBand.customerSatisfaction, label: 'Customer Satisfaction', suffix: '%', delay: 0.6 },
            ].map(({ icon: Icon, value, label, suffix, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay }}
                className="group relative p-8 bg-white border border-black/10 rounded-2xl hover:border-[#886c46]/30 hover:shadow-xl hover:shadow-[#886c46]/5 transition-all duration-300 overflow-hidden"
              >
                <span className={`${playfair.className} absolute top-4 right-5 text-7xl font-bold text-black/4 group-hover:text-black/6 transition-colors`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-14 h-14 mb-6 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-lg shadow-[#886c46]/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <div className={`${playfair.className} text-5xl font-bold text-black mb-2`}>
                  <CountUp end={value} />
                  {suffix && <span>{suffix}</span>}
                </div>
                <p className={`${merri.className} text-black/50 font-light`}>{label}</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isTrustInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: delay + 0.2 }}
                  className="absolute bottom-0 left-0 h-1 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="relative py-24 px-6 md:px-12 border-t border-black/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '64px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
                />
                <div className="w-6 h-6 rounded-full bg-[#886c46]/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#886c46]" strokeWidth={1.5} />
                </div>
                <span className={`${merri.className} text-xs uppercase tracking-[0.3em] text-[#886c46] font-light`}>More Like This</span>
              </div>
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}>
                Other {product.category}
              </h2>
              <p className={`${merri.className} text-black/50 font-light text-lg`}>
                Explore more from our {product.category.toLowerCase()} collection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group"
                >
                  <Link href={`/products/${encodeURIComponent(relatedProduct.name)}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-black/5 border border-black/10 hover:border-[#886c46]/50 hover:shadow-lg hover:shadow-[#886c46]/10 transition-all duration-500">
                      <div className="relative h-56 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
                        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="h-full w-full relative">
                          <Image src={relatedProduct.gallery[0]} alt={relatedProduct.name} fill className="object-cover opacity-70" />
                        </motion.div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
                            {relatedProduct.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-8 h-8 rounded-full bg-[#886c46] flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center gap-4 mb-5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
                            <span className={`${merri.className} text-xs text-black/50 font-light`}>Modular</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
                            <span className={`${merri.className} text-xs text-black/50 font-light`}>Custom</span>
                          </div>
                        </div>
                        <motion.span whileHover={{ x: 4 }} className={`${merri.className} inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#886c46] font-light transition-colors`}>
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link href="/products">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${merri.className} group inline-flex items-center gap-2 px-8 py-4 bg-black/5 border border-black/10 hover:border-[#886c46] text-black/80 hover:text-black rounded-full font-light tracking-wide transition-all duration-300 hover:bg-black/10 cursor-pointer`}
                >
                  View All {product.category}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── CONTACT ─────────────────────────────────────────────────── */}
      <Contact />

      {/* Fullscreen Modal */}
      <FullscreenModal
        images={product.gallery}
        initialIndex={modalIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        productName={product.name}
      />
    </div>
  )
}

export default ProductPage