import React from 'react';
import './Cart.css';
import CartItem from '../cartItem/CartItem';

interface CartProps {
  cartValues: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
  }[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartValues, onRemove }) => {
  return (
    <section className="cart">
      <div className="itens">
        {cartValues.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>
      <div className="shoppingSummary">
        Resumo da compra
      </div>
    </section>
  );
}

export default Cart;
