"use client";

import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const inter = Inter({ subsets: ['latin'] });

export default function TShirts() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
    });
  }, []);

  const tShirtProducts = products.filter(
    (product) => product.category === 't-shirt',
  );

  return (
    <>
      <Head>
        <title>KyNai - T-Shirts</title>
      </Head>
      <main className={`${inter.className} bg-gray-100`}>
        <Header />
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 reveal">
              Nos T-Shirts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tShirtProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 KyNai. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
