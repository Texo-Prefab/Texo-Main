'use client'
import React from 'react'
import Image from 'next/image'
// plain hero, no special fonts or motion
import History from '@/components/about/History'
import Promise from '@/components/about/Promise'
import Founders from '@/components/about/Founder'
import CertiCarousel from '@/components/about/CertiCarousel'
import OurTeam from '@/components/about/OurTeam'

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
// })


const About = () => {
  return (
    <div >
      <section className="relative w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
          {/* left image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/products-hero.png"
              alt="About us"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-6xl font-bold text-black mb-6">ABOUT US</h1>
            <p className="text-xl text-gray-700">Together, we craft environments that feel like home—every detail considered, every corner designed for living.</p>
          </div>
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