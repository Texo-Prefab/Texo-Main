'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Merriweather } from 'next/font/google';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400'],
});

const slides = [
  {
    src: '/products-hero.png',
    alt: 'Texo Prefab World – Products',
    label: '01',
    title: 'Built to Last',
    caption: 'Our team bringing precision to every prefab structure.',
  },
  {
    src: '/siteoffice-2.webp',
    alt: 'Texo Prefab World – Site Office',
    label: '02',
    title: 'On The Ground',
    caption: 'Where planning meets execution — our site office team.',
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    go((current + 1) % slides.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + slides.length) % slides.length, -1);
  }, [current, go]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '6%' : '-6%',
      opacity: 0,
      scale: 1.04,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-4%' : '4%',
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
    }),
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">

      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-10 flex items-end justify-between">
        

        {/* Slide counter */}
        <div className={`${merri.className} text-black text-sm font-light hidden sm:block`}>
          <span className="text-[#886c46] text-lg font-light">{String(current + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* ── CAROUSEL STAGE ── */}
      <div
        className="relative max-w-7xl mx-auto px-6 md:px-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Image wrapper — max 50vh */}
        <div className="relative w-full overflow-hidden rounded-2xl"
          style={{ height: 'min(80vh, 600px)' }}>

          {/* Gold corner accents */}
          <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#886c46]/50 z-20 rounded-tl-2xl pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#886c46]/50 z-20 rounded-br-2xl pointer-events-none" />

          <AnimatePresence custom={direction} mode="sync">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slide text — sits over image */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <p className={`${merri.className} text-[#886c46] text-[9px] tracking-[0.3em] uppercase font-light mb-2`}>
                  {slides[current].label}
                </p>
                <h3 className={`${playfair.className} text-white text-2xl md:text-3xl font-semibold mb-1`}>
                  {slides[current].title}
                </h3>
                <p className={`${merri.className} text-white/50 text-sm font-light`}>
                  {slides[current].caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── CONTROLS ── */}
        <div className="flex items-center justify-between mt-6">

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative flex items-center"
              >
                <span
                  className={`block h-px transition-all duration-500 rounded-full ${
                    i === current
                      ? 'w-10 bg-[#886c46]'
                      : 'w-4 bg-black group-hover:bg-white/30'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Autoplay progress bar */}
          <div className="flex-1 mx-6 h-px bg-black/15 relative overflow-hidden rounded-full">
            {!paused && (
              <motion.div
                key={current}
                className="absolute inset-y-0 left-0 bg-[#886c46]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
              />
            )}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="group w-10 h-10 flex items-center justify-center rounded-xl border border-black text-black hover:text-white hover:border-[#886c46]/40 transition-all duration-300"
            >
              <ChevronLeft size={17} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="group w-10 h-10 flex items-center justify-center rounded-xl border border-black text-black hover:text-white hover:border-[#886c46]/40 transition-all duration-300"
            >
              <ChevronRight size={17} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}