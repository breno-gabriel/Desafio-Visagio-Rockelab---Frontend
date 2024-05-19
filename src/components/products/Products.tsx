import React, { useEffect, useState } from "react";
import fetchSearchResults from "../../api/fetchProducts";
import { Result } from "../../api/fetchProducts";
import ProductCard from "../productCard/ProductCard";
import LoadingPage from "../loadingPage/LoadingPage";
import './Products.css'

interface ProductsProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>

}

function Products({ searchValue, setSearchValue }: ProductsProps) {

  const [productsList, setProductsList] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetchSearchResults(searchValue).then((response) => {
      setProductsList(response);
      setLoading(false)

    });

  }, );

  return (

    loading ? <LoadingPage></LoadingPage> : <main className="productsPage">
          {productsList.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </main>
  );
}

export default Products;
