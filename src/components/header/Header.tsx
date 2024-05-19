import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "../searchBar/SearchBar";

interface HeaderProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
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
