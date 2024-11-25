"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const SwiperComponent = dynamic(() => import("@/components/SwiperComponent"), {
  ssr: false, // Désactive le rendu côté serveur pour le composant
});

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(".reveal", {
          delay: 200,
          distance: "50px",
          origin: "bottom",
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>KyNai</title>
        <meta name="description" content="Bienvenue sur KyNai - Mode et confort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background">
        <Header />
        <SwiperComponent />

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 reveal">
              Nos Produits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-header-gradient">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 reveal">
              À propos de KyNai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="reveal">
                <Image
                  src="/about-us.jpg"
                  alt="À propos de KyNai"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="reveal">
                <p className="text-lg leading-relaxed">
                  KyNai est une marque qui s'engage à proposer des vêtements de
                  qualité, stylés et confortables. Nous accordons une grande
                  importance à la durabilité et à l'éthique, en privilégiant
                  des matériaux et des partenaires de production responsables.
                  Découvrez nos collections et laissez-vous séduire par notre
                  style unique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background text-foreground py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 KyNai. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
