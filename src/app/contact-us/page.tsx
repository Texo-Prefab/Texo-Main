'use client'

import Contact from "@/components/contact/Contact"
import Hero from "@/components/contact/Hero"
import Map from "@/components/contact/Map"

// import { motion } from 'framer-motion'
// import { Merriweather, Playfair_Display } from 'next/font/google'
// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowUpRight, Calendar, User } from 'lucide-react'



// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
// })



export default function ContactUsPage() {
  return (
    <div>
        <Hero />
        <Contact />
        <Map />
    </div>
  )
}
