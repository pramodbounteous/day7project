import { useEffect, useState } from "react";
import { fetchProducts} from "../api/productApi";
import type { Product } from "../api/productApi";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};
