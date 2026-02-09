'use client'
import React, { useRef } from 'react'
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
      description: 'Discover our signature luxury line, including the Arc Pod, A-Frame Cabin, Smart House, and other modular wooden structures. Designed to blend elegance, comfort, and sustainability.',
      image: '/siteoffice-2.webp',
      features: ['Quick Assembly', 'Energy Efficient', 'Custom Layouts'],
      link: '/products/modular-homes'
    },
    {
      id: 2,
      category: 'Residential',
      title: 'Prefab Solutions',
      description: 'Whether it’s a farmhouse, site office, or full-scale prefab house, our modular builds deliver speed, flexibility, and premium design.',
      image: '/siteoffice-2.webp',
      features: ['Premium Materials', 'Spa Integration', 'Smart Home'],
      link: '/products/luxury-villas'
    },
    {
      id: 3,
      category: 'Commercial',
      title: 'Portable Solutions',
      description: 'Explore porta cabins, container houses, bunkhouses, mobile toilets, modular restrooms, and compact office setups, built for convenience and quick deployment.',
      image: '/siteoffice-2.webp',
      features: ['Scalable Design', 'Tech-Ready', 'Modern Interiors'],
      link: '/products/office-spaces'
    },
    {
      id: 4,
      category: 'Commercial',
      title: 'Specialized Structures',
      description: 'Smartly designed prefab schools, clinics, restaurants, factory cabins, electrical rooms, smoking zones, and more, all tailored to perform and built to scale.',
      image: '/siteoffice-2.webp',
      features: ['Brand Customization', 'Flexible Layout', 'Quick Setup'],
      link: '/products/retail-stores'
    },
    {
      id: 6,
      category: 'Industrial',
      title: 'Security Solutions',
      description: 'Purpose-built manufacturing facilities with heavy-duty construction and industrial-grade systems.',
      image: '/siteoffice-2.webp',
      features: ['Heavy Load', 'Ventilation', 'Power Systems'],
      link: '/products/factory-units'
    },
    {
      id: 5,
      category: 'Industrial',
      title: 'PUF Insulated Cabins',
      description: 'From solar control rooms to clean rooms and health centers, our PUF cabins ensure thermal protection, energy efficiency, and structural reliability.',
      image: '/siteoffice-2.webp',
      features: ['High Capacity', 'Climate Control', 'Loading Docks'],
      link: '/products/warehouses'
    },
    
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
                        OUR PRODUCTS
                      </span>
            </motion.div>
          <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`${playfair.className} mb-6 text-4xl font-light leading-tight text-black md:text-5xl lg:text-6xl`}
                    >
                      Prefabricated Solutions
                      <br />
                      <span className="font-bold bg-linear-to-r from-[#d7a661] via-black to-[#d7a661] bg-clip-text text-transparent">
                        For Every Need
                      </span>
            </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${merri.className} mx-auto max-w-2xl text-base font-light leading-relaxed text-[#5a5248]`}
          >
            From residential homes to industrial facilities, our comprehensive range of modular buildings 
            combines innovative design with practical functionality.
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
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#886c46]/20 bg-white/40 p-12 shadow-xl backdrop-blur-sm">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#886c46] to-[#6f5838] shadow-lg">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className={`${playfair.className} mb-3 text-3xl font-semibold text-[#2a2520]`}>
              Don{`'`}t See What You Need?
            </h3>
            <p className={`${merri.className} mb-8 text-base font-light text-[#5a5248]`}>
              We specialize in custom solutions. Let{`'`}s discuss your unique requirements 
              and create a tailored prefab structure just for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#886c46] to-[#6f5838] px-8 py-4 text-sm font-light tracking-wide text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#886c46]/20`}
            >
              <span className="relative z-10">Request Custom Quote</span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          </div>
        </motion.div> */}
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

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-[#886c46]/10 bg-white shadow-md transition-all duration-500 hover:border-[#886c46]/30 hover:shadow-2xl hover:shadow-[#886c46]/10">
        
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden bg-linear-to-br from-[#e5ddd0] to-[#d4cabe]">
          {/* Placeholder for product image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-20 w-20 text-[#886c46]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div> 
          <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="absolute left-4 top-4">
            <span className={`${merri.className} rounded-full bg-white/90 px-3 py-1 text-xs font-light tracking-wide text-[#886c46] backdrop-blur-sm`}>
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className={`${playfair.className} mb-3 text-2xl font-semibold text-[#2a2520] transition-colors duration-300 group-hover:text-[#886c46]`}>
            {product.title}
          </h3>

          <p className={`${merri.className} mb-4 text-sm font-light leading-relaxed text-[#5a5248]`}>
            {product.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {product.features.map((feature: string, idx: number) => (
              <span
                key={idx}
                className={`${merri.className} inline-flex items-center gap-1 rounded-full border border-[#886c46]/20 bg-[#f8f5f0] px-3 py-1 text-xs font-light text-[#886c46]`}
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </span>
            ))}
          </div>

          <motion.a
            href={product.link}
            whileHover={{ x: 5 }}
            className={`${merri.className} group/btn inline-flex items-center gap-2 text-sm font-light text-[#886c46] transition-all hover:gap-3`}
          >
            Explore Details
            <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="h-1 bg-linear-to-r from-[#886c46] to-[#6f5838]"
        />
      </div>
    </motion.article>
  )
}

export default OurProducts