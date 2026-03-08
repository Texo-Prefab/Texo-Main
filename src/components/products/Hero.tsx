'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  ArrowUpRight,
} from 'lucide-react'
import { ProductData } from '@/lib/productsData'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

interface HeroProps {
  product: ProductData
}

export default function Hero({ product }: HeroProps) {
  const [activeIndex, setActiveIndex]         = useState(0)
  const [prev, setPrev]                       = useState<number | null>(null)
  const [direction, setDirection]             = useState<1 | -1>(1)
  const [fullscreen, setFullscreen]           = useState(false)
  const [fullscreenIndex, setFullscreenIndex] = useState(0)
  const [dragStart, setDragStart]             = useState<number | null>(null)

  const sectionRef = useRef(null)
  const isInView   = useInView(sectionRef, { once: true })
  const gallery    = product.gallery
  const Icon       = product.icon

  /* ── Navigation ── */
  const goTo = useCallback(
    (index: number, target: 'carousel' | 'fullscreen' = 'carousel') => {
      const len  = gallery.length
      const next = ((index % len) + len) % len
      if (target === 'fullscreen') { setFullscreenIndex(next); return }
      const dir = index > activeIndex || (index === 0 && activeIndex === len - 1) ? 1 : -1
      setDirection(dir as 1 | -1)
      setPrev(activeIndex)
      setActiveIndex(next)
    },
    [gallery.length, activeIndex]
  )

  const openFullscreen  = (i: number) => { setFullscreenIndex(i); setFullscreen(true) }
  const closeFullscreen = () => setFullscreen(false)

  /* ── Keyboard ── */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!fullscreen) return
      if (e.key === 'ArrowRight') goTo(fullscreenIndex + 1, 'fullscreen')
      if (e.key === 'ArrowLeft')  goTo(fullscreenIndex - 1, 'fullscreen')
      if (e.key === 'Escape')     closeFullscreen()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [fullscreen, fullscreenIndex, goTo])

  /* ── Auto-advance ── */
  useEffect(() => {
    if (fullscreen) return
    const t = setInterval(() => goTo(activeIndex + 1), 4800)
    return () => clearInterval(t)
  }, [activeIndex, fullscreen, goTo])

  /* ── Drag / Swipe ── */
  const onDragStart = (x: number) => setDragStart(x)
  const onDragEnd   = (x: number) => {
    if (dragStart === null) return
    const d = dragStart - x
    if (Math.abs(d) > 40) goTo(activeIndex + (d > 0 ? 1 : -1))
    setDragStart(null)
  }

  /* ── Slide variants ── */
  const slideVariants = {
    enter:  (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section
        ref={sectionRef}
        className="relative grid grid-cols-1 lg:grid-cols-2 mt-20 pt-10 lg:pt-20 min-h-screen bg-white overflow-hidden w-screen"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-20"
        />

        {/* ── LEFT: Carousel ── */}
        <div className="relative top-0 flex lg:h-screen flex-col gap-3 p-4 sm:p-6 lg:p-8 lg:pl-10">

          {/* Main slide */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[55vw] sm:h-[45vw] lg:h-full lg:py-14 lg:my-12 overflow-hidden rounded-2xl bg-black shadow-2xl cursor-grab active:cursor-grabbing select-none"
            onClick={() => openFullscreen(activeIndex)}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e)   => onDragEnd(e.clientX)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e)   => onDragEnd(e.changedTouches[0].clientX)}
          >
            {/* Slides */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <Image
                  src={gallery[activeIndex]}
                  alt={`${product.name} view ${activeIndex + 1}`}
                  fill
                  priority
                  className="object-cover opacity-80"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient veil — matching products card style */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />

            {/* Category badge — top left, matching Products page badge style */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute top-4 left-4 z-20"
            >
              <span className={`${merri.className} inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-[#886c46]/40 bg-black/60 backdrop-blur-md text-[#886c46] font-light`}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#886c46]" />
                </span>
                {product.category}
              </span>
            </motion.div>

            {/* Full-view btn */}
            <button
              onClick={() => openFullscreen(activeIndex)}
              className={`${merri.className} absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#886c46]/70 hover:border-[#886c46]/50 font-light`}
            >
              <Maximize2 size={12} />
              Full view
            </button>

            {/* Slide number — big watermark like ProductCard */}
            <div className="absolute bottom-14 right-5 z-10 pointer-events-none">
              <span className={`${playfair.className} text-6xl font-bold text-white/15`}>
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Arrows */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#886c46]/70 hover:border-[#886c46]/50 hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#886c46]/70 hover:border-[#886c46]/50 hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 border-none
                    ${i === activeIndex ? 'w-6 bg-[#886c46]' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>

            {/* Bottom accent line — matching ProductCard */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] z-20"
            />
          </motion.div>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-2 sm:gap-2.5 shrink-0"
          >
            {gallery.map((src, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => goTo(i)}
                className={`group relative flex-1 overflow-hidden rounded-xl border-2 transition-all duration-300
                  ${i === activeIndex
                    ? 'border-[#886c46] shadow-lg shadow-[#886c46]/20'
                    : 'border-black/10 hover:border-[#886c46]/40'}`}
              >
                <div className="relative aspect-video w-full">
                  <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                </div>
                {i !== activeIndex && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                )}
                {i === activeIndex && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#886c46] to-[#a8926d]" />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Info panel ── */}
        <div className="relative flex w-full flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-12 py-10 lg:py-16 lg:max-h-screen bg-linear-to-br from-white to-black/2">

          {/* Decorative rule — matching CategorySection header */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '64px' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
          />

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className={`${merri.className} inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46]/10 px-5 py-2 text-xs font-light tracking-[0.25em] text-[#886c46] uppercase`}>
              <Icon size={12} />
              {product.category}
            </span>
          </motion.div>

          {/* Title — matching products hero h1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} mb-5 text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight text-black`}
          >
            {product.name.split(' ')[0]}
            <br />
            <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
              {product.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Short description — italic, merriweather, like products hero p */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={`${merri.className} mb-7 text-base font-light italic leading-relaxed text-black/60`}
          >
            {product.description}
          </motion.p>

          {/* Long description excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className={`${merri.className} mb-9 text-sm font-light leading-[1.9] text-black/55`}
          >
            {product.longDescription.split('\n\n')[0]}
          </motion.p>

          {/* CTA — matching Products page button style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-8 py-4 text-sm font-light tracking-wide text-white shadow-xl shadow-[#886c46]/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#886c46]/25`}
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-8 py-4 text-sm font-light tracking-wide text-black/70 transition-all duration-300 hover:border-[#886c46] hover:bg-black/10 hover:text-black`}
            >
              View Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-20"
        />
      </section>

      {/* ── FULLSCREEN LIGHTBOX ── */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={closeFullscreen}
            />

            {/* Close */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goTo(fullscreenIndex - 1, 'fullscreen') }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(fullscreenIndex + 1, 'fullscreen') }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#886c46] hover:border-[#886c46] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Main image */}
            <div className="relative w-full h-full max-w-7xl max-h-screen p-4 sm:p-8 pb-28 sm:pb-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={fullscreenIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={gallery[fullscreenIndex]}
                    alt={`${product.name} ${fullscreenIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
              <span className={`${merri.className} text-sm text-white/80 font-light tracking-wider`}>
                {String(fullscreenIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-14 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-xs sm:max-w-2xl overflow-x-auto px-2">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setFullscreenIndex(i) }}
                  className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                    i === fullscreenIndex ? 'border-[#886c46] opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}