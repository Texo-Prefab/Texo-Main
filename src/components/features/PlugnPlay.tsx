"use client";

import { motion } from "framer-motion";
import { Ruler, Factory, ShieldCheck, Zap } from "lucide-react";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function PlugnPlay() {
  return (
    <section className="py-32 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 text-center max-w-3xl mx-auto"
    >
      <motion.h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
        Texo’s 4-Step Plug & Play Prefab Process
      </motion.h2>
      <p className={`${inter.className} text-zinc-600 text-lg`}>
        Texo Prefab World transforms modern living with precision-engineered,  sustainable modular structures. Headquartered in Hyderabad and proudly ISO 9001:2025 certified, we design and deliver prefabricated homes, offices, farmhouses, and specialty units – faster, smarter, and greener.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
          delay: 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative p-8 rounded-3xl bg-white border border-[#886c46]/20 hover:border-[#886c46]/40 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden h-fit"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 group-hover:opacity-100 transition duration-300" />
        
        <div className="relative flex flex-col  gap-6">
          <div className="bg-white text-black p-8 rounded-lg border border-[#886c46]">
                    <div className="flex items-start gap-4 mb-4">
                        <Ruler className="text-[#886c46] shrink-0" size={32} />
                        <h2 className="text-xl font-bold">Space Planning & Modular Design</h2>
                    </div>
                    <p className="text-black">
                        We assess your requirements thoroughly and convert your space into smart, transportable modules.
                    </p>
                </div>
                
                <div className="bg-white text-black p-8 rounded-lg border border-[#886c46]">
                    <div className="flex items-start gap-4 mb-4">
                        <Zap className="text-[#886c46] shrink-0" size={32} />
                        <h2 className="text-xl font-bold">Fast On-Site Installation</h2>
                    </div>
                    <p className="text-black">
                        Modules arrive ready to connect - install and move in within 3–7 days.
                    </p>
                </div>
        </div>

        <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-96 md:h-130 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 group"
      >
        <Image
          src="/products-hero.png"
          alt="Texo Prefab construction"
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent group-hover:from-black/30 transition duration-700" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative p-8 rounded-3xl bg-white border border-[#886c46]/20 hover:border-[#886c46]/40 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden h-fit"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#886c46]/5 to-[#d7a661]/5 opacity-0 group-hover:opacity-100 transition duration-300" />
        
        <div className="relative flex flex-col gap-6">
         <div className="bg-white text-black p-8 rounded-lg border border-[#886c46]">
                     <div className="flex items-start gap-4 mb-4">
                         <ShieldCheck className="text-[#886c46] shrink-0" size={32} />
                         <h2 className="text-xl font-bold">Quality Testing & Logistics Prep</h2>
                     </div>
                     <p className="text-gray-100">
                         Every unit is QC-tested and prepped for smooth transport and on-site assembly.
                     </p>
                 </div>
                 <div className="bg-white text-black p-8 rounded-lg border border-[#886c46]">
                     <div className="flex items-start gap-4 mb-4">
                         <Factory className="text-[#886c46] shrink-0" size={32} />
                         <h2 className="text-xl font-bold">Factory-Built with Smart Engineering</h2>
                     </div>
                     <p className="text-black">
                         Modules are built with customized pre-installed plumbing, electricals, and finishes.
                     </p>
                </div>
        </div>

        <div className="absolute top-0 right-0 w-1 h-0 bg-linear-to-b from-[#d7a661] to-transparent group-hover:h-full transition-all duration-500" />
      </motion.div>

    </div>

  </div>
</section>
  );
}


