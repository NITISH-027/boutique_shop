import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917708293555?text=Hello%20Rufes%20Fashions%2C%20I%20would%20like%20to%20book%20a%20consultation."
      aria-label="Chat with Rufes Fashions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_45px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
