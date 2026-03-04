'use client'

import React from 'react'
import Image from 'next/image'

// A simple, calm hero section for the About page. It uses a full‑screen
// background image with a light dark overlay and centered text.
// The goal is to look sleek and unobtrusive while still making a nice
// first impression.

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* background image */}
      <Image
        src="/products-hero.png" // using existing public asset for now
        alt="About us background"
        fill
        className="object-cover"
        priority
      />

      {/* dark translucent overlay to keep text readable and calm */}
      <div className="absolute inset-0 bg-black/55" />

      {/* content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#886c46] tracking-tight">
          About Us
        </h1>
        {/* subtle accent line */}
        <div className="mt-3 w-16 h-1 bg-white/70 rounded" />
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Together, we craft environments that feel like home—every detail
          considered, every corner designed for living.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
