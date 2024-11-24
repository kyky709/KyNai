import { useRouter } from 'next/router';
import { products } from '@/data/products';
import ProductDetails from '@/components/ProductDetails';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === parseInt(id as string));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;