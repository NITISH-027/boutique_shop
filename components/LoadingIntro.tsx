'use client';

import { motion } from 'framer-motion';

export function LoadingIntro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 0.65, duration: 0.65 }}
      className="fixed inset-0 z-[70] grid place-items-center bg-[#fff8f5]"
    >
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-stone-950 font-serif text-3xl text-white shadow-2xl">R</div>
        <p className="font-serif text-3xl text-stone-950">Rufes Fashions</p>
        <p className="mt-1 text-xs uppercase tracking-[0.34em] text-rose-400">Designer Boutique</p>
      </motion.div>
    </motion.div>
  );
}
