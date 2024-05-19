import { useEffect, useState } from "react";
import fetchSearchResults from "../../api/fetchProducts";
import { Result } from "../../api/fetchProducts";
import ProductCard from "../productCard/ProductCard";
import './Products.css'

function Products() {
  const [productsList, setProductsList] = useState<Result[]>([]);

  useEffect(() => {
    fetchSearchResults('Acer Nitro').then((response) => {
      setProductsList(response);
    });
  }, []);

  return (
    <main className="productsPage">
      {productsList.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </main>
  );
}

export default Products;
