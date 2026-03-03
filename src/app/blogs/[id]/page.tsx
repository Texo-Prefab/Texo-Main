'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, User, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const blogs = [
  {
    id: 1,
    title: 'The Future of Prefabrication: Speed Meets Sustainability',
    excerpt: 'Discover how modular construction is revolutionizing the building industry with faster timelines and eco-friendly practices.',
    category: 'Industry Trends',
    author: 'Faiz Ahmed',
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: '/products-hero.png',
    content: `
      Prefabrication is no longer a niche solution—it's becoming the standard in construction. Here's why:\n\n
      The traditional construction model is broken. Projects run over budget, timelines slip indefinitely, and quality suffers because of rushed on-site assembly. Prefabrication flips this model on its head.\n\n
      By building components in a controlled factory environment, we eliminate weather delays, reduce material waste by up to 50%, and achieve precision that's impossible on a chaotic construction site. A module built in our Hyderabad facility meets the same standards whether it's deployed in Mumbai, Bangalore, or the Maldives.\n\n
      But speed isn't the only win. Every material choice, every joint, every finish is engineered for longevity. Our modules are built to last decades, not years. That means lower lifecycle costs, reduced environmental impact, and structures that actually improve over time.\n\n
      The future isn't about choosing between speed and sustainability. It's about solutions that deliver both.\n
    `
  },
  {
    id: 2,
    title: 'Case Study: Delivering a 1000 sq ft Facility in 72 Hours',
    excerpt: 'Learn how precision engineering and logistics coordination made an impossible deadline possible for our Hyderabad client.',
    category: 'Case Study',
    author: 'Mohammad Zaheer Uddin',
    date: 'February 28, 2024',
    readTime: '8 min read',
    image: '/siteoffice-2.webp',
    content: `
      The brief was impossible: A client needed a fully equipped 1000 sq ft administrative facility operational in 72 hours. No excuses.\n\n
      Here's what we did:\n\n
      Day 1: Zero to Built\n
      Engineering team finalized designs by 6 AM. Manufacturing began immediately. Four modules were assembled by midnight—walls, electrical, plumbing, and HVAC all integrated.\n\n
      Day 2: Transportation & Preparation\n
      Custom logistics route planned to avoid traffic. Modules left at 4 AM, arrived at site by 7 AM. Foundation and utility connections were ready (we'd coordinated this weeks prior). Assembly began.\n\n
      Day 3: Handover\n
      By 2 PM, all systems tested. By 5 PM, client walked into a fully functional facility with integrated lighting, digital displays, climate control, and furniture.\n\n
      What made this possible? Prefabrication removes the unpredictability. When every component meets factory standards, integration becomes a math problem, not a gamble.\n\n
      Traditional construction? This project would take 8-12 weeks. Texo? 72 hours.\n
    `
  },
  {
    id: 3,
    title: 'Quality Over Everything: Our Manufacturing Standards',
    excerpt: 'A deep dive into the checks, balances, and innovations that ensure every Texo module exceeds industry standards.',
    category: 'Quality',
    author: 'Faiz Ahmed',
    date: 'February 25, 2024',
    readTime: '6 min read',
    image: '/products-hero.png',
    content: `
      Quality isn't negotiable at Texo. It's woven into every decision, every process, every hire.\n\n
      Our manufacturing facility operates under ISO 9001 standards. But that's just the baseline. Beyond compliance, we've built a culture where cut corners feel like personal failures.\n\n
      Every module goes through 47 inspection checkpoints before leaving the factory. We test electrical systems, structural integrity, thermal performance, water-tightness, and fire resistance. Nothing ships until it passes.\n\n
      Our fabricators have 10+ years of experience on average. They know exactly how materials behave under stress, how connections fail, how logistics can damage a panel. That experience informs every design decision.\n\n
      When a Texo module arrives on your site, you're not gambling. You're getting a component that's been built to a standard that most permanent structures can't match.\n\n
      That's not marketing. That's our promise.\n
    `
  },
  {
    id: 4,
    title: 'Why Prefab is the Answer to India\'s Housing Crisis',
    excerpt: 'Exploring how modular construction can scale affordability, speed, and quality across the nation\'s growing urban centers.',
    category: 'Innovation',
    author: 'Mohammad Zaheer Uddin',
    date: 'February 20, 2024',
    readTime: '7 min read',
    image: '/siteoffice-2.webp',
    content: `
      India's urban centers are growing faster than they can build. The scale of the housing shortage is staggering—millions of people without adequate shelter, while construction timelines stretch into infinity.\n\n
      Traditional construction can't scale to meet this demand. The model is labor-intensive, weather-dependent, and produces massive waste. Prefabrication breaks this ceiling.\n\n
      Here's why prefab works at scale:\n\n
      Repeatability: Once a design is finalized, we build 100 identical modules more efficiently than the first 10 under traditional methods.\n\n
      Workforce Efficiency: Prefabrication trades scattered site workers for focused factory teams. One skilled fabricator produces more volume than 5 site workers.\n\n
      Material Optimization: Factory waste is captured and reused. Site waste is buried. Prefab reduces material spend by 30-40%.\n\n
      Timeline Predictability: Weather doesn't stop a factory. Modules are built regardless of monsoons, heat waves, or floods.\n\n
      Affordability: All of the above means lower per-unit costs. When you remove waste, reduce timeline, and optimize labor, the price drops dramatically.\n\n
      India doesn't need another traditional construction company. It needs prefab at scale. And that's what we're building.\n
    `
  },
]

export default function BlogDetail() {
  const params = useParams()
  const id = Number(params.id)

  const currentBlog = blogs.find((b) => b.id === id)
  const currentIndex = blogs.findIndex((b) => b.id === id)
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : blogs[0]

  if (!currentBlog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="min-h-screen bg-white pt-22">

      

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:pb-12 md:pt-22">
        {/* Header */}
        <div className=" top-8 z-40 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <Link href="/blogs">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[#886c46] hover:text-black transition-colors font-light"
            >
              <ArrowLeft size={18} />
              Back to Articles
            </motion.button>
          </Link>
        </div>
      </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className={`${merri.className} text-[0.65rem] tracking-[0.28em] uppercase text-[#886c46] font-light`}>
            {currentBlog.category}
          </span>
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold text-black mt-4 mb-6 leading-[1.1]`}>
            {currentBlog.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-[0.95rem] text-black/60 pb-6 border-b border-black/10">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#886c46]" />
              <span className={`${merri.className} font-light`}>{currentBlog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#886c46]" />
              <span className={`${merri.className} font-light`}>{currentBlog.author}</span>
            </div>
            <span className={`${merri.className} text-[#886c46] font-light ml-auto`}>
              {currentBlog.readTime}
            </span>
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${merri.className} text-lg font-light leading-loose text-black/70 mb-12 space-y-6`}
        >
          {currentBlog.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Share & Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-b border-black/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`${merri.className} text-sm text-black/60 font-light mb-2`}>Written by</p>
              <p className={`${playfair.className} text-2xl font-semibold text-black`}>
                {currentBlog.author}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition"
            >
              <Share2 size={18} className="text-black/60" />
            </motion.button>
          </div>
        </motion.div>
      </article>

      {/* ── NAVIGATION (Back/Next) ──────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous - Hidden if first blog */}
          {currentIndex > 0 ? (
            <Link href={`/blogs/${blogs[currentIndex - 1].id}`}>
              <motion.div
                whileHover={{ x: -8 }}
                className="group p-6 border border-black/10 hover:border-[#886c46]/40 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ArrowLeft size={16} className="text-[#886c46] group-hover:scale-125 transition-transform" />
                  <span className={`${merri.className} text-[0.65rem] tracking-[0.2em] uppercase text-black/60 font-light`}>
                    Previous Article
                  </span>
                </div>
                <h3 className={`${playfair.className} text-lg font-semibold text-black group-hover:text-[#886c46] transition-colors line-clamp-2`}>
                  {blogs[currentIndex - 1].title}
                </h3>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          <Link href={`/blogs/${nextBlog.id}`}>
            <motion.div
              whileHover={{ x: 8 }}
              className="group p-6 border border-black/10 hover:border-[#886c46]/40 rounded-2xl transition-all duration-300 cursor-pointer md:col-start-2 md:row-start-1"
            >
              <div className="flex items-center gap-3 mb-3 justify-end">
                <span className={`${merri.className} text-[0.65rem] tracking-[0.2em] uppercase text-black/60 font-light`}>
                  Next Article
                </span>
                <ArrowRight size={16} className="text-[#886c46] group-hover:scale-125 transition-transform" />
              </div>
              <h3 className={`${playfair.className} text-lg font-semibold text-black group-hover:text-[#886c46] transition-colors line-clamp-2 text-right`}>
                {nextBlog.title}
              </h3>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ── RELATED ARTICLES ───────────────────────────────────── */}
      <section className="relative py-20 px-6 md:px-12 bg-[#faf8f5] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`${playfair.className} text-4xl font-bold text-black mb-2`}>
              More Articles
            </h2>
            <div className="h-px w-16 bg-[#886c46]/40 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.filter((b) => b.id !== id).slice(0, 3).map((blog, i) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border border-black/8 hover:border-[#886c46]/40 cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden bg-[#886c46]/5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <span className={`${merri.className} text-[0.6rem] tracking-[0.2em] uppercase text-[#886c46] font-light`}>
                      {blog.category}
                    </span>
                    <h3 className={`${playfair.className} text-base font-semibold text-black mt-2 mb-3 line-clamp-2 group-hover:text-[#886c46] transition-colors`}>
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[0.75rem] text-black/50">
                      <User size={12} />
                      <span className={`${merri.className} font-light`}>{blog.author}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
