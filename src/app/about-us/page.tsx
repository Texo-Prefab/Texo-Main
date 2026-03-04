'use client'
import React from 'react'

// plain hero, no special fonts or motion
import AboutHero from '@/components/AboutHero'
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
    <div>
      {/* sleek calm hero header component */}
      <AboutHero />

      <History />
      <Promise />
      <Founders />
      <CertiCarousel />
      <OurTeam />
    </div>
  )
}

export default About