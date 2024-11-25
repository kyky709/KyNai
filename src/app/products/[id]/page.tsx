"use client";
import { useRouter } from "next/router";
import { products } from "@/data/products";

const ProductPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const product = products.find((product) => product.id === id);

  if (!router.isReady || isNaN(id)) {
    return <div>Chargement...</div>;
  }

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
