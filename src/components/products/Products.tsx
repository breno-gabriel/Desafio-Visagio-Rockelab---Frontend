import React, { useEffect, useState } from "react";
import fetchSearchResults from "../../api/fetchProducts";
import { Result } from "../../api/fetchProducts";
import ProductCard from "../productCard/ProductCard";
import './Products.css'

interface ProductsProps {
  searchValue: string;
}

function Products({ searchValue }: ProductsProps) {
  const [productsList, setProductsList] = useState<Result[]>([]);

  useEffect(() => {
    fetchSearchResults(searchValue).then((response) => {
      setProductsList(response);
    });
  }, [searchValue]);

  return (
    <main className="productsPage">
      {productsList.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </main>
  );
}

export default Products;
