'use client'
import React from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import History from '@/components/about/History'
import Promise from '@/components/about/Promise'
import Founders from '@/components/about/Founder'
import CertiCarousel from '@/components/about/CertiCarousel'
import OurTeam from '@/components/about/OurTeam'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})


const About = () => {
  return (
    <div >
      <section className="relative h-screen pt-22 flex items-center overflow-hidden bg-black text-white">

      {/* Subtle Background Image */}
      <Image
        src="/products-hero.png"
        alt="About Background"
        fill
        priority
        className="object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />

      <div className="relative z-10 max-w-6xl px-6">
        
       

        <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-tight max-w-4xl`}>
  We Don{`'`}t Just Build Structures.
  <span className="block text-transparent bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text mt-2">
    We Build Spaces That Feel Like Home.
  </span>
</h1>

<p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl">
  At TEXO PREFAB WORLD, we design and construct premium modular prefab
  farmhouses, A-frame cabins, and customized living spaces that combine
  durability, efficiency, and timeless aesthetics — built faster,
  smarter, and stronger.
</p>

      </div>
    </section>
    <History />
    <Promise />
    <Founders />
    <CertiCarousel />
    <OurTeam />
    </div>
  )
}

export default About