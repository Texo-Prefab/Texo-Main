'use client'
import React from 'react'
import Image from 'next/image'
import { Merriweather, Playfair_Display } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const processes = [
  {
    step: '01',
    title: 'Consultation & Planning',
    description:
      'We begin by understanding your site, requirements, and long-term goals. Every project starts with clarity and intention.',
    image: '/siteoffice-2.webp',
  },
  {
    step: '02',
    title: 'Design & Engineering',
    description:
      'Detailed architectural planning and structural engineering ensure precision before manufacturing begins.',
    image: '/siteoffice-2.webp',
  },
  {
    step: '03',
    title: 'Precision Manufacturing',
    description:
      'Modules are fabricated in a controlled facility using premium materials and strict quality standards.',
    image: '/siteoffice-2.webp',
  },
  {
    step: '04',
    title: 'Delivery & Assembly',
    description:
      'Efficient on-site installation ensures speed without compromising craftsmanship or structural integrity.',
    image: '/siteoffice-2.webp',
  },
]

const OurProcess = () => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 max-w-screen text-center">
          <div
            
            className="mb-6 inline-block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#886c46]/30 bg-[#886c46] px-5 py-2 text-xs font-light tracking-widest text-[#f8f5f0] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f5f0] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f8f5f0]"></span>
              </span>
              WHY CHOOSE US
            </span>
          </div>

          <h2 className={`${playfair.className} text-5xl md:text-6xl font-light leading-tight text-[#2a2520]`}>
            From Vision to Reality
            <br />
            <span className="font-bold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent">
              In Four Refined Steps
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {processes.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-10">
                <span className={`${playfair.className} text-6xl text-black/10`}>
                  {item.step}
                </span>

                <h3 className={`${playfair.className} text-2xl font-semibold text-[#2a2520] mt-4 mb-4`}>
                  {item.title}
                </h3>

                <p className={`${merri.className} text-[#5a5248] leading-relaxed mb-6`}>
                  {item.description}
                </p>

                <button
                  className={`${merri.className}
                  inline-flex items-center gap-2
                  text-sm text-[#886c46]
                  transition-all duration-300
                  hover:gap-3
                  `}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurProcess
