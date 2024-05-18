import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";


function Header() {
  return (
    <header className="header">
      <div className="hero">
        <h1 id="logoName">TechTavern</h1>
        <form className="SearchBar">
          <input 
          type="search"
          placeholder="Buscar produto"
          className="inputSearchBar"
          required
           />
          <button className="submissionButton"><IoSearch></IoSearch></button>
        </form>
        <button id="carrinho"><AiOutlineShoppingCart></AiOutlineShoppingCart></button>
      </div>
    </header>
  );
}

export default Header;
