'use client';

import { motion } from 'framer-motion';
import type { LocalImage } from '@/lib/assets';
import { ImageFrame } from './ImageFrame';

export function Lookbook({ images }: { images: LocalImage[] }) {
  const displayImages = images.length ? images : Array.from({ length: 6 }, (_, index) => ({ src: '', alt: `Lookbook placeholder ${index + 1}` }));

  return (
    <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
      <div className="flex min-w-max gap-5">
        {displayImages.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.06 }}
            className="w-72 sm:w-80"
          >
            <ImageFrame src={image.src} alt={image.alt} label="Lookbook Image" className="aspect-[3/4]" imgClassName="hover:scale-105" />
            <p className="mt-4 font-serif text-2xl text-stone-950">Editorial Look {String(index + 1).padStart(2, '0')}</p>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">Rufes Fashions</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
