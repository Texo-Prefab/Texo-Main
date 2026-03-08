// 'use client'
// import React, { useState, useRef, useEffect } from 'react'
// import { motion, useInView, AnimatePresence } from 'framer-motion'
// import { Merriweather, Playfair_Display } from 'next/font/google'
// import Image from 'next/image'
// import Link from 'next/link'
// import { 
//   Home, 
//   Building2, 
//   Factory, 
//   Briefcase, 
//   FileText, 
//   Package,
//   ChevronRight,
//   ChevronLeft,
//   Search,
//   Filter,
//   ArrowUpRight,
//   LucideIcon
// } from 'lucide-react'

// const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

// interface CategoryData {
//   icon: LucideIcon
//   description: string
//   products: string[]
// }

// interface CategorySectionProps {
//   categoryName: string
//   categoryData: CategoryData
//   categoryIndex: number
//   searchQuery: string
//   onViewAll: (categoryName: string, categoryData: CategoryData) => void
// }

// interface ProductCardProps {
//   product: string
//   category: string
//   index: number
//   isInView: boolean
//   categoryIndex: number
// }

// const productsData: Record<string, CategoryData> = {
//   'Wooden Series': {
//     icon: Home,
//     description: 'Luxury modular wooden structures blending elegance with sustainability',
//     products: ['A-Frame Cabin', 'Arc Pod', 'Wooden House', 'Smart House']
//   },
//   'Portable Solutions': {
//     icon: Building2,
//     description: 'Quick deployment solutions for construction sites and temporary facilities',
//     products: ['Porta Cabin', 'Farmhouse', 'Portable Cabin', 'Bunk House Cabin', 'Containers House', 'Modular Toilet', 'Mobile Toilet', 'Portable Toilet Cabin']
//   },
//   'Prefab Solutions': {
//     icon: Factory,
//     description: 'Complete prefabricated structures for residential and commercial use',
//     products: ['Prefab Site Offices', 'Prefab Structures', 'Prefabricated Accommodation', 'Prefab House', 'Prefab Schools']
//   },
//   'Specialized Structures': {
//     icon: Briefcase,
//     description: 'Custom-designed facilities for specific commercial applications',
//     products: ['Clinic Cabin', 'Restaurant Cabin', 'Smoking Room', 'Electrical Room']
//   },
//   'Security Solutions': {
//     icon: FileText,
//     description: 'Purpose-built security and monitoring structures',
//     products: ['Security Cabins', 'Toll Booth', 'ATM Cabin']
//   },
//   'PUF Insulated Cabin': {
//     icon: Package,
//     description: 'Thermally efficient insulated cabins for extreme conditions',
//     products: ['Control Room', 'Solar Control Room', 'Clean Room']
//   }
// }

// /* ══════════════════════════════════════════
//    FULL-SCREEN CATEGORY PAGE (fake route)
// ══════════════════════════════════════════ */
// const CategoryPage = ({
//   categoryName,
//   categoryData,
//   onBack,
// }: {
//   categoryName: string
//   categoryData: CategoryData
//   onBack: () => void
// }) => {
//   const Icon = categoryData.icon
//   const headerRef = useRef(null)
//   const isHeaderInView = useInView(headerRef, { once: true })

//   // Lock body scroll while open
//   useEffect(() => {
//     document.body.style.overflow = 'hidden'
//     return () => { document.body.style.overflow = '' }
//   }, [])

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: '100%' }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: '100%' }}
//       transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className="fixed inset-0 z-50 bg-white overflow-y-auto"
//     >
//       {/* ── Hero banner ── */}
//       <section ref={headerRef} className="relative h-[55vh] min-h-[380px] overflow-hidden">
//         {/* Background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/products-hero.png"
//             alt={categoryName}
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
//         </div>

//         {/* Top decorative line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isHeaderInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 1.2, ease: 'easeInOut' }}
//           className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-10"
//         />

//         {/* Back button */}
//         <div className="absolute top-6 left-6 z-20">
//           <motion.button
//             initial={{ opacity: 0, x: -16 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             onClick={onBack}
//             className={`${merri.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 border border-white/20 text-white/90 text-sm font-light backdrop-blur-md hover:bg-[#886c46]/80 hover:border-[#886c46]/60 transition-all duration-300`}
//           >
//             <ChevronLeft size={16} />
//             Back to Products
//           </motion.button>
//         </div>

//         {/* Hero content */}
//         <div className="absolute inset-0 flex flex-col justify-end px-8 sm:px-16 pb-12 z-10">
//           {/* Category badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mb-5"
//           >
//             <span className={`${merri.className} inline-flex items-center gap-2 rounded-full border border-[#886c46]/40 bg-[#886c46]/80 px-5 py-2 text-xs font-light tracking-[0.25em] text-white backdrop-blur-sm uppercase`}>
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
//                 <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
//               </span>
//               {categoryName}
//             </span>
//           </motion.div>

//           {/* Icon + Title */}
//           <div className="flex items-end gap-5">
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={isHeaderInView ? { scale: 1, rotate: 0 } : {}}
//               transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
//               className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
//             >
//               <Icon className="w-8 h-8 text-white" />
//             </motion.div>

//             <div>
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={isHeaderInView ? { width: '64px' } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="mb-3 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
//               />
//               <motion.h1
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.7, delay: 0.25 }}
//                 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-light leading-[1] text-white`}
//               >
//                 {categoryName.split(' ')[0]}
//                 <br />
//                 <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
//                   {categoryName.split(' ').slice(1).join(' ')}
//                 </span>
//               </motion.h1>
//             </div>
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className={`${merri.className} mt-4 max-w-2xl text-base font-light leading-relaxed text-white/70`}
//           >
//             {categoryData.description}
//           </motion.p>
//         </div>

//         {/* Bottom decorative line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isHeaderInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
//           className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-10"
//         />
//       </section>

//       {/* ── Product count bar ── */}
//       <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-black/5 px-8 sm:px-16 py-4 flex items-center justify-between">
//         <span className={`${merri.className} text-sm text-black/50 font-light`}>
//           {categoryData.products.length} products in this series
//         </span>
//         <motion.button
//           whileHover={{ scale: 1.04 }}
//           whileTap={{ scale: 0.96 }}
//           onClick={onBack}
//           className={`${merri.className} inline-flex items-center gap-1.5 text-sm text-[#886c46] font-light hover:underline underline-offset-4`}
//         >
//           <ChevronLeft size={14} />
//           All Products
//         </motion.button>
//       </div>

//       {/* ── Product grid ── */}
//       <section className="px-6 sm:px-16 py-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {categoryData.products.map((product, index) => (
//               <CategoryPageCard
//                 key={product}
//                 product={product}
//                 category={categoryName}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="px-6 sm:px-16 py-20 border-t border-black/5">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-black mb-4`}>
//             Need a Custom Solution?
//           </h2>
//           <p className={`${merri.className} text-black/60 font-light text-base mb-8`}>
//             Every structure can be tailored to your exact specifications and site requirements.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`${merri.className} inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full font-light tracking-wide shadow-xl hover:shadow-2xl hover:shadow-[#886c46]/20 transition-all duration-300`}
//           >
//             Contact Our Experts
//             <ArrowUpRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>
//     </motion.div>
//   )
// }

// /* ── Full card for the category page ── */
// const CategoryPageCard = ({
//   product,
//   category,
//   index,
// }: {
//   product: string
//   category: string
//   index: number
// }) => {
//   const [hovered, setHovered] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-60px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 bg-white"
//     >
//       {/* Image */}
//       <div className="relative h-52 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
//         <motion.div
//           animate={{ scale: hovered ? 1.08 : 1 }}
//           transition={{ duration: 0.6 }}
//           className="h-full w-full"
//         >
//           <Image
//             src="/siteoffice-2.webp"
//             alt={product}
//             fill
//             className="object-cover opacity-70"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

//         {/* Hover glow */}
//         <motion.div
//           animate={{ opacity: hovered ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 to-transparent"
//         />

//         {/* Category badge */}
//         <div className="absolute top-4 left-4">
//           <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
//             {category}
//           </span>
//         </div>

//         {/* Number watermark */}
//         <div className="absolute bottom-4 right-4">
//           <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>
//             {String(index + 1).padStart(2, '0')}
//           </span>
//         </div>

//         {/* Bottom accent */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : {}}
//           transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
//           className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 bg-white">
//         <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>
//           {product}
//         </h3>

//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex items-center gap-1.5">
//             <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
//             <span className={`${merri.className} text-xs text-black/50 font-light`}>Modular</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
//             <span className={`${merri.className} text-xs text-black/50 font-light`}>Custom</span>
//           </div>
//         </div>

//         {/* View button → actual route */}
//         <Link
//           href={`/products/${encodeURIComponent(product)}`}
//           className={`${merri.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#886c46]/10 border border-[#886c46]/20 text-[#886c46] text-xs font-light tracking-wide hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-200`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           View Product
//           <ArrowUpRight size={13} />
//         </Link>
//       </div>

//       {/* Hover shadow */}
//       <motion.div
//         animate={{ opacity: hovered ? 0.3 : 0, y: hovered ? 8 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="absolute inset-0 -z-10 rounded-2xl bg-[#886c46]/40 blur-xl"
//       />
//     </motion.div>
//   )
// }

// /* ══════════════════════════════════════════
//    MAIN PRODUCTS PAGE
// ══════════════════════════════════════════ */
// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Products')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activePage, setActivePage] = useState<{ name: string; data: CategoryData } | null>(null)
//   const heroRef = useRef(null)
//   const isHeroInView = useInView(heroRef, { once: true })

//   const categories = ['All Products', ...Object.keys(productsData)]

//   const filteredProducts = (): [string, CategoryData][] => {
//     let result = Object.entries(productsData)
//     if (selectedCategory !== 'All Products') {
//       result = result.filter(([n]) => n === selectedCategory)
//     }
//     if (searchQuery) {
//       result = result.filter(([, d]) =>
//         d.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
//       )
//     }
//     return result
//   }

//   const openPage  = (name: string, data: CategoryData) => setActivePage({ name, data })
//   const closePage = () => setActivePage(null)

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ── Fake category page slides over everything ── */}
//       <AnimatePresence>
//         {activePage && (
//           <CategoryPage
//             categoryName={activePage.name}
//             categoryData={activePage.data}
//             onBack={closePage}
//           />
//         )}
//       </AnimatePresence>

//       {/* Hero */}
//       <section ref={heroRef} className="relative pt-32 mt-12 pb-20 px-6 md:px-12 overflow-hidden h-screen">
//         <div className="absolute inset-0 z-10">
//           <Image src="/products-hero.png" alt="Background" fill priority className="object-cover" />
//           <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
//         </div>
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ duration: 1.2, ease: 'easeInOut' }}
//             className="absolute top-32 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
//           />

//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6 }}
//               className="mb-8 inline-block"
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46]/80 px-6 py-2.5 text-xs font-light tracking-[0.3em] text-white backdrop-blur-sm mt-4">
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75" />
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
//                 </span>
//                 OUR COLLECTION
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className={`${playfair.className} mb-6 text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-white`}
//             >
//               Premium
//               <br />
//               <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
//                 Prefab Solutions
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className={`${merri.className} max-w-2xl text-lg font-light leading-relaxed text-white/70 mb-12`}
//             >
//               Explore our comprehensive range of modular structures, engineered for excellence 
//               and designed to exceed expectations in every environment.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="max-w-2xl relative"
//             >
//               <div className="relative">
//                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-5 h-5 text-white/60" />
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className={`${merri.className} w-full pl-16 pr-6 py-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-[#886c46] focus:bg-white/10 transition-all duration-300 font-light`}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
//           className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
//         />
//       </section>

//       {/* Filter bar */}
//       <section className="relative py-12 px-6 md:px-12 border-b border-black/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="flex items-center gap-2 shrink-0">
//               <Filter className="w-4 h-4 text-[#886c46]" />
//               <span className={`${merri.className} text-sm text-black/60 font-light`}>Filter:</span>
//             </div>
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`${merri.className} relative px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 whitespace-nowrap ${
//                   selectedCategory === category
//                     ? 'bg-[#886c46] text-white shadow-lg shadow-[#886c46]/20'
//                     : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black border border-black/10'
//                 }`}
//               >
//                 {category}
//                 {selectedCategory === category && (
//                   <motion.div
//                     layoutId="activeCategory"
//                     className="absolute inset-0 bg-[#886c46] rounded-full -z-10"
//                     transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="relative py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-24">
//             {filteredProducts().map(([categoryName, categoryData], categoryIndex) => (
//               <CategorySection
//                 key={categoryName}
//                 categoryName={categoryName}
//                 categoryData={categoryData}
//                 categoryIndex={categoryIndex}
//                 searchQuery={searchQuery}
//                 onViewAll={openPage}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative py-24 px-6 md:px-12 border-t border-black/5">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black mb-6`}>
//               Can{`'`}t Find What You{`'`}re Looking For?
//             </h2>
//             <p className={`${merri.className} text-black/70 font-light text-lg mb-10`}>
//               Our team specializes in custom solutions tailored to your specific requirements
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`${merri.className} inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full font-light tracking-wide shadow-xl hover:shadow-2xl hover:shadow-[#886c46]/20 transition-all duration-300`}
//             >
//               Contact Our Experts
//               <ArrowUpRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// /* ── Category section (unchanged) ── */
// const CategorySection = ({
//   categoryName,
//   categoryData,
//   categoryIndex,
//   searchQuery,
//   onViewAll,
// }: CategorySectionProps) => {
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
//   const Icon = categoryData.icon

//   const filteredProducts = categoryData.products.filter(product =>
//     product.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   if (filteredProducts.length === 0 && searchQuery) return null

//   return (
//     <motion.div
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//       className="relative"
//     >
//       <div className="mb-12">
//         <div className="flex items-start gap-6 mb-6">
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
//             transition={{ type: 'spring', duration: 0.8, delay: categoryIndex * 0.1 + 0.2 }}
//             className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
//           >
//             <Icon className="w-8 h-8 text-white" />
//           </motion.div>
//           <div className="flex-1">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={isInView ? { width: '64px' } : { width: 0 }}
//               transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.3 }}
//               className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
//             />
//             <h2 className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}>
//               {categoryName}
//             </h2>
//             <p className={`${merri.className} text-black/60 font-light text-lg max-w-3xl`}>
//               {categoryData.description}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product, index) => (
//           <ProductCard
//             key={product}
//             product={product}
//             category={categoryName}
//             index={index}
//             isInView={isInView}
//             categoryIndex={categoryIndex}
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.8 }}
//         className="mt-12 text-center"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => onViewAll(categoryName, categoryData)}
//           className={`${merri.className} group inline-flex items-center gap-2 px-8 py-4 bg-black/5 border border-black/10 hover:border-[#886c46] text-black/80 hover:text-black rounded-full font-light tracking-wide transition-all duration-300 hover:bg-black/10`}
//         >
//           View All {categoryName}
//           <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   )
// }

// /* ── Product card (unchanged) ── */
// const ProductCard = ({ product, category, index, isInView, categoryIndex }: ProductCardProps) => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <Link href={`/products/${encodeURIComponent(product)}`}>
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//         transition={{ duration: 0.6, delay: categoryIndex * 0.1 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="group relative cursor-pointer"
//       >
//         <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-black/5 to-black/2 border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 backdrop-blur-sm">
//           <div className="relative h-56 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
//             <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.6 }} className="h-full w-full">
//               <Image src="/siteoffice-2.webp" alt={product} fill className="object-cover opacity-60" />
//             </motion.div>
//             <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
//             <motion.div animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 to-transparent" />
//             <div className="absolute top-4 left-4">
//               <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>{category}</span>
//             </div>
//             <div className="absolute bottom-4 right-4">
//               <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>{String(index + 1).padStart(2, '0')}</span>
//             </div>
//           </div>
//           <div className="p-6 bg-white">
//             <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>{product}</h3>
//             <div className="flex items-center gap-4 mb-6">
//               <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" /><span className={`${merri.className} text-xs text-black/50 font-light`}>Modular</span></div>
//               <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" /><span className={`${merri.className} text-xs text-black/50 font-light`}>Custom</span></div>
//             </div>
//             <motion.button whileHover={{ x: 4 }} className={`${merri.className} group/btn inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#886c46] font-light transition-colors`}>
//               Learn More <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
//             </motion.button>
//           </div>
//           <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.8, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }} className="absolute bottom-0 left-0 h-1 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]" />
//           <motion.div animate={{ opacity: isHovered ? 0.3 : 0, y: isHovered ? 8 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 -z-10 rounded-2xl bg-[#886c46]/40 blur-xl" />
//         </div>
//       </motion.div>
//     </Link>
//   )
// }

// export default Products



'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Home, 
  Building2, 
  Factory, 
  Briefcase, 
  FileText, 
  Package,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  ArrowUpRight,
  LucideIcon
} from 'lucide-react'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const A = '/siteoffice-2.webp'
const B = '/products-hero.png'

interface ProductItem {
  name: string
  image: string
}

interface CategoryData {
  icon: LucideIcon
  description: string
  longDescription: string
  products: ProductItem[]
}

interface CategorySectionProps {
  categoryName: string
  categoryData: CategoryData
  categoryIndex: number
  searchQuery: string
  onViewAll: (categoryName: string, categoryData: CategoryData) => void
}

interface ProductCardProps {
  product: ProductItem
  category: string
  index: number
  isInView: boolean
  categoryIndex: number
}

const productsData: Record<string, CategoryData> = {
  'Wooden Series': {
    icon: Home,
    description: 'Luxury modular wooden structures blending elegance with sustainability',
    longDescription: 'Our Wooden Series represents the finest in sustainable modular architecture. Each structure is crafted from responsibly sourced timber, precision-engineered for structural integrity while preserving the warmth and character of natural wood. Whether nestled in a forest retreat or set against an urban backdrop, these cabins deliver a living experience that is both timeless and contemporary — marrying the craftsmanship of traditional joinery with the efficiency of modern prefabrication.',
    products: [
      { name: 'A-Frame Cabin',  image: A },
      { name: 'Arc Pod',        image: B },
      { name: 'Wooden House',   image: A },
      { name: 'Smart House',    image: B },
    ]
  },
  'Portable Solutions': {
    icon: Building2,
    description: 'Quick deployment solutions for construction sites and temporary facilities',
    longDescription: 'Designed for speed without sacrifice, our Portable Solutions are engineered to be operational within hours of delivery. Each unit is built to withstand demanding site conditions, offering weatherproof shells, thermal insulation, and modular interior configurations. From single-room site offices to multi-unit bunkhouse complexes, this series gives project managers a dependable, cost-effective answer to temporary accommodation and operational space.',
    products: [
      { name: 'Porta Cabin',           image: B },
      { name: 'Farmhouse',             image: A },
      { name: 'Portable Cabin',        image: B },
      { name: 'Bunk House Cabin',      image: A },
      { name: 'Containers House',      image: B },
      { name: 'Modular Toilet',        image: A },
      { name: 'Mobile Toilet',         image: B },
      { name: 'Portable Toilet Cabin', image: A },
    ]
  },
  'Prefab Solutions': {
    icon: Factory,
    description: 'Complete prefabricated structures for residential and commercial use',
    longDescription: 'Our Prefab Solutions combine factory precision with on-site flexibility. Every component is manufactured under controlled conditions, ensuring consistent quality and dramatically reduced construction timelines. The result is a permanent-grade structure — complete with plumbing, electrical, and finishing options — delivered at a fraction of the time and cost of conventional builds. Ideal for schools, housing colonies, offices, and beyond.',
    products: [
      { name: 'Prefab Site Offices',          image: A },
      { name: 'Prefab Structures',            image: B },
      { name: 'Prefabricated Accommodation',  image: A },
      { name: 'Prefab House',                 image: B },
      { name: 'Prefab Schools',               image: A },
    ]
  },
  'Specialized Structures': {
    icon: Briefcase,
    description: 'Custom-designed facilities for specific commercial applications',
    longDescription: 'Not every need fits a standard template. Our Specialized Structures are purpose-engineered for specific commercial environments — from hygienic clinical cabins and hospitality-ready restaurant units to controlled smoking enclosures and dedicated electrical rooms. Each structure meets the technical and regulatory requirements of its use-case, delivered with the same build quality and speed that defines all of our product lines.',
    products: [
      { name: 'Clinic Cabin',     image: B },
      { name: 'Restaurant Cabin', image: A },
      { name: 'Smoking Room',     image: B },
      { name: 'Electrical Room',  image: A },
    ]
  },
  'Security Solutions': {
    icon: FileText,
    description: 'Purpose-built security and monitoring structures',
    longDescription: 'Security infrastructure demands reliability above all else. Our Security Solutions series delivers robust, tamper-resistant structures designed for round-the-clock operation in exposed environments. From manned guard posts at facility perimeters to revenue-collecting toll booths and weather-protected ATM enclosures, every unit is built with reinforced panels, secure access points, and climate control options to keep personnel and equipment safe.',
    products: [
      { name: 'Security Cabins', image: A },
      { name: 'Toll Booth',      image: B },
      { name: 'ATM Cabin',       image: A },
    ]
  },
  'PUF Insulated Cabin': {
    icon: Package,
    description: 'Thermally efficient insulated cabins for extreme conditions',
    longDescription: 'Where temperature control is non-negotiable, our PUF Insulated Cabin series excels. Polyurethane foam core panels provide industry-leading thermal resistance, keeping interiors stable regardless of external climate extremes. These structures are the first choice for control rooms, solar monitoring stations, and clean-room environments where temperature variance, dust ingress, and humidity must be precisely managed throughout the operational lifecycle.',
    products: [
      { name: 'Control Room',       image: B },
      { name: 'Solar Control Room', image: A },
      { name: 'Clean Room',         image: B },
    ]
  }
}

/* ══════════════════════════════════════════
   FULL-SCREEN CATEGORY PAGE
══════════════════════════════════════════ */
const CategoryPage = ({
  categoryName,
  categoryData,
  onBack,
}: {
  categoryName: string
  categoryData: CategoryData
  onBack: () => void
}) => {
  const Icon = categoryData.icon
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const descRef = useRef(null)
  const isDescInView = useInView(descRef, { once: true, margin: '-60px' })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const words = categoryName.split(' ')
  const firstWord  = words[0]
  const restWords  = words.slice(1).join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto z-999999"
    >
      {/* ── Hero banner ── */}
      <section ref={headerRef} className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/products-hero.png" alt={categoryName} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        </div>

        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeaderInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-10"
        />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-20">
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={onBack}
            className={`${merri.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 border border-white/20 text-white/90 text-sm font-light backdrop-blur-md hover:bg-[#886c46]/80 hover:border-[#886c46]/60 transition-all duration-300`}
          >
            <ChevronLeft size={16} />
            Back to Products
          </motion.button>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 sm:px-16 pb-14 z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5"
          >
            <span className={`${merri.className} inline-flex items-center gap-2 rounded-full border border-[#886c46]/40 bg-[#886c46]/80 px-5 py-2 text-xs font-light tracking-[0.25em] text-white backdrop-blur-sm uppercase`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              {categoryName}
            </span>
          </motion.div>

          {/* Icon + Title */}
          <div className="flex items-end gap-5 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isHeaderInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
              className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>

            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isHeaderInView ? { width: '64px' } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-3 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-white`}
              >
                {firstWord}
                {restWords && (
                  <>
                    <br />
                    <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
                      {restWords}
                    </span>
                  </>
                )}
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${merri.className} max-w-2xl text-base font-light leading-relaxed text-white/70`}
          >
            {categoryData.description}
          </motion.p>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeaderInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent z-10"
        />
      </section>

      {/* ── Sticky count bar ── */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-black/5 px-8 sm:px-16 py-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onBack}
          className={`${merri.className} inline-flex items-center gap-1.5 text-sm text-[#886c46] font-light hover:underline underline-offset-4`}
        >
          <ChevronLeft size={14} />
          All Products
        </motion.button>
        <span className={`${merri.className} text-sm text-black/50 font-light`}>
          {categoryData.products.length} products in this series
        </span>
      </div>

      {/* ── Series about section ── */}
      <section ref={descRef} className="px-8 sm:px-16 py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isDescInView ? { width: '64px' } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-5 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isDescInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${merri.className} text-xs uppercase tracking-[0.25em] text-[#886c46] font-light mb-3`}
              >
                About this Series
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isDescInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={`${playfair.className} text-3xl sm:text-4xl font-semibold text-black mb-6 leading-tight`}
              >
                {categoryName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isDescInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`${merri.className} text-base font-light leading-[1.9] text-black/60`}
              >
                {categoryData.longDescription}
              </motion.p>
            </div>

            {/* Right: stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isDescInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Products', value: categoryData.products.length },
                { label: 'Customizable', value: '100%' },
                { label: 'Delivery',  value: 'Pan India' },
                { label: 'Warranty',  value: '5 Years' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-black/8 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-6 flex flex-col gap-1"
                >
                  <span className={`${playfair.className} text-3xl font-semibold text-black`}>{s.value}</span>
                  <span className={`${merri.className} text-xs uppercase tracking-widest text-black/40 font-light`}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className="px-6 sm:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.products.map((product, index) => (
              <CategoryPageCard
                key={product.name}
                product={product}
                category={categoryName}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-16 py-20 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-black mb-4`}>
            Need a Custom Solution?
          </h2>
          <p className={`${merri.className} text-black/60 font-light text-base mb-8`}>
            Every structure can be tailored to your exact specifications and site requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${merri.className} inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full font-light tracking-wide shadow-xl hover:shadow-2xl hover:shadow-[#886c46]/20 transition-all duration-300`}
          >
            Contact Our Experts
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </motion.div>
  )
}

/* ── Full card for the category page ── */
const CategoryPageCard = ({
  product,
  category,
  index,
}: {
  product: ProductItem
  category: string
  index: number
}) => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 bg-white"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image src={product.image} alt={product.name} fill className="object-cover opacity-80" />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 to-transparent"
        />

        <div className="absolute top-4 left-4">
          <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>
            {category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>
          {product.name}
        </h3>
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

        <Link
          href={`/products/${encodeURIComponent(product.name)}`}
          className={`${merri.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#886c46]/10 border border-[#886c46]/20 text-[#886c46] text-xs font-light tracking-wide hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-200`}
          onClick={(e) => e.stopPropagation()}
        >
          View Product
          <ArrowUpRight size={13} />
        </Link>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 0.3 : 0, y: hovered ? 8 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 -z-10 rounded-2xl bg-[#886c46]/40 blur-xl"
      />
    </motion.div>
  )
}

/* ══════════════════════════════════════════
   MAIN PRODUCTS PAGE
══════════════════════════════════════════ */
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePage, setActivePage] = useState<{ name: string; data: CategoryData } | null>(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const categories = ['All Products', ...Object.keys(productsData)]

  const filteredProducts = (): [string, CategoryData][] => {
    let result = Object.entries(productsData)
    if (selectedCategory !== 'All Products') {
      result = result.filter(([n]) => n === selectedCategory)
    }
    if (searchQuery) {
      result = result.filter(([, d]) =>
        d.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    return result
  }

  const openPage  = (name: string, data: CategoryData) => setActivePage({ name, data })
  const closePage = () => setActivePage(null)

  return (
    <div className="min-h-screen bg-white">

      <AnimatePresence>
        {activePage && (
          <CategoryPage
            categoryName={activePage.name}
            categoryData={activePage.data}
            onBack={closePage}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 mt-12 pb-20 px-6 md:px-12 overflow-hidden h-screen">
        <div className="absolute inset-0 z-10">
          <Image src="/products-hero.png" alt="Background" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-32 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46]/80 px-6 py-2.5 text-xs font-light tracking-[0.3em] text-white backdrop-blur-sm mt-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
                </span>
                OUR COLLECTION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${playfair.className} mb-6 text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-white`}
            >
              Premium
              <br />
              <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
                Prefab Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${merri.className} max-w-2xl text-lg font-light leading-relaxed text-white/70 mb-12`}
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
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${merri.className} w-full pl-16 pr-6 py-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-[#886c46] focus:bg-white/10 transition-all duration-300 font-light`}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
        />
      </section>

      {/* Filter bar */}
      <section className="relative py-8 md:py-12 px-4 md:px-12 border-b border-black/5">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-3">

      {/* Label */}
      <div className="hidden sm:flex items-center gap-2 shrink-0">
        <Filter className="w-4 h-4 text-[#886c46]" />
        <span className={`${merri.className} text-sm text-black/60 font-light`}>Filter:</span>
      </div>

      {/* Scrollable pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`${merri.className} relative shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-light tracking-wide transition-all duration-300 whitespace-nowrap ${
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
                onViewAll={openPage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

/* ── Category section ── */
const CategorySection = ({
  categoryName,
  categoryData,
  categoryIndex,
  searchQuery,
  onViewAll,
}: CategorySectionProps) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const Icon = categoryData.icon

  const filteredProducts = categoryData.products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            category={categoryName}
            index={index}
            isInView={isInView}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.8 }}
        className="mt-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewAll(categoryName, categoryData)}
          className={`${merri.className} group inline-flex items-center gap-2 px-8 py-4 bg-black/5 border border-black/10 hover:border-[#886c46] text-black/80 hover:text-black rounded-full font-light tracking-wide transition-all duration-300 hover:bg-black/10`}
        >
          View All {categoryName}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

/* ── Product card ── */
const ProductCard = ({ product, category, index, isInView, categoryIndex }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/products/${encodeURIComponent(product.name)}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: categoryIndex * 0.1 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative cursor-pointer"
      >
        <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-black/5 to-black/2 border border-black/10 hover:border-[#886c46]/50 transition-all duration-500 backdrop-blur-sm">
          <div className="relative h-56 overflow-hidden bg-linear-to-br from-[#886c46]/10 to-transparent">
            <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.6 }} className="h-full w-full">
              <Image src={product.image} alt={product.name} fill className="object-cover opacity-75" />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
            <motion.div animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-linear-to-br from-[#886c46]/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-black/60 backdrop-blur-md text-[#886c46] rounded-full border border-[#886c46]/30 font-light`}>{category}</span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className={`${playfair.className} text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors`}>{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="p-6 bg-white">
            <h3 className={`${playfair.className} text-xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors`}>{product.name}</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" /><span className={`${merri.className} text-xs text-black/50 font-light`}>Modular</span></div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#886c46]" /><span className={`${merri.className} text-xs text-black/50 font-light`}>Custom</span></div>
            </div>
            <motion.button whileHover={{ x: 4 }} className={`${merri.className} group/btn inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#886c46] font-light transition-colors`}>
              Learn More <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.8, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }} className="absolute bottom-0 left-0 h-1 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]" />
          <motion.div animate={{ opacity: isHovered ? 0.3 : 0, y: isHovered ? 8 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 -z-10 rounded-2xl bg-[#886c46]/40 blur-xl" />
        </div>
      </motion.div>
    </Link>
  )
}

export default Products