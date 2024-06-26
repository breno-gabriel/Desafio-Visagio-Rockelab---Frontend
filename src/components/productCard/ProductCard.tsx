import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    available_quantity: number;
  };
  onAddToCart: (product: { id: string; title: string; price: number; thumbnail: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const modifiedThumbnail = product.thumbnail.replace('-I.jpg', '-W.jpg');

  return (
    <section className="productCard">
      <img src={modifiedThumbnail} alt={product.title} className="productImage" />
      <div className="productInformation">
        <h2 className="productPrice">{product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}</h2>
        <h2 className="productDescription">{product.title}</h2>
      </div>
      <button className="shopButton" onClick={() => onAddToCart(product)}>Adicionar ao carrinho</button>
    </section>
  );
};

export default ProductCard;
