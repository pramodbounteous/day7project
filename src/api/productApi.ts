import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
