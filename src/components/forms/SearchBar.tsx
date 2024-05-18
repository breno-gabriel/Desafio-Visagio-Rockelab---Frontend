import { IoSearch } from "react-icons/io5";
import './SearchBar.css'


function SearchBar() {

    return (
        <form className="SearchBar">
        <input 
        type="search"
        placeholder="Buscar produto"
        className="inputSearchBar"
        required
         />
        <button className="submissionButton"><IoSearch></IoSearch></button>
      </form>
    )

}

export default SearchBar; 