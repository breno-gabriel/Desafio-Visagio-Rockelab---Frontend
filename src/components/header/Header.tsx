import React, { useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "../searchBar/SearchBar";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <header className="header">
      <div className="hero">
        <h1 className="logoName">TechTavern</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <button className="carrinho"><AiOutlineShoppingCart /></button>
      </div>
    </header>
  );
}

export default Header;
