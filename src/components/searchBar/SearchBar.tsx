import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './SearchBar.css';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault(); 

  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar produto"
        className="inputSearchBar"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button className="submissionButton"><IoSearch /></button>
    </form>
    
  );
}

export default SearchBar;