"use client";

import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const inter = Inter({ subsets: ['latin'] });

export default function Nouveautes() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
    });
  }, []);

  return (
    <>
      <Head>
        <title>KyNai - Nouveautés</title>
      </Head>
      <main className={`${inter.className} bg-gray-100`}>
        <Header />
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 reveal">
              Nos Nouveautés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 KyNai. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
