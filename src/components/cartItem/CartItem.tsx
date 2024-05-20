import React from 'react';
import './CartItem.css';
import { MdDeleteForever } from "react-icons/md";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
  };
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const modifiedThumbnail = item.thumbnail.replace('-I.jpg', '-I.jpg');

  return (
    <section className="cartItem">
      <img src={modifiedThumbnail} alt={item.title} className='ProductImage' />
      <div className='content'>
        <h3 className='itemDescription'>{item.title}</h3>
        <p className='itemPrice'>{item.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}</p>
      </div>
      <button className="removeButton" onClick={() => onRemove(item.id)}>
        <MdDeleteForever />
      </button>
    </section>
  );
}

export default CartItem;
