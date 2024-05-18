import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "../forms/SearchBar";


function Header() {
  return (
    <header className="header">
      <div className="hero">
        <h1 className="logoName">TechTavern</h1>
        <SearchBar></SearchBar>
        <button className="carrinho"><AiOutlineShoppingCart></AiOutlineShoppingCart></button>
      </div>
    </header>
  );
}

export default Header;
