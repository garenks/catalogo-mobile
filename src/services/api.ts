import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
}

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const CATEGORIAS_MASCULINAS = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
];

export const CATEGORIAS_FEMININAS = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export const getProdutosPorCategoria = async (
  categoria: string,
): Promise<Product[]> => {
  const response = await api.get(`/products/category/${categoria}`);
  return response.data.products;
};

export const getProdutoPorId = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
