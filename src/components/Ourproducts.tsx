'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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

const OurProducts = () => {
  const products = [
  {
    id: 1,
    category: 'Residential',
    title: 'Wooden Series',
    description:
      'Premium modular wooden homes crafted for modern living. Our Wooden Series combines natural aesthetics, structural strength, and functional design for residential comfort and long-term durability.',
    image: '/siteoffice-2.webp',
    features: ['Quick Installation', 'Energy Efficient', 'Customizable Design'],
    link: '/products/modular-homes'
  },
  {
    id: 2,
    category: 'Residential',
    title: 'Prefab Solutions',
    description:
      'Versatile prefab housing solutions designed for rapid construction and flexible use. Ideal for farmhouses, site offices, and modular residences built with precision and efficiency.',
    image: '/siteoffice-2.webp',
    features: ['Durable Structure', 'Flexible Layouts', 'Low Maintenance'],
    link: '/products/luxury-villas'
  },
  {
    id: 3,
    category: 'Commercial',
    title: 'Portable Solutions',
    description:
      'Smart portable cabins and modular units engineered for mobility and convenience. Suitable for temporary offices, workforce housing, and compact commercial setups.',
    image: '/siteoffice-2.webp',
    features: ['Compact Design', 'Quick Deployment', 'Weather Resistant'],
    link: '/products/office-spaces'
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Specialized Structures',
    description:
      'Custom-built modular structures tailored for specific commercial and institutional needs. Designed for efficiency, scalability, and reliable performance.',
    image: '/siteoffice-2.webp',
    features: ['Scalable Solutions', 'Custom Configurations', 'High Durability'],
    link: '/products/retail-stores'
  },
  {
    id: 5,
    category: 'Industrial',
    title: 'PUF Insulated Cabins',
    description:
      'Thermally insulated modular cabins built for temperature control and structural stability. Ideal for controlled environments requiring energy efficiency and strength.',
    image: '/siteoffice-2.webp',
    features: ['Thermal Insulation', 'Energy Efficient', 'Robust Construction'],
    link: '/products/warehouses'
  },
  {
    id: 6,
    category: 'Industrial',
    title: 'Security Solutions',
    description:
      'Secure and compact modular units designed for monitoring, guarding, and controlled access environments. Built with reinforced materials for dependable protection.',
    image: '/siteoffice-2.webp',
    features: ['Strong Build', 'Weather Resistant', 'Easy Installation'],
    link: '/products/factory-units'
  }
]


  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[#886c46]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#6f5838]/20 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6 }}
                      className="mb-6 inline-block"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0] backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
                        </span>
                        OUR PRODUCTS
                      </span>
            </motion.div>
          <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`${playfair.className} mb-6 text-4xl font-light leading-tight text-black md:text-5xl lg:text-6xl`}
                    >
                      Prefabricated Solutions
                      <br />
                      <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
                        For Every Need
                      </span>
            </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${merri.className} mx-auto max-w-2xl text-base font-light leading-relaxed text-[#5a5248]`}
          >
            From residential homes to industrial facilities, our comprehensive range of modular buildings 
            combines innovative design with practical functionality.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-8 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-12 gap-4 text-center">
  
  <p className="max-w-2xl text-sm md:text-base text-black/70 leading-relaxed">
    Explore our complete portfolio of prefab construction systems, modular buildings, and turnkey infrastructure solutions built for modern residential, commercial, and industrial projects.
  </p>

  <button className="bg-[#886c46] hover:bg-[#6f5838] transition-all duration-300 px-8 py-3 rounded-full text-white tracking-wide shadow-lg hover:shadow-xl">
    View All Products
  </button>

</div>

      </div>
    </section>
  )
}


// const ProductCard = ({ product, index }: { product: any; index: number }) => {
//   const cardRef = useRef(null)
//   const [isHovered, setIsHovered] = useState(false)
//   const isInView = useInView(cardRef, { once: true, margin: '-100px' })

//   return (
//     <motion.article
//       ref={cardRef}
//       initial={{ opacity: 0, y: 60, rotateX: 15 }}
//       animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
//       transition={{ 
//         duration: 0.8, 
//         delay: index * 0.15,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="group relative perspective-1000"
//     >
//       {/* Main Card Container */}
//       <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-white via-[#faf8f5] to-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(136,108,70,0.15)]">
        
//         {/* Decorative Corner Accent */}
//         <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-br from-[#886c46]/10 to-transparent blur-2xl" />
        
//         {/* Image Section with Overlay */}
//         <div className="relative h-80 overflow-hidden">
//           <motion.div
//             animate={{ scale: isHovered ? 1.1 : 1 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className="h-full w-full"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Gradient Overlays */}
//           <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
//           <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//           {/* Category Badge - Floating Design */}
//           <motion.div
//             initial={{ y: -10, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
//             transition={{ delay: index * 0.15 + 0.3 }}
//             className="absolute left-6 top-6"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-white blur-md" />
//               <span className={`${merri.className} relative block rounded-2xl border border-white/40 bg-white/90 px-4 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-[#886c46] shadow-lg backdrop-blur-sm`}>
//                 {product.category}
//               </span>
//             </div>
//           </motion.div>

//           {/* Number Badge - Large Watermark */}
//           <div className="absolute bottom-6 right-6">
//             <span className={`${playfair.className} text-8xl font-bold text-white/40 transition-all duration-500 group-hover:text-white/20`}>
//               {String(index + 1).padStart(2, '0')}
//             </span>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="relative px-8 py-8">
          
//           {/* Title with Accent Line */}
//           <div className="mb-6">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={isInView ? { width: '48px' } : { width: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
//               className="mb-3 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
//             />
//             <h3 className={`${playfair.className} text-3xl font-semibold leading-tight text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
//               {product.title}
//             </h3>
//           </div>

//           {/* Description */}
//           <p className={`${merri.className} mb-8 text-[15px] font-light leading-relaxed text-[#5a5248]`}>
//             {product.description}
//           </p>

//           {/* Features - Modern List Design */}
//           <div className="mb-8 space-y-3">
//             {product.features.map((feature: string, idx: number) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.15 + 0.5 + idx * 0.1 
//                 }}
//                 className="group/feature flex items-start gap-3"
//               >
//                 <div className="mt-1 shrink-0">
//                   <div className="flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] shadow-sm transition-transform duration-300 group-hover/feature:scale-110">
//                     <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                 </div>
//                 <span className={`${merri.className} text-sm font-light text-[#5a5248] transition-colors duration-300 group-hover/feature:text-[#886c46]`}>
//                   {feature}
//                 </span>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA Section - Split Design */}
//           <div className="flex items-center justify-between border-t border-[#886c46]/10 pt-6">
            
//             {/* View Details Text */}
//             <div className="flex flex-col">
//               <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] text-[#886c46]/60`}>
//                 Project
//               </span>
//               <span className={`${merri.className} text-xs font-light text-[#5a5248]`}>
//                 View Details
//               </span>
//             </div>

//             <motion.a
//               href={product.link}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group/btn relative overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-6 py-3 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-[#886c46]/20"
//             >
//               <span className={`${merri.className} relative z-10 flex items-center gap-2 text-sm font-light tracking-wide text-white`}>
//                 Explore
//                 <motion.svg
//                   animate={{ x: isHovered ? 4 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </motion.svg>
//               </span>
              
//               {/* Button Gradient Overlay */}
//               <motion.div
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0 bg-linear-to-r from-[#6f5838] to-[#886c46]"
//               />
//             </motion.a>
//           </div>
//         </div>

//         {/* Bottom Accent Bar */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.15 + 0.6, ease: 'easeInOut' }}
//           className="h-1.5 origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
//         />

//         {/* Hover Glow Effect */}
//         <motion.div
//           animate={{ opacity: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.5 }}
//           className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#886c46]/20 blur-3xl"
//         />
//       </div>

//       {/* Floating Shadow Effect */}
//       <motion.div
//         animate={{
//           y: isHovered ? 8 : 0,
//           opacity: isHovered ? 0.4 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//         className="absolute inset-0 -z-10 rounded-3xl bg-[#886c46]/30 blur-xl"
//       />
//     </motion.article>
//   )
// }

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative perspective-1000 h-full"
    >
      <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-white via-[#faf8f5] to-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(136,108,70,0.15)]">
        
        {/* Decorative Accent */}
        <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-br from-[#886c46]/10 to-transparent blur-2xl" />
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-full w-full"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category Badge */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="absolute left-6 top-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/12 blur-md" />
              <span className={`${merri.className} relative block rounded-2xl border border-white/40 bg-white/90 px-4 py-2 text-[10px] font-light uppercase tracking-[0.2em] text-[#886c46] shadow-lg backdrop-blur-sm`}>
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Number Watermark */}
          <div className="absolute bottom-6 right-6">
            <span className={`${playfair.className} text-7xl font-bold text-white/40 transition-all duration-500 group-hover:text-white/60`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative px-8 py-6">
          
          {/* Title */}
          <div className="mb-5">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '48px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              className="mb-3 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
            />
            <h3 className={`${playfair.className} text-3xl font-semibold leading-tight text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
              {product.title}
            </h3>
          </div>

          {/* Description */}
          <p className={`${merri.className} mb-6 text-[15px] font-light leading-relaxed text-[#5a5248]`}>
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-6 space-y-2.5">
            {product.features.map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 0.5 + idx * 0.1 
                }}
                className="group/feature flex items-start gap-3"
              >
                <div className="mt-1 shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] shadow-sm transition-transform duration-300 group-hover/feature:scale-110">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className={`${merri.className} text-sm font-light text-[#5a5248] transition-colors duration-300 group-hover/feature:text-[#886c46]`}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between border-t border-[#886c46]/10 pt-5">
            
            <div className="flex flex-col">
              <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] text-[#886c46]/60`}>
                Project
              </span>
              <span className={`${merri.className} text-xs font-light text-[#5a5248]`}>
                View Details
              </span>
            </div>

            <motion.a
              href={product.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-6 py-3 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-[#886c46]/20"
            >
              <span className={`${merri.className} relative z-10 flex items-center gap-2 text-sm font-light tracking-wide text-white`}>
                Explore
                <motion.svg
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>

              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-linear-to-r from-[#6f5838] to-[#886c46]"
              />
            </motion.a>
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
  initial={{ scaleX: 0 }}
  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
  transition={{ duration: 0.8, delay: index * 0.15 + 0.6, ease: 'easeInOut' }}
  className="absolute bottom-0 left-0 h-1.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
/>


        {/* Hover Glow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#886c46]/20 blur-3xl"
        />
      </div>

      {/* Floating Shadow */}
      <motion.div
        animate={{
          y: isHovered ? 8 : 0,
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 -z-10 rounded-3xl bg-[#886c46]/30 blur-xl"
      />
    </motion.article>
  )
}



export default OurProducts