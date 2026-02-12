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
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Vlogs', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
    <section className="relative py-24 bg-[#f8f5f0] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className={`${playfair.className} text-3xl md:text-4xl font-semibold mb-16 text-center text-[#886c46]`}
    >
      Our Offices
    </motion.h3>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Office 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group bg-white rounded-2xl border border-[#886c46]/20 hover:border-[#886c46]/40 transition duration-300 shadow-md hover:shadow-xl overflow-hidden"
      >
        {/* Map */}
        <div className="relative h-64 w-full">
          <iframe
            src="https://www.google.com/maps?q=Jeedimetla,Hyderabad&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-xl flex items-center justify-center transition duration-300">
              <MapPin className="w-6 h-6 text-[#886c46]" />
            </div>
            <div>
              <h4 className={`${playfair.className} text-xl font-semibold text-[#886c46] mb-1`}>
                Manufacturing Unit & Sales Office
              </h4>
              <div className="h-1 w-12 bg-[#d7a661]/30 rounded-full" />
            </div>
          </div>

          <p className="text-sm text-black/75 leading-relaxed mb-6 font-light">
            Texo Prefab, Plot No.22, Phase-1, I.D.A, Jeedimetla,<br />
            Shapur Nagar, Hyderabad,<br />
            Telangana 500055, India
          </p>

          <a
            href="https://www.google.com/maps?q=Jeedimetla,Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#886c46] hover:bg-[#6b5236] text-white rounded-xl transition duration-300 font-medium shadow-lg hover:shadow-xl group/btn"
          >
            <MapPin className="w-4 h-4 group-hover/btn:scale-110 transition" />
            View on Maps
          </a>
        </div>
      </motion.div>

      {/* Office 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group bg-white rounded-2xl border border-[#886c46]/20 hover:border-[#886c46]/40 transition duration-300 shadow-md hover:shadow-xl overflow-hidden"
      >
        {/* Map */}
        <div className="relative h-64 w-full">
          <iframe
            src="https://www.google.com/maps?q=Muthangi,Hyderabad&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-xl flex items-center justify-center transition duration-300">
              <MapPin className="w-6 h-6 text-[#886c46]" />
            </div>
            <div>
              <h4 className={`${playfair.className} text-xl font-semibold text-[#886c46] mb-1`}>
                Experience Centre & Branch Office
              </h4>
              <div className="h-1 w-12 bg-[#d7a661]/30 rounded-full" />
            </div>
          </div>

          <p className="text-sm text-black/75 leading-relaxed mb-6 font-light">
            Texo Prefab World,<br />
            Muthangi, Patancheruvu ORR Exit No.03,<br />
            Hyderabad, Telangana 502300, India
          </p>

          <a
            href="https://www.google.com/maps?q=Muthangi,Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#886c46] hover:bg-[#6b5236] text-white rounded-xl transition duration-300 font-medium shadow-lg hover:shadow-xl group/btn"
          >
            <MapPin className="w-4 h-4 group-hover/btn:scale-110 transition" />
            View on Maps
          </a>
        </div>
      </motion.div>

    </div>
  </div>
</section>

    <footer ref={footerRef} className="relative bg-black text-white overflow-hidden max-h-screen">

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[#886c46]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#886c46]/30 rounded-full blur-[120px]" />
      </div>

      {/* Top Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="h-1.5 bg-linear-to-r from-black via-[#886c46] to-black origin-left"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">

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

            

            {/* <div className="relative w-full h-48 rounded-2xl overflow-hidden border-2 border-[#886c46]/30 hover:border-[#886c46] transition-colors duration-500 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location Map"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div> */}
          </div>

          {/* Quick Links */}
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

          {/* Social + Legal */}
          <div>
            <h4 className={`${playfair.className} text-2xl font-semibold mb-8`}>
              Connect With Us
            </h4>

            <div className="space-y-4 mb-8">
              {[Mail, Phone, MapPin].map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/90 hover:text-[#886c46] transition-colors duration-300 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-[#886c46]/30 group-hover:bg-[#886c46]/10 transition-colors">
                    <Icon size={18} />
                  </div>

                  <span className={`${merri.className} text-sm font-light`}>
                    {i === 0 && 'contact@premium.com'}
                    {i === 1 && '+1 (555) 123-4567'}
                    {i === 2 && '123 Premium St, Suite 100'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
             
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1 }}
          className="h-px bg-linear-to-r from-black via-[#886c46] to-black mb-12 origin-left"
        />

        {/* Bottom Bar */}
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
