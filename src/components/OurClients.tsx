import React from 'react'
import Image from "next/image";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
const OurClients = () => {
  return (
    <div>

        <section className="py-24 overflow-hidden bg-white">
                <div className="mb-16">
                <h2 className={`${playfair.className} text-3xl md:text-6xl font-semibold text-center bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent`}>
                    Our Clients
                </h2>
                </div>
        <div className="marquee flex gap-16 px-6">
            {[
            "/clients/int-1.webp",
            "/clients/int-5.jpg",
            "/clients/int-3.png",
            "/clients/int-4.png",
            "/clients/int-6.png",
            "/clients/int-8.png",
            "/clients/int-10.png",
            "/clients/int-16.webp",
            "/clients/int-18.png",
            "/clients/int-19.png",
            "/clients/int-11.avif",
            "/clients/int-22.png",
            "/clients/int-7.png",
            "/clients/int-20.jpg",
            "/clients/int-21.webp",

            "/clients/int-1.webp",
            "/clients/int-5.jpg",
            "/clients/int-3.png",
            "/clients/int-4.png",
            "/clients/int-6.png",
            "/clients/int-8.png",
            "/clients/int-10.png",
            "/clients/int-16.webp",
            "/clients/int-18.png",
            "/clients/int-19.png",
            "/clients/int-11.avif",
            "/clients/int-22.jpeg",
            "/clients/int-7.webp",
            "/clients/int-20.jpg",
            "/clients/int-21.webp",

            ].map((logo, i) => (
            <div key={i} className="relative w-44 h-22 shrink-0">
                <Image src={logo} alt="" fill className="object-contain" />
            </div>
            ))}
        </div>
        </section>
    </div>
  )
}

export default OurClients