'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.34em] text-rose-500">{eyebrow}</p>}
            {title && <h2 className="font-serif text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
