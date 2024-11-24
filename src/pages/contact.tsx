import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
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
        <title>KyNai - Contact</title>
      </Head>
      <main className={`${inter.className} bg-gray-100`}>
        <Header />
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 reveal">
              Contactez-nous
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
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