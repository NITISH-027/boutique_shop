'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import type { LocalImage } from '@/lib/assets';
import { ImageFrame } from './ImageFrame';

export function Gallery({ images }: { images: LocalImage[] }) {
  const [active, setActive] = useState<LocalImage | null>(null);
  const displayImages = images.length ? images : Array.from({ length: 8 }, (_, index) => ({ src: '', alt: `Gallery placeholder ${index + 1}` }));

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {displayImages.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: (index % 6) * 0.05 }}
            onClick={() => image.src && setActive(image)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.7rem] bg-white/55 p-2 text-left shadow-[0_18px_55px_rgba(138,98,84,0.12)] ring-1 ring-white/70 transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(138,98,84,0.18)]"
          >
            <ImageFrame src={image.src} alt={image.alt} label="Gallery Photo" className={`${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[5/4]'} rounded-[1.35rem] shadow-none`} imgClassName="group-hover:scale-105" />
          </motion.button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-md" onClick={() => setActive(null)}>
          <button aria-label="Close preview" className="absolute right-5 top-5 rounded-full bg-white/90 p-3 text-stone-950" onClick={() => setActive(null)}>
            <X />
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[88vh] max-w-[92vw] rounded-[2rem] object-contain shadow-2xl" />
        </div>
      )}
    </>
  );
}
