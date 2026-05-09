'use client';

import { ImageIcon } from 'lucide-react';
import { useState } from 'react';

export function ImageFrame({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
}) {
  const [missing, setMissing] = useState(!src);

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-white/45 shadow-[0_25px_80px_rgba(120,77,67,0.15)] ring-1 ring-white/70 ${className}`}>
      {src && !missing ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setMissing(true)}
          className={`h-full w-full object-cover transition duration-700 ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_20%_20%,rgba(250,218,232,0.95),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.84),rgba(246,230,237,0.7),rgba(238,229,255,0.78))] p-8 text-center text-stone-700">
          <span className="rounded-full bg-white/70 p-4 shadow-lg">
            <ImageIcon className="h-8 w-8 text-rose-400" />
          </span>
          <div>
            <p className="font-serif text-2xl text-stone-900">{label}</p>
            <p className="mt-2 text-sm text-stone-600">Drop your boutique photo into the matching /public/assets folder.</p>
          </div>
        </div>
      )}
    </div>
  );
}
