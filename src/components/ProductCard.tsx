import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{product.description}</p>
        <Link href={`/products/${product.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voir le produit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;