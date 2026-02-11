'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Merriweather, Inter, Playfair_Display } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const carouselImages = [
  {
    src: '/siteoffice-2.webp',
    alt: 'Modern prefabricated home construction with sustainable materials',
    title: 'Sustainable Living',
    subtitle: 'Eco-friendly prefab homes'
  },
  {
    src: '/siteoffice-2.webp',
    alt: 'Luxury modular construction site showing advanced building techniques',
    title: 'Smart Construction',
    subtitle: 'Technology-driven building'
  },
  {
    src: '/siteoffice-2.webp',
    alt: 'Completed prefab residential project with contemporary architecture',
    title: 'Future Ready',
    subtitle: 'Modern prefab solutions'
  },
]

const bestSellerProducts = [
  {
    id: 1,
    name: 'A Frame Cabin',
    image: '/siteoffice-2.webp',
    category: 'Residential',
    link: '/products/studio-home'
  },
  {
    id: 2,
    name: 'Arc Pod',
    image: '/siteoffice-2.webp',
    category: 'Commercial',
    link: '/products/office-pod'
  },
  {
    id: 3,
    name: 'Wooden House',
    image: '/siteoffice-2.webp',
    category: 'Residential',
    link: '/products/luxury-villa'
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentProduct, setCurrentProduct] = useState(0)
  const { scrollYProgress } = useScroll()

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance product carousel
  useEffect(() => {
    const productTimer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % bestSellerProducts.length)
    }, 4000)
    return () => clearInterval(productTimer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 ">
    
      <div className="sr-only">
        <h1>Premium Prefabricated Construction Solutions | Modern Modular Homes</h1>
        <p>
          Leading prefab construction company specializing in sustainable, modular homes and commercial buildings. 
          Experience faster construction times, cost-effective solutions, and eco-friendly building practices with 
          our innovative prefabricated construction technology.
        </p>
      </div>

      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="relative z-10 mt-24 py-6 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24"
        style={{ y, opacity }}
      >
        <div className="grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Main Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className={`${inter.className} inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-linear-to-r from-[#886c46]/10 to-transparent px-5 py-2.5 text-xs font-medium tracking-wider text-[#f8f5f0] backdrop-blur-md shadow-lg`}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]"></span>
                </span>
                REVOLUTIONIZING CONSTRUCTION SINCE 2015
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${playfair.className} mb-6 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl`}
            >
              Build Your Dream
              <br />
              <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
                In Half The Time
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${inter.className} mb-12 max-w-xl text-base leading-relaxed text-gray-300/90 md:text-lg`}
            >
              Experience the future of construction with our premium prefabricated solutions. 
              Sustainable, efficient, and tailored to your vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12 flex gap-12 border-l border-white/10 pl-8"
            >
              <div className="group cursor-default">
                <div className={`${merri.className} text-3xl font-bold text-[#d6ac70] transition-all group-hover:scale-110 md:text-4xl`}>
                  60%
                </div>
                <p className={`${inter.className} mt-1.5 text-xs uppercase tracking-wider text-gray-400`}>
                  Faster Build
                </p>
              </div>
              <div className="h-auto w-px bg-white/10" />
              <div className="group cursor-default">
                <div className={`${merri.className} text-3xl font-bold text-[#d6ac70] transition-all group-hover:scale-110 md:text-4xl`}>
                  500+
                </div>
                <p className={`${inter.className} mt-1.5 text-xs uppercase tracking-wider text-gray-400`}>
                  Projects Done
                </p>
              </div>
              <div className="h-auto w-px bg-white/10" />
              <div className="group cursor-default">
                <div className={`${merri.className} text-3xl font-bold text-[#d6ac70] transition-all group-hover:scale-110 md:text-4xl`}>
                  95%
                </div>
                <p className={`${inter.className} mt-1.5 text-xs uppercase tracking-wider text-gray-400`}>
                  Satisfaction
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${inter.className} group relative overflow-hidden rounded-full bg-[#886c46] px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-[#886c46]/20`}
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${inter.className} group rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10`}
              >
                Get Free Quote
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 flex items-center gap-3"
            >
              <div className="h-px w-12 bg-linear-to-r from-[#886c46] to-transparent" />
              <p className={`${inter.className} text-xs uppercase tracking-widest text-gray-500`}>
                {carouselImages[currentSlide].title}
              </p>
            </motion.div>
          </div>

          {/* Right Column - Best Seller Product Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[#886c46]/20 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#6f5838]/20 blur-3xl" />

              {/* Best Seller Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 z-10"
              >
                <div className="rounded-full border-2 border-white bg-[#886c46] px-4 py-2 shadow-xl">
                  <span className={`${inter.className} text-xs font-semibold uppercase tracking-wider text-white`}>
                    Best Seller
                  </span>
                </div>
              </motion.div>

              {/* Product Card - Container stays, content changes */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#f8f5f0] shadow-2xl backdrop-blur-sm">
                {/* Product Image - Animated */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProduct}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={bestSellerProducts[currentProduct].image}
                        alt={bestSellerProducts[currentProduct].name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Category Badge - Animated */}
                  <div className="absolute top-4 left-4 z-20">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`category-${currentProduct}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`${inter.className} block rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#886c46] backdrop-blur-sm`}
                      >
                        {bestSellerProducts[currentProduct].category}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Product Info - Animated */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${currentProduct}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className={`${playfair.className} mb-4 text-2xl font-semibold text-[#2a2520]`}
                    >
                      {bestSellerProducts[currentProduct].name}
                    </motion.h3>
                  </AnimatePresence>

                  {/* View Product Button */}
                  <motion.a
                    href={bestSellerProducts[currentProduct].link}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${inter.className} group flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#2a2520]`}
                  >
                    View Product
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>

                {/* Product Navigation Dots */}
                <div className="flex justify-center gap-1.5 pb-4">
                  {bestSellerProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProduct(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentProduct
                          ? 'w-8 bg-[#886c46]'
                          : 'w-1.5 bg-[#886c46]/30 hover:bg-[#886c46]/50'
                      }`}
                      aria-label={`Go to product ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Previous slide"
        >
          <ArrowRight className="h-4 w-4 rotate-180 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4 text-white" />
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-[#886c46]' 
                : 'w-1.5 bg-white/30 hover:bg-white/50 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-10 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.div 
              className="h-1.5 w-1.5 rounded-full bg-white/70"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className={`${inter.className} text-[10px] uppercase tracking-widest text-white/50`}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero