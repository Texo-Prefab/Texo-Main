// 'use client'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
// import { Merriweather, Inter, Playfair_Display } from 'next/font/google'

// const merri = Merriweather({
//   subsets: ['latin'],
//   weight: ['300', '400', '700', '900'],
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
// })

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
// })

// const carouselImages = [
//   {
//     src: '/hero-1.jpg',
//     alt: 'Modern prefabricated home construction with sustainable materials',
//     title: 'Sustainable Living',
//     subtitle: 'Eco-friendly prefab homes'
//   },
//   {
//     src: '/hero-2.jpg',
//     alt: 'Luxury modular construction site showing advanced building techniques',
//     title: 'Smart Construction',
//     subtitle: 'Technology-driven building'
//   },
//   {
//     src: '/hero-3.jpg',
//     alt: 'Completed prefab residential project with contemporary architecture',
//     title: 'Future Ready',
//     subtitle: 'Modern prefab solutions'
//   },
// ]

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const { scrollYProgress } = useScroll()

//   // Parallax effects
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

//   // Auto-advance carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
//   }

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-gray-900">
//       <div className="sr-only">
//         <h1>Premium Prefabricated Construction Solutions | Modern Modular Homes</h1>
//         <p>
//           Leading prefab construction company specializing in sustainable, modular homes and commercial buildings. 
//           Experience faster construction times, cost-effective solutions, and eco-friendly building practices with 
//           our innovative prefabricated construction technology.
//         </p>
//       </div>

//       <motion.div 
//         className="absolute inset-0"
//         style={{ scale }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={carouselImages[currentSlide].src}
//               alt={carouselImages[currentSlide].alt}
//               fill
//               className="object-cover"
//               priority={currentSlide === 0}
//               quality={90}
//             />
//             <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>

//       <motion.div 
//         className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24"
//         style={{ y, opacity }}
//       >
//         <div className="max-w-screen items-center flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-6"
//           >
//             <span className={`${inter.className} inline-block rounded-full border border-[#886c46] bg-[#886c46]/20 px-6 py-2 text-sm font-semibold text-[#f8f5f0] backdrop-blur-sm`}>
//               🏗️ Revolutionizing Construction Since 2015
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className={`${playfair.className} mb-4 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl`}
//           >
//             Build Your Dream
//             <br />
//             <span className="bg-linear-to-r from-[#886c46] via-white to-[#886c46] text-transparent bg-clip-text">In Half The Time</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className={`${inter.className} mb-8 max-w-2xl text-lg text-gray-200 md:text-lg`}
//           >
//             Experience the future of construction with our premium prefabricated solutions. 
//             Sustainable, efficient, and tailored to your vision.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="mb-10 grid grid-cols-3 gap-8 md:gap-12"
//           >
//             <div>
//               <div className={`${merri.className} text-3xl font-bold text-[#886c46] md:text-5xl`}>
//                 60%
//               </div>
//               <p className={`${inter.className} mt-1 text-sm text-gray-300`}>Faster Build Time</p>
//             </div>
//             <div>
//               <div className={`${merri.className} text-3xl font-bold text-[#886c46] md:text-5xl`}>
//                 500+
//               </div>
//               <p className={`${inter.className} mt-1 text-sm text-gray-300`}>Projects Completed</p>
//             </div>
//             <div>
//               <div className={`${merri.className} text-3xl font-bold text-[#886c46] md:text-5xl`}>
//                 95%
//               </div>
//               <p className={`${inter.className} mt-1 text-sm text-gray-300`}>Client Satisfaction</p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="flex flex-wrap gap-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${inter.className} rounded-full bg-[#886c46] px-8 py-4 font-semibold text-white shadow-2xl transition-all hover:bg-[#6f5838]`}
//             >
//               Explore Projects
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${inter.className} rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20`}
//             >
//               Get Free Quote
//             </motion.button>
//           </motion.div>

//           {/* Carousel slide indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1.2 }}
//             className="mt-12"
//           >
//             <p className={`${inter.className} mb-2 text-sm text-gray-400`}>
//               {carouselImages[currentSlide].title} • {carouselImages[currentSlide].subtitle}
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>

//       <div className="absolute bottom-8 right-8 z-20 flex gap-3">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={prevSlide}
//           className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30"
//           aria-label="Previous slide"
//         >
//           <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={nextSlide}
//           className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30"
//           aria-label="Next slide"
//         >
//           <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </motion.button>
//       </div>

//       {/* Dot indicators */}
//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
//         {carouselImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-2 rounded-full transition-all ${
//               index === currentSlide ? 'w-8 bg-[#886c46]' : 'w-2 bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="flex flex-col items-center gap-2"
//         >
//           <span className={`${inter.className} text-xs text-white/70`}>Scroll to explore</span>
//           <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero


'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Merriweather, Inter, Playfair_Display } from 'next/font/google'

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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 py-16">
    
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
        <div className="max-w-5xl">
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
            className={`${playfair.className} mb-6 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl `}
          >
            Build Your Dream
            <br />
            <span className="font-bold bg-linear-to-r from-[#d7a661] via-white to-[#d7a661] bg-clip-text text-transparent">
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
              <div className={`${merri.className} text-3xl font-bold text-[#886c46] transition-all group-hover:scale-110 md:text-4xl`}>
                60%
              </div>
              <p className={`${inter.className} mt-1.5 text-xs uppercase tracking-wider text-gray-400`}>
                Faster Build
              </p>
            </div>
            <div className="h-auto w-px bg-white/10" />
            <div className="group cursor-default">
              <div className={`${merri.className} text-3xl font-bold text-[#886c46] transition-all group-hover:scale-110 md:text-4xl`}>
                500+
              </div>
              <p className={`${inter.className} mt-1.5 text-xs uppercase tracking-wider text-gray-400`}>
                Projects Done
              </p>
            </div>
            <div className="h-auto w-px bg-white/10" />
            <div className="group cursor-default">
              <div className={`${merri.className} text-3xl font-bold text-[#886c46] transition-all group-hover:scale-110 md:text-4xl`}>
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

          {/* Carousel slide indicator with premium touch */}
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
      </motion.div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Previous slide"
        >
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Next slide"
        >
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Dot indicators - More elegant design */}
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

      {/* Scroll indicator - Refined design */}
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