'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { 
  Home, 
  Building2, 
  Factory, 
  Briefcase, 
  FileText, 
  Package,
  ChevronRight,
  Search,
  Filter,
  ArrowUpRight,
  LucideIcon
} from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

interface CategoryData {
  icon: LucideIcon
  description: string
  products: string[]
}

interface CategorySectionProps {
  categoryName: string
  categoryData: CategoryData
  categoryIndex: number
  searchQuery: string
}

interface ProductCardProps {
  product: string
  category: string
  index: number
  isInView: boolean
  categoryIndex: number
}

const productsData: Record<string, CategoryData> = {
  'Wooden Series': {
    icon: Home,
    description: 'Luxury modular wooden structures blending elegance with sustainability',
    products: ['A-Frame Cabin', 'Arc Pod', 'Wooden House', 'Smart House']
  },
  'Portable Solutions': {
    icon: Building2,
    description: 'Quick deployment solutions for construction sites and temporary facilities',
    products: ['Porta Cabin', 'Farmhouse', 'Portable Cabin', 'Bunk House Cabin', 'Containers House', 'Modular Toilet', 'Mobile Toilet', 'Portable Toilet Cabin']
  },
  'Prefab Solutions': {
    icon: Factory,
    description: 'Complete prefabricated structures for residential and commercial use',
    products: ['Prefab Site Offices', 'Prefab Structures', 'Prefabricated Accommodation', 'Prefab House', 'Prefab Schools']
  },
  'Specialized Structures': {
    icon: Briefcase,
    description: 'Custom-designed facilities for specific commercial applications',
    products: ['Clinic Cabin', 'Restaurant Cabin', 'Smoking Room', 'Electrical Room']
  },
  'Security Solutions': {
    icon: FileText,
    description: 'Purpose-built security and monitoring structures',
    products: ['Security Cabins', 'Toll Booth', 'ATM Cabin']
  },
  'PUF Insulated Cabin': {
    icon: Package,
    description: 'Thermally efficient insulated cabins for extreme conditions',
    products: ['Control Room', 'Solar Control Room', 'Clean Room']
  }
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchQuery, setSearchQuery] = useState('')
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const categories = ['All Products', ...Object.keys(productsData)]

  const filteredProducts = (): [string, CategoryData][] => {
    let result = Object.entries(productsData)
    
    // Filter by selected category
    if (selectedCategory !== 'All Products') {
      result = result.filter(([categoryName]) => categoryName === selectedCategory)
    }
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(([, data]) =>
        data.products.some(product =>
          product.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }
    
    return result
  }

  return (
    <div className="min-h-screen bg-white mt-12">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-[#886c46]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 -right-40 w-150 h-150 bg-[#886c46]/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#886c46]/5 rounded-full blur-[200px]" />
      </div>

      <section ref={heroRef} className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-32 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46]/10 px-6 py-2.5 text-xs font-light tracking-[0.3em] text-[#886c46] backdrop-blur-sm mt-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]"></span>
                </span>
                OUR COLLECTION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${playfair.className} mb-6 text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-black`}
            >
              Premium
              <br />
              <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
                Prefab Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${merri.className} max-w-2xl text-lg font-light leading-relaxed text-black/70 mb-12`}
            >
              Explore our comprehensive range of modular structures, engineered for excellence 
              and designed to exceed expectations in every environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl relative"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-5 h-5 text-black/60" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${merri.className} w-full pl-16 pr-6 py-5 bg-black/5 backdrop-blur-2xl border border-black/10 rounded-2xl text-black placeholder-black/40 focus:outline-none focus:border-[#886c46] focus:bg-black/10 transition-all duration-300 font-light`}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
        />
      </section>

      {/* <section className="relative py-12 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-4 h-4 text-[#886c46]" />
              <span className={`${merri.className} text-sm text-black/60 font-light`}>Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`${merri.className} relative px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#886c46] text-white shadow-lg shadow-[#886c46]/20'
                    : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black border border-black/10'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#886c46] rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative py-12 px-6 md:px-12 border-b border-black/5">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap items-center gap-4">
      
      <div className="flex items-center gap-2 shrink-0">
        <Filter className="w-4 h-4 text-[#886c46]" />
        <span className={`${merri.className} text-sm text-black/60 font-light`}>
          Filter:
        </span>
      </div>

      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`${merri.className} relative px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-[#886c46] text-white shadow-lg shadow-[#886c46]/20'
              : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black border border-black/10'
          }`}
        >
          {category}
          {selectedCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-[#886c46] rounded-full -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  </div>
</section>


      {/* Products Grid */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {filteredProducts().map(([categoryName, categoryData], categoryIndex) => (
              <CategorySection
                key={categoryName}
                categoryName={categoryName}
                categoryData={categoryData}
                categoryIndex={categoryIndex}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black mb-6`}>
              Can{`'`}t Find What You{`'`}re Looking For?
            </h2>
            <p className={`${merri.className} text-black/70 font-light text-lg mb-10`}>
              Our team specializes in custom solutions tailored to your specific requirements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full font-light tracking-wide shadow-xl hover:shadow-2xl hover:shadow-[#886c46]/20 transition-all duration-300`}
            >
              Contact Our Experts
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const CategorySection = ({
  categoryName,
  categoryData,
  categoryIndex,
  searchQuery
}: CategorySectionProps) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const Icon = categoryData.icon

  const filteredProducts = categoryData.products.filter(product =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (filteredProducts.length === 0 && searchQuery) return null

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="relative"
    >
      {/* Category Header */}
      <div className="mb-12">
        <div className="flex items-start gap-6 mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: 'spring', duration: 0.8, delay: categoryIndex * 0.1 + 0.2 }}
            className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '64px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.3 }}
              className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
            />
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}>
              {categoryName}
            </h2>
            <p className={`${merri.className} text-black/60 font-light text-lg max-w-3xl`}>
              {categoryData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product}
            product={product}
            category={categoryName}
            index={index}
            isInView={isInView}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.8 }}
        className="mt-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${merri.className} group inline-flex items-center gap-2 px-8 py-4 bg-black/5 border border-black/10 hover:border-[#886c46] text-black/80 hover:text-black rounded-full font-light tracking-wide transition-all duration-300 hover:bg-black/10`}
        >
          View All {categoryName}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const ProductCard = ({
  product,
  category,
  index,
  isInView,
  categoryIndex
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: categoryIndex * 0.1 + index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-black/5 to-black/2 border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 backdrop-blur-sm">
        
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <Image
              src="/siteoffice-2.webp"
              alt={product}
              fill
              className="object-cover opacity-60"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
          
          {/* Hover Glow */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 to-transparent"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
              {category}
            </span>
          </div>

          {/* Number */}
          <div className="absolute bottom-4 right-4">
            <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>
            {product}
          </h3>
          
          {/* Specs */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
              <span className={`${merri.className} text-xs text-black/50 font-light`}>Modular</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
              <span className={`${merri.className} text-xs text-black/50 font-light`}>Custom</span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 4 }}
            className={`${merri.className} group/btn inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#886c46] font-light transition-colors`}
          >
            Learn More
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
          className="absolute bottom-0 left-0 h-1 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
        />

        {/* Hover Shadow */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.3 : 0,
            y: isHovered ? 8 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 -z-10 rounded-2xl bg-[#886c46]/40 blur-xl"
        />
      </div>
    </motion.div>
  )
}

export default Products