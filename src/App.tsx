import React, { useState } from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [cartValues, setCartValues] = useState<any[]>([]);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const handleRemove = (id: string) => {
    setCartValues(cartValues.filter(item => item.id !== id));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleAddToCart = (item: { id: string; title: string; price: number; thumbnail: string }) => {
    setCartValues([...cartValues, item]);
  };

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} toggleCartVisibility={toggleCartVisibility} />
      <Products 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        cartValues={cartValues} 
        setCartValues={setCartValues} 
        onAddToCart={handleAddToCart}
      />
      {isCartVisible && <Cart cartValues={cartValues} onRemove={handleRemove} />}
    </>
  );
}

export default App;
