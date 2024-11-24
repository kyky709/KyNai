import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'power2.out' });
    gsap.from('.swiper-slide', { duration: 1, y: 100, opacity: 0, stagger: 0.2, ease: 'power2.out' });
  }, []);

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}