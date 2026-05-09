'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Collections', '#collections'],
  ['Gallery', '#gallery'],
  ['Lookbook', '#lookbook'],
  ['Contact', '#contact'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-rose-300 via-fuchsia-300 to-violet-300" style={{ scaleX }} />
      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/55 px-5 py-3 shadow-[0_18px_60px_rgba(138,98,84,0.12)] backdrop-blur-2xl">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-stone-950 font-serif text-lg text-white shadow-xl">R</span>
            <span>
              <span className="block font-serif text-xl leading-none text-stone-950">Rufes Fashions</span>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-500">Avadi Boutique</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-stone-700 transition hover:text-rose-500">
                {label}
              </a>
            ))}
            <a href="tel:+917708293555" className="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-500">
              Call Now
            </a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="rounded-full bg-white/70 p-2 text-stone-800 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-full px-4 py-3 text-stone-700 hover:bg-rose-50 hover:text-rose-500">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}
