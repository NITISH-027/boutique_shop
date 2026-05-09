import { Award, HeartHandshake, Instagram, MapPin, Phone, Scissors, Shirt, Sparkles, Star, WandSparkles, type LucideIcon } from 'lucide-react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { ImageFrame } from '@/components/ImageFrame';
import { LoadingIntro } from '@/components/LoadingIntro';
import { Lookbook } from '@/components/Lookbook';
import { Navbar } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { getImagesFromPublicFolder } from '@/lib/assets';

const collections = [
  ['Bridal Wear', 'Heirloom silhouettes with refined detailing for unforgettable wedding moments.', '/assets/collections/bridal-wear.jpg'],
  ['Party Wear', 'Glamorous, graceful occasion wear crafted for celebration evenings.', '/assets/collections/party-wear.jpg'],
  ['Custom Stitching', 'Personalized fits, premium finishing, and made-for-you boutique tailoring.', '/assets/collections/custom-stitching.jpg'],
  ['Ethnic Collections', 'Elegant Indian styles with contemporary boutique polish.', '/assets/collections/ethnic-collections.jpg'],
  ['Kids Designer Dresses', 'Charming designer outfits for little celebrations and special days.', '/assets/collections/kids-designer-dresses.jpg'],
];

const whyChoose: Array<[LucideIcon, string, string]> = [
  [Scissors, 'Premium Stitching', 'Precise tailoring with careful measurements and refined finishing.'],
  [WandSparkles, 'Personalized Designs', 'Custom concepts shaped around your occasion, style, and comfort.'],
  [Shirt, 'Quality Fabrics', 'A thoughtful boutique approach to fabric selection and garment feel.'],
  [HeartHandshake, 'Trusted by Customers', 'A 4.9-star reputation from clients who value fit and craftsmanship.'],
  [Sparkles, 'Elegant Finishing', 'Soft, polished detailing that makes every outfit feel complete.'],
  [Award, 'Affordable Luxury', 'Premium boutique styling with accessible, customer-first service.'],
];

const testimonials = [
  'The stitching quality was extremely impressive and the fitting was perfect.',
  'Beautifully designed outfits with premium finishing and elegant detailing.',
  'Highly trustworthy boutique with graceful craftsmanship and friendly service.',
];

export default function Home() {
  const galleryImages = getImagesFromPublicFolder('/assets/gallery');
  const lookbookImages = getImagesFromPublicFolder('/assets/lookbook');

  return (
    <main className="overflow-hidden">
      <LoadingIntro />
      <Navbar />
      <Hero />

      <Section id="about" eyebrow="About Rufes" title="Where trusted tailoring meets modern boutique elegance">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <ImageFrame src="/assets/about-store.jpg" alt="Rufes Fashions boutique store placeholder" label="About Store Photo" className="aspect-[5/4]" imgClassName="hover:scale-105" />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-white/70 bg-white/55 p-8 shadow-[0_25px_80px_rgba(138,98,84,0.12)] backdrop-blur-2xl sm:p-10">
              <p className="text-lg leading-8 text-stone-650">Located at 158, VGN Rd, Melpakkam, Avadi, Rufes Fashions creates designer boutique wear with a focus on graceful craftsmanship, custom stitching quality, premium materials, and silhouettes that feel both comfortable and luxurious.</p>
              <p className="mt-5 text-lg leading-8 text-stone-650">From bridal and ethnic pieces to party wear and kids designer dresses, each garment is shaped with trusted tailoring, careful finishing, and a feminine aesthetic made for memorable occasions.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['49+ Happy Reviews', 'Premium Custom Stitching', 'Designer Boutique Wear'].map((stat) => (
                  <div key={stat} className="rounded-3xl bg-gradient-to-br from-white/80 to-rose-50/80 p-5 text-center shadow-sm ring-1 ring-white/80">
                    <p className="font-serif text-2xl text-stone-950">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="collections" eyebrow="Collections" title="Luxury edits for every beautiful occasion">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map(([title, description, src], index) => (
            <Reveal key={title} delay={index * 0.06} className="lg:first:col-span-2 lg:first:row-span-2">
              <div className="group relative h-full min-h-80 overflow-hidden rounded-[2rem] shadow-[0_22px_70px_rgba(138,98,84,0.14)] ring-1 ring-white/70">
                <ImageFrame src={src} alt={`${title} collection placeholder`} label={title} className="h-full rounded-none shadow-none" imgClassName="group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/72 via-stone-950/18 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="font-serif text-3xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/82">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Gallery" title="A drag-and-drop gallery ready for your boutique photos">
        <Gallery images={galleryImages} />
      </Section>

      <Section id="why" eyebrow="Why Choose Us" title="Every stitch is designed to feel special">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(([Icon, title, description], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-[2rem] border border-white/70 bg-white/55 p-7 shadow-[0_18px_55px_rgba(138,98,84,0.1)] backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/75">
                <div className="mb-5 inline-flex rounded-2xl bg-rose-100 p-4 text-rose-500"><Icon /></div>
                <h3 className="font-serif text-3xl text-stone-950">{title}</h3>
                <p className="mt-3 leading-7 text-stone-650">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="testimonials" eyebrow="Testimonials" title="Review-inspired words from happy customers">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((quote, index) => (
            <Reveal key={quote} delay={index * 0.08}>
              <div className="h-full rounded-[2rem] bg-gradient-to-br from-white/75 via-rose-50/75 to-violet-50/75 p-8 shadow-[0_22px_65px_rgba(138,98,84,0.12)] ring-1 ring-white/80">
                <div className="mb-5 flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} className="h-5 w-5 fill-current" />)}</div>
                <p className="font-serif text-3xl leading-snug text-stone-950">“{quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-stone-500">Google review inspired</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="lookbook" eyebrow="Instagram Lookbook" title="Editorial moments for your newest designs">
        <Lookbook images={lookbookImages} />
      </Section>

      <Section id="contact" eyebrow="Visit Rufes Fashions" title="Book your boutique consultation in Avadi">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/70 bg-white/65 p-8 shadow-[0_25px_80px_rgba(138,98,84,0.12)] backdrop-blur-2xl">
              <div className="space-y-6 text-stone-700">
                <p className="flex gap-4"><Phone className="shrink-0 text-rose-500" /> <a href="tel:+917708293555" className="hover:text-rose-500">+91 77082 93555</a></p>
                <p className="flex gap-4"><MapPin className="shrink-0 text-rose-500" /> 158, VGN Rd, Melpakkam, Avadi, Tamil Nadu 600077</p>
                <p className="flex gap-4"><Star className="shrink-0 fill-amber-400 text-amber-400" /> 4.9 rating • 49 reviews</p>
              </div>
              <div className="mt-8 rounded-3xl bg-rose-50/80 p-5">
                <p className="font-serif text-2xl text-stone-950">Opening Hours</p>
                <p className="mt-2 text-stone-650">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                <p className="text-stone-650">Sunday: By appointment</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/917708293555" className="rounded-full bg-emerald-500 px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:-translate-y-1">WhatsApp</a>
                <a href="https://www.instagram.com/" className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"><Instagram className="h-5 w-5" /> Instagram</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-2 shadow-[0_25px_80px_rgba(138,98,84,0.12)]">
              <iframe
                title="Rufes Fashions Google Map"
                src="https://www.google.com/maps?q=158%2C%20VGN%20Rd%2C%20Melpakkam%2C%20Avadi%2C%20Tamil%20Nadu%20600077&output=embed"
                loading="lazy"
                className="h-[460px] w-full rounded-[1.6rem] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="px-5 pb-10 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/55 p-8 shadow-lg backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl text-stone-950">Rufes Fashions</p>
            <p className="mt-1 text-sm uppercase tracking-[0.28em] text-stone-500">Designer Boutique • Avadi</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-stone-600">
            <a href="#collections" className="hover:text-rose-500">Collections</a>
            <a href="#gallery" className="hover:text-rose-500">Gallery</a>
            <a href="#contact" className="hover:text-rose-500">Contact</a>
          </div>
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} Rufes Fashions. All rights reserved.</p>
        </div>
      </footer>
      <FloatingWhatsApp />
    </main>
  );
}
