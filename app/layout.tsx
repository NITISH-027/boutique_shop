import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rufes-fashions.vercel.app'),
  title: 'Rufes Fashions | Designer Boutique in Avadi, Chennai',
  description: 'Rufes Fashions is a premium designer boutique in Avadi, Chennai offering custom stitching, bridal wear, party wear, ethnic collections and elegant designer dresses.',
  keywords: ['Rufes Fashions', 'designer boutique Avadi', 'boutique Chennai', 'custom stitching Avadi', 'bridal wear Chennai', 'party wear boutique'],
  openGraph: {
    title: 'Rufes Fashions | Crafting Elegance Into Every Stitch',
    description: 'Premium designer boutique wear tailored with luxury, beauty, and perfection in Avadi, Chennai.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rufes Fashions',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
