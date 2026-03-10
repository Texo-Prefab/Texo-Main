'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Merriweather, Playfair_Display } from 'next/font/google';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function PremiumFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Inspiration Gallery', href: '/inspiration-gallery' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const locations = [
    {
      label: 'Headquarters',
      addr: 'preab world, hyderabad',
      city: 'Telanagana',
    },
    {
      label: 'Branch Office',
      addr: 'prefab world, Hyderbad',
      city: 'hyderabd, telangana',
    },
  ];

  return (
    <>


    <footer ref={footerRef} className="relative bg-black text-white overflow-hidden max-h-screen z-99999">

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[#886c46]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#886c46]/30 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="h-1.5 bg-linear-to-r from-black via-[#886c46] to-black origin-left"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-10 pt-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-6">

          <div>
            <div className="w-full mb-6">
              <Image
                src="/horiz-logo.png"
                alt="Prefab Construction Company Logo"
                width={200}
                height={150}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <p className={`${merri.className} text-white/80 mb-8 leading-relaxed font-light`}>
              Elevating experiences through innovation and excellence.
              Your trusted partner in success.
            </p>

            <div className="flex gap-3 flex-wrap mb-10">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#886c46] transition-all duration-300 border border-[#886c46]/30 hover:border-[#886c46] text-white/80 hover:text-white shadow-lg"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`${playfair.className} text-2xl font-semibold mb-8`}>
              Quick Links
            </h4>

            <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${merri.className} text-white/80 hover:text-[#886c46] transition-all duration-300 inline-flex items-center group font-light text-sm`}
                  >
                    <span className="w-0 h-px bg-[#886c46] group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${playfair.className} text-2xl font-semibold mb-8`}>
              Connect With Us
            </h4>

            <div className="mb-8">
              <div className="space-y-4 mb-6">
                {[
                  { icon: Mail, value: 'prefab@mail.com' },
                  { icon: Mail, value: 'prefab@mail.com' },
                  { icon: Phone, value: '+91 123456789' },
                  { icon: Phone, value: '+91 123456789' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/90 hover:text-[#886c46] transition-colors duration-300 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-[#886c46]/30 group-hover:bg-[#886c46]/10 transition-colors">
                      <item.icon size={18} />
                    </div>
                    <span className={`${merri.className} text-sm font-light`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="mb-10">
          <p className={`${merri.className} text-[#886c46]/70 text-xs uppercase tracking-[0.2em] font-light mb-4`}>
            Our Locations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="relative flex items-center gap-4 p-4 rounded-xl border border-[#886c46]/20 bg-white/2 hover:bg-[#886c46]/5 hover:border-[#886c46]/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-8 h-px bg-[#886c46]/50 group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-[#886c46]/50 group-hover:w-full transition-all duration-500" />
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-[#886c46]/30 group-hover:bg-[#886c46]/10 group-hover:border-[#886c46]/60 transition-all duration-300">
                  <MapPin size={18} className="text-[#886c46]" />
                </div>
                <div className="flex flex-col">
                  <span className={`${playfair.className} text-[#886c46] text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5`}>
                    {loc.label}
                  </span>
                  <span className={`${merri.className} text-white/90 text-sm font-light leading-snug`}>
                    {loc.addr}
                  </span>
                  <span className={`${merri.className} text-white/45 text-xs font-light mt-0.5`}>
                    {loc.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1 }}
          className="h-px bg-linear-to-r from-black via-[#886c46] to-black mb-12 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm w-full text-center">
          <p className={`${merri.className} text-white/70 font-light w-full text-center`}>
            © {new Date().getFullYear()} <span className="text-[#886c46]">TEXO PREFAB WORLD</span>. All rights reserved.
          </p>
        </div>

      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="h-1.5 bg-linear-to-r from-black via-[#886c46] to-black origin-left"
      />
    </footer>
    </>
  );
}


