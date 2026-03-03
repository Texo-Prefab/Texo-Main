'use client'
import { motion } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Calendar, User } from 'lucide-react'

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
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-22 bg-white">
      {/* ── BLOGS GRID ────────────────────────────────────────────── */}
      <section className=" pb-18 pt-32  px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className={`${merri.className} text-[0.65rem] tracking-[0.28em] uppercase text-[#886c46] font-light`}>
              Latest Articles
            </span>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black mt-3 mb-3`}>
              Featured Stories
            </h2>
            <div className="h-px w-16 bg-[#886c46]/40 mx-auto" />
          </motion.div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
            {blogs.map((blog, i) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group bg-white border border-black/8 hover:border-[#886c46]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#886c46]/10 transition-all duration-500 cursor-pointer h-full"
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden bg-[#886c46]/5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${merri.className} inline-flex items-center bg-black/60 backdrop-blur-md text-[#886c46] text-[0.65rem] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-light border border-[#886c46]/30`}>
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Title */}
                    <h3 className={`${playfair.className} text-2xl font-semibold text-black mb-3 line-clamp-2 group-hover:text-[#886c46] transition-colors`}>
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`${merri.className} text-black/60 font-light text-base leading-relaxed mb-5 line-clamp-2`}>
                      {blog.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-[0.85rem] text-black/50 mb-6 pb-6 border-b border-black/8">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span className={`${merri.className} font-light`}>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span className={`${merri.className} font-light`}>{blog.author}</span>
                      </div>
                      <span className={`${merri.className} text-[0.8rem] text-[#886c46] font-light ml-auto`}>
                        {blog.readTime}
                      </span>
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group/btn inline-flex items-center gap-2 text-[#886c46] hover:text-black font-light transition-colors"
                    >
                      Read Article
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

         
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#faf8f5] border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-black mb-5`}>
              Stay Updated
            </h2>
            <p className={`${merri.className} text-black/60 font-light text-lg mb-10 max-w-2xl mx-auto`}>
              Subscribe to our newsletter and get the latest insights on prefabrication, construction trends, and Texo innovations delivered to your inbox.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${merri.className} inline-flex items-center gap-2 px-10 py-5 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full font-light tracking-wide shadow-xl hover:shadow-2xl transition-all`}
            >
              Subscribe Now
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
