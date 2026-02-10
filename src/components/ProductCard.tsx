import type { Product } from "../api/productApi";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain mb-4"/>
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-auto bg-blue-500 text-white py-1 px-3 rounded text-center"
      >
        View Details
      </Link>
    </div>
  );
};
