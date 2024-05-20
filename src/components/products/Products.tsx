import React, { useEffect, useState } from "react";
import fetchSearchResults from "../../api/fetchProducts";
import { Result } from "../../api/fetchProducts";
import ProductCard from "../productCard/ProductCard";
import LoadingPage from "../loadingPage/LoadingPage";
import './Products.css';

interface ProductsProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  cartValues: { id: string; title: string; price: number; thumbnail: string; }[];
  setCartValues: React.Dispatch<React.SetStateAction<any[]>>;
  onAddToCart: (product: { id: string; title: string; price: number; thumbnail: string }) => void;
}

function Products({ searchValue, setSearchValue, cartValues, setCartValues, onAddToCart }: ProductsProps) {
  const [productsList, setProductsList] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchSearchResults(searchValue).then((response) => {
      setProductsList(response);
      setLoading(false);
    });
  }, [searchValue]);

  return (
    loading ? <LoadingPage /> : <main className="productsPage">
      {productsList.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </main>
  );
}

export default Products;
