'use client'
import React, { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import {
  Filter,
  Search,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  LayoutGrid,
  Rows3,
} from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

// ─── Types ────────────────────────────────────────────────────────────────────

interface GalleryItem {
  id: number
  title: string
  category: string
  size: string          // e.g. 'Small', 'Medium', 'Large', 'Extra Large'
  sqft: string          // display label e.g. 'Up to 200 sq ft'
  location: string
  tag: string           // short use-case badge
  image: string
  aspect: 'tall' | 'wide' | 'square'   // drives masonry spanning
  highlight?: string    // one-line callout
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Wooden Series', 'Portable Solutions', 'Prefab Solutions', 'Specialized Structures', 'Security Solutions', 'PUF Insulated']

const SIZES = [
  { label: 'All Sizes',   value: 'all' },
  { label: 'Small',       value: 'Small',       sub: 'Up to 200 sq ft' },
  { label: 'Medium',      value: 'Medium',       sub: '200 – 500 sq ft' },
  { label: 'Large',       value: 'Large',        sub: '500 – 1000 sq ft' },
  { label: 'Extra Large', value: 'Extra Large',  sub: '1000 sq ft+' },
]

const galleryItems: GalleryItem[] = [
  // Wooden Series
  { id: 1,  title: 'A-Frame Mountain Cabin',       category: 'Wooden Series',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Manali, HP',       tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'FSC Certified Timber' },
  { id: 2,  title: 'Arc Pod Retreat',              category: 'Wooden Series',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Coorg, KA',        tag: 'Hospitality',  image: '/products-hero.png', aspect: 'wide',   highlight: 'Off-Grid Ready' },
  { id: 3,  title: 'Smart Wooden House',           category: 'Wooden Series',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Dehradun, UK',     tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'square', highlight: 'IoT Integrated' },
  { id: 4,  title: 'Luxury Wooden Farmhouse',      category: 'Wooden Series',          size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Lonavala, MH',     tag: 'Farmhouse',    image: '/products-hero.png', aspect: 'wide',   highlight: 'Custom Interiors' },

  // Portable Solutions
  { id: 5,  title: 'Executive Site Office',        category: 'Portable Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Mumbai, MH',       tag: 'Site Office',  image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Deployed in 72 hrs' },
  { id: 6,  title: 'Labour Bunk House Complex',    category: 'Portable Solutions',     size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Surat, GJ',        tag: 'Accommodation',image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Sleeps 40 Workers' },
  { id: 7,  title: 'Porta Cabin Unit',             category: 'Portable Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Delhi NCR',        tag: 'Portable',     image: '/products-hero.png', aspect: 'square', highlight: 'Fully Relocatable' },
  { id: 8,  title: 'Container Home Conversion',   category: 'Portable Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Pune, MH',         tag: 'Residential',  image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Repurposed Steel' },
  { id: 9,  title: 'Modular Toilet Block',         category: 'Portable Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Chennai, TN',      tag: 'Sanitation',   image: '/products-hero.png', aspect: 'tall',   highlight: '10-Seat Capacity' },

  // Prefab Solutions
  { id: 10, title: 'Prefab School Campus',         category: 'Prefab Solutions',       size: 'Extra Large', sqft: '1000 sq ft+',       location: 'Patna, BR',        tag: 'Education',    image: '/siteoffice-2.webp', aspect: 'wide',   highlight: '12 Classrooms' },
  { id: 11, title: 'Prefab Accommodation Block',   category: 'Prefab Solutions',       size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Hyderabad, TS',    tag: 'Accommodation',image: '/siteoffice-2.webp', aspect: 'square', highlight: 'NBC Compliant' },
  { id: 12, title: 'Prefab Site Office Complex',   category: 'Prefab Solutions',       size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Bengaluru, KA',    tag: 'Site Office',  image: '/products-hero.png', aspect: 'tall',   highlight: 'Multi-Storey' },
  { id: 13, title: 'Prefab Residential House',     category: 'Prefab Solutions',       size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Jaipur, RJ',       tag: 'Residential',  image: '/products-hero.png', aspect: 'wide',   highlight: 'Ready in 3 Weeks' },

  // Specialized Structures
  { id: 14, title: 'Roadside Restaurant Cabin',    category: 'Specialized Structures', size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'NH-48, MH',        tag: 'Food & Bev',   image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'Full Kitchen Fit-Out' },
  { id: 15, title: 'Medical Clinic Cabin',         category: 'Specialized Structures', size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Nagpur, MH',       tag: 'Healthcare',   image: '/products-hero.png', aspect: 'tall',   highlight: 'Sterile Interiors' },
  { id: 16, title: 'Smoking Enclosure — Hotel',    category: 'Specialized Structures', size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Goa',              tag: 'Hospitality',  image: '/siteoffice-2.webp', aspect: 'square', highlight: 'Ventilated & Branded' },
  { id: 17, title: 'Electrical Room Cabin',        category: 'Specialized Structures', size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Noida, UP',        tag: 'Industrial',   image: '/siteoffice-2.webp', aspect: 'square', highlight: 'Fire Retardant' },

  // Security Solutions
  { id: 18, title: 'Highway Toll Plaza',           category: 'Security Solutions',     size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'NH-44, TN',        tag: 'Toll / Traffic', image: '/products-hero.png', aspect: 'wide',   highlight: 'Bullet Resistant Glass' },
  { id: 19, title: 'Gated Community Guard Cabin',  category: 'Security Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Gurugram, HR',     tag: 'Security',     image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Weatherproof' },
  { id: 20, title: 'ATM Enclosure Kiosk',          category: 'Security Solutions',     size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Kolkata, WB',      tag: 'Banking',      image: '/products-hero.png', aspect: 'square', highlight: 'Anti-Tamper Shell' },

  // PUF Insulated
  { id: 21, title: 'Industrial Control Room',      category: 'PUF Insulated',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Vizag, AP',        tag: 'Industrial',   image: '/siteoffice-2.webp', aspect: 'wide',   highlight: 'IS 875 Wind Rated' },
  { id: 22, title: 'Solar Farm Control Room',      category: 'PUF Insulated',          size: 'Medium',      sqft: '200 – 500 sq ft',   location: 'Jodhpur, RJ',      tag: 'Renewable',    image: '/siteoffice-2.webp', aspect: 'tall',   highlight: 'Desert Rated' },
  { id: 23, title: 'Pharma Clean Room',            category: 'PUF Insulated',          size: 'Large',       sqft: '500 – 1000 sq ft',  location: 'Ahmedabad, GJ',    tag: 'Pharma',       image: '/products-hero.png', aspect: 'square', highlight: 'ISO 14644 Compliant' },
  { id: 24, title: 'Cold Storage Control Cabin',   category: 'PUF Insulated',          size: 'Small',       sqft: 'Up to 200 sq ft',   location: 'Pune, MH',         tag: 'Cold Chain',   image: '/siteoffice-2.webp', aspect: 'square', highlight: '-20°C Rated' },
]

// ─── Lightbox ────────────────────────────────────────────────────────────────

const Lightbox = ({
  item,
  items,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem
  items: GalleryItem[]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  const currentIndex = items.findIndex(i => i.id === item.id)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-5xl bg-[#0d0b08] rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">

          {/* Image */}
          <div className="relative h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0b08]/60 via-transparent to-transparent" />

            {/* Nav arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-[#886c46]/60 hover:bg-[#886c46]/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-[#886c46]/60 hover:bg-[#886c46]/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className={`${merri.className} absolute bottom-4 left-4 text-[0.6rem] font-light tracking-widest uppercase text-white/50`}>
              {currentIndex + 1} / {items.length}
            </div>
          </div>


          {/* Meta panel */}
          <div className="p-8 flex flex-col justify-between border-l border-white/6">
            <div>
              {/* Category + size badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`${merri.className} text-[0.6rem] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-[#886c46]/40 text-[#886c46] font-light`}>
                  {item.category}
                </span>
                <span className={`${merri.className} text-[0.6rem] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/10 font-light`}>
                  {item.size}
                </span>
                <span className={`${merri.className} text-[0.6rem] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/10 font-light`}>
                  {item.tag}
                </span>
              </div>

              <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold text-white leading-tight mb-3`}>
                {item.title}
              </h2>

              {item.highlight && (
                <p className={`${merri.className} text-xs font-light text-[#a8926d] tracking-wide mb-6`}>
                  ✦ {item.highlight}
                </p>
              )}

              <div className="space-y-3 mt-6">
                {[
                  { label: 'Location', val: item.location },
                  { label: 'Size Class', val: item.size },
                  { label: 'Floor Area', val: item.sqft },
                  { label: 'Use Case', val: item.tag },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/6 last:border-0">
                    <span className={`${merri.className} text-[0.65rem] font-light uppercase tracking-widest text-white/35`}>{row.label}</span>
                    <span className={`${merri.className} text-xs font-light text-white/70`}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`${merri.className} mt-8 inline-flex items-center justify-center gap-2 w-full py-4 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-xl text-sm font-light tracking-wide shadow-lg shadow-[#886c46]/25`}
            >
              Enquire About This Design
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────

const GalleryCard = ({
  item,
  onOpen,
  index,
  layout,
}: {
  item: GalleryItem
  onOpen: (item: GalleryItem) => void
  index: number
  layout: 'masonry' | 'grid'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  // Height class for masonry
  const heightClass =
    layout === 'masonry'
      ? item.aspect === 'tall'
        ? 'h-[420px]'
        : item.aspect === 'wide'
        ? 'h-[260px]'
        : 'h-[320px]'
      : 'h-[280px]'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(item)}
      className="relative group cursor-pointer"
    >
      <div className={`relative ${heightClass} rounded-2xl overflow-hidden border border-black/8 hover:border-[#886c46]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#886c46]/10`}>

        {/* Image */}
        <motion.div
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.65 }}
          className="absolute inset-0"
        >
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover reveal overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#886c46]/15"
        />

        {/* Top badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <span className={`${merri.className} text-[0.58rem] uppercase tracking-[0.18em] px-3 py-1.5 bg-black/55 backdrop-blur-md text-white font-bold rounded-full border border-[#886c46]/30 `}>
            {item.tag}
          </span>
          <span className={`${merri.className} text-[0.58rem] uppercase tracking-[0.12em] px-3 py-1.5 bg-black/55 backdrop-blur-md text-white/60 rounded-full border border-white/10 font-light`}>
            {item.size}
          </span>
        </div>

        {/* Expand icon */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {item.highlight && (
            <motion.p
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
              transition={{ duration: 0.25 }}
              className={`${merri.className} text-[0.6rem] font-light text-[#a8926d] tracking-wider mb-2`}
            >
              ✦ {item.highlight}
            </motion.p>
          )}
          <h3 className={`${playfair.className} text-xl font-semibold text-white leading-tight mb-1 group-hover:text-[#e8d5b8] transition-colors`}>
            {item.title}
          </h3>
          <p className={`${merri.className} text-[0.62rem] font-light text-white/45 tracking-wide`}>
            {item.location} · {item.sqft}
          </p>
        </div>

        {/* Bottom gold accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: index * 0.04 + 0.2 }}
          className="absolute bottom-0 left-0 h-0.75 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
        />
      </div>
    </motion.div>
  )
}

// ─── Filter Pill ─────────────────────────────────────────────────────────────

const FilterPill = ({
  label,
  active,
  onClick,
  sub,
}: {
  label: string
  active: boolean
  onClick: () => void
  sub?: string
}) => (
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    onClick={onClick}
    className={`${merri.className} relative flex flex-col items-center gap-0.5 px-5 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 whitespace-nowrap ${
      active
        ? 'bg-[#886c46] text-white shadow-lg shadow-[#886c46]/25'
        : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black border border-black/10'
    }`}
  >
    <span>{label}</span>
    {sub && (
      <span className={`text-[0.55rem] tracking-widest ${active ? 'text-white/65' : 'text-black/35'}`}>
        {sub}
      </span>
    )}
    {active && (
      <motion.div
        layoutId={`pill-${label}`}
        className="absolute inset-0 bg-[#886c46] rounded-full -z-10"
        transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
      />
    )}
  </motion.button>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const InspirationGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSize, setActiveSize] = useState('all')
  const [search, setSearch] = useState('')
  const [layout, setLayout] = useState<'masonry' | 'grid'>('masonry')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const filtered = useMemo(() => {
    return galleryItems.filter(item => {
      const catMatch = activeCategory === 'All' || item.category === activeCategory
      const sizeMatch = activeSize === 'all' || item.size === activeSize
      const searchMatch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.tag.toLowerCase().includes(search.toLowerCase()) || item.location.toLowerCase().includes(search.toLowerCase())
      return catMatch && sizeMatch && searchMatch
    })
  }, [activeCategory, activeSize, search])

  const lightboxItems = filtered
  const lightboxIndex = lightboxItem ? lightboxItems.findIndex(i => i.id === lightboxItem.id) : -1

  const handlePrev = () => {
    if (lightboxIndex > 0) setLightboxItem(lightboxItems[lightboxIndex - 1])
    else setLightboxItem(lightboxItems[lightboxItems.length - 1])
  }
  const handleNext = () => {
    if (lightboxIndex < lightboxItems.length - 1) setLightboxItem(lightboxItems[lightboxIndex + 1])
    else setLightboxItem(lightboxItems[0])
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-28 px-6 md:px-12 overflow-hidden bg-[#0d0b08]">
        
        <div className="absolute -top-40 -right-24 w-140 h-140 rounded-full bg-[#886c46]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-16 w-95 h-95 rounded-full bg-[#886c46]/8 blur-3xl pointer-events-none" />

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto relative z-10 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className={`${merri.className} inline-flex items-center gap-2.5 rounded-full border border-[#886c46]/35 bg-[#886c46]/10 px-6 py-2.5 text-[0.65rem] font-light tracking-[0.28em] text-[#a8926d] uppercase`}>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
                  </span>
                  Real Projects · Real Sites
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-white mb-7`}
              >
                Inspiration
                <br />
                <span className="bg-linear-to-r from-white via-[#a8926d] to-[#886c46] bg-clip-text text-transparent">
                  Gallery
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.28 }}
                className={`${merri.className} text-base font-light leading-[1.9] text-white/55 max-w-md mb-10`}
              >
                Browse completed installations across India. Filter by structure type and size to find the exact match for your project vision.
              </motion.p>

              {/* Search bar */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-w-sm"
              >
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 z-10" />
                <input
                  type="text"
                  placeholder="Search by name, use case, location..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={`${merri.className} w-full pl-14 pr-5 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#886c46]/60 focus:bg-white/8 transition-all duration-300 font-light text-sm`}
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            </div>

            {/* Right — count card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="hidden lg:block"
            >
              <div className="border border-[#886c46]/20 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-y divide-[#886c46]/10">
                  {[
                    { v: '24+', l: 'Showcase Projects' },
                    { v: '6', l: 'Structure Categories' },
                    { v: '4', l: 'Size Classes' },
                    { v: '14', l: 'States Featured' },
                  ].map((s, i) => (
                    <div key={i} className={`p-8 ${i % 2 === 0 ? 'bg-white/3' : 'bg-white/1.5'}`}>
                      <div className={`${playfair.className} text-3xl font-bold text-[#a8926d] leading-none mb-2`}>{s.v}</div>
                      <div className={`${merri.className} text-[0.62rem] font-light uppercase tracking-widest text-white/35 leading-relaxed`}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent"
        />
      </section>


      {/* ── FILTER BAR ────────────────────────────────────────────────────────── */}
      <section className="top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-black/6 py-5 px-6 md:px-12 shadow-sm shadow-black/4">
        <div className="max-w-7xl mx-auto space-y-4">

          {/* Row 1 — Category + layout toggle */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#886c46]" />
              <span className={`${merri.className} text-[0.65rem] font-light text-black/50 uppercase tracking-[0.15em]`}>
                Category
              </span>
            </div>

            {CATEGORIES.map(cat => (
              <FilterPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}

            {/* Layout toggle — pushed right */}
            <div className="ml-auto flex items-center gap-1 border border-black/10 rounded-full p-1">
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-full transition-all duration-200 ${layout === 'masonry' ? 'bg-[#886c46] text-white' : 'text-black/40 hover:text-black'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-full transition-all duration-200 ${layout === 'grid' ? 'bg-[#886c46] text-white' : 'text-black/40 hover:text-black'}`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/5" />

          {/* Row 2 — Size + result count */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 shrink-0 mr-1">
              <span className={`${merri.className} text-[0.65rem] font-light text-black/50 uppercase tracking-[0.15em]`}>
                Size
              </span>
            </div>

            {SIZES.map(s => (
              <FilterPill
                key={s.value}
                label={s.label}
                sub={s.sub}
                active={activeSize === s.value}
                onClick={() => setActiveSize(s.value)}
              />
            ))}

            {/* Result count */}
            <div className="ml-auto">
              <span className={`${merri.className} text-[0.65rem] font-light text-black/40 tabular-nums`}>
                <span className="text-[#886c46] font-normal">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Active filter chips — only shown when non-default filters are active */}
          {(activeCategory !== 'All' || activeSize !== 'all' || search) && (
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className={`${merri.className} text-[0.6rem] font-light text-black/35 uppercase tracking-widest`}>Active:</span>
              {activeCategory !== 'All' && (
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`${merri.className} inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#886c46]/10 text-[#886c46] border border-[#886c46]/20 hover:bg-[#886c46]/20 transition-colors`}
                >
                  {activeCategory} <X className="w-3 h-3" />
                </button>
              )}
              {activeSize !== 'all' && (
                <button
                  onClick={() => setActiveSize('all')}
                  className={`${merri.className} inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#886c46]/10 text-[#886c46] border border-[#886c46]/20 hover:bg-[#886c46]/20 transition-colors`}
                >
                  {activeSize} <X className="w-3 h-3" />
                </button>
              )}
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className={`${merri.className} inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#886c46]/10 text-[#886c46] border border-[#886c46]/20 hover:bg-[#886c46]/20 transition-colors`}
                >
                  &quot;{search}&quot; <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={() => { setActiveCategory('All'); setActiveSize('all'); setSearch('') }}
                className={`${merri.className} text-[0.6rem] font-light text-black/35 hover:text-black/60 underline underline-offset-2 transition-colors ml-1`}
              >
                Clear all
              </button>
            </div>
          )}

        </div>
      </section>


      {/* ── GALLERY GRID ──────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-32"
              >
                <div className={`${playfair.className} text-2xl text-black/30 mb-3`}>No results found</div>
                <p className={`${merri.className} text-sm font-light text-black/40`}>
                  Try adjusting your category, size, or search query.
                </p>
                <button
                  onClick={() => { setActiveCategory('All'); setActiveSize('all'); setSearch('') }}
                  className={`${merri.className} mt-6 inline-flex items-center gap-2 text-sm font-light text-[#886c46] border border-[#886c46]/35 px-6 py-3 rounded-full hover:bg-[#886c46] hover:text-white transition-all duration-300`}
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${activeSize}-${search}-${layout}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  layout === 'masonry'
                    ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
                }
              >
                {filtered.map((item, i) => (
                  <div
                    key={item.id}
                    className={layout === 'masonry' ? 'break-inside-avoid' : ''}
                  >
                    <GalleryCard
                      item={item}
                      onOpen={setLightboxItem}
                      index={i}
                      layout={layout}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>


      {/* ── CATEGORY BREAKDOWN ────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 md:px-12 bg-[#faf8f5] border-t border-black/5">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-4`}>
                Browse by Type
              </p>
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-black leading-tight`}>
                Jump to a Category
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.filter(c => c !== 'All').map((cat, i) => {
              const count = galleryItems.filter(g => g.category === cat).length
              const isActive = activeCategory === cat
              return (
                <motion.button
                  key={cat}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`${merri.className} group relative p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-[#886c46] border-[#886c46] shadow-lg shadow-[#886c46]/25'
                      : 'bg-white border-black/8 hover:border-[#886c46]/40 hover:shadow-md'
                  }`}
                >
                  <div className={`text-2xl font-bold mb-2 ${isActive ? 'text-white/25' : 'text-black/10'} ${playfair.className}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={`text-xs font-light leading-snug mb-3 ${isActive ? 'text-white' : 'text-black/70'}`}>
                    {cat}
                  </div>
                  <div className={`text-[0.6rem] uppercase tracking-widest font-light ${isActive ? 'text-white/60' : 'text-[#886c46]'}`}>
                    {count} project{count !== 1 ? 's' : ''}
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>


      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`${merri.className} text-[0.65rem] font-light tracking-[0.28em] uppercase text-[#886c46] mb-5`}>
              Ready to Start?
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black mb-5 leading-tight`}>
              Seen Something You Love?
            </h2>
            <p className={`${merri.className} text-sm font-light leading-[1.9] text-black/55 mb-10 max-w-xl mx-auto`}>
              Share the project that caught your eye and our team will design something tailored exactly to your site and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full text-sm font-light tracking-wide shadow-xl shadow-[#886c46]/25 hover:shadow-2xl hover:shadow-[#886c46]/35 transition-all duration-300`}
              >
                Request a Custom Design
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${merri.className} inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full border border-black/15 text-black/60 text-sm font-light tracking-wide hover:border-[#886c46]/50 hover:text-[#886c46] transition-all duration-300`}
              >
                Browse All Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── LIGHTBOX ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox
            item={lightboxItem}
            items={lightboxItems}
            onClose={() => setLightboxItem(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>

    </div>
  )
}

export default InspirationGallery