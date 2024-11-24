import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    title: 'Pull en laine mérinos',
    description: 'Un pull chaud et confortable en laine mérinos.',
    image: '/pull1.jpg',
    category: 'pull',
  },
  {
    id: 2,
    title: 'Pull col roulé en cachemire',
    description: 'Un pull élégant et raffiné en cachemire.',
    image: '/pull2.jpg',
    category: 'pull',
  },
  {
    id: 3,
    title: 'T-shirt coton bio',
    description: 'Un t-shirt confortable et respectueux de l\'environnement.',
    image: '/tshirt1.jpg',
    category: 't-shirt',
  },
  {
    id: 4,
    title: 'T-shirt imprimé original',
    description: 'Un t-shirt original avec un motif audacieux.',
    image: '/tshirt2.jpg',
    category: 't-shirt',
  },
];