'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarHeart } from 'lucide-react';
import { ImageFrame } from './ImageFrame';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <motion.div aria-hidden className="absolute left-[-12%] top-10 h-80 w-80 rounded-full bg-rose-200/60 blur-3xl" animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }} />
      <motion.div aria-hidden className="absolute right-[-10%] top-32 h-96 w-96 rounded-full bg-violet-200/60 blur-3xl" animate={{ y: [0, -28, 0], scale: [1, 0.95, 1] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <p className="mb-5 inline-flex rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-rose-500 shadow-sm backdrop-blur-xl">Designer Boutique • Avadi</p>
          <h1 className="font-serif text-5xl leading-[0.95] text-stone-950 sm:text-7xl lg:text-8xl">Crafting Elegance Into Every Stitch</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-650 sm:text-xl">Designer boutique wear tailored with luxury, beauty, and perfection.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#collections" className="group inline-flex items-center justify-center gap-3 rounded-full bg-stone-950 px-7 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(28,25,23,0.18)] transition hover:-translate-y-1 hover:bg-rose-500">
              Explore Collections <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/917708293555?text=Hello%20Rufes%20Fashions%2C%20I%20would%20like%20to%20book%20a%20consultation." className="inline-flex items-center justify-center gap-3 rounded-full border border-white/80 bg-white/65 px-7 py-4 font-semibold text-stone-900 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">
              <CalendarHeart className="h-5 w-5 text-rose-500" /> Book Consultation
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-white/80 via-rose-100/60 to-violet-100/70 blur-xl" />
          <ImageFrame src="/assets/hero-boutique.jpg" alt="Rufes Fashions hero boutique placeholder" label="Hero Boutique Photo" className="relative aspect-[4/5]" imgClassName="hover:scale-105" />
          <div className="absolute -bottom-6 left-8 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-2xl backdrop-blur-xl">
            <p className="font-serif text-3xl text-stone-950">4.9 ★</p>
            <p className="text-sm text-stone-600">49 Google reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
