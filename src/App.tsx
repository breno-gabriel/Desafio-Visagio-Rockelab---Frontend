import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Products from './components/products/Products';

function App() {

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
    <Header searchValue = {searchValue} setSearchValue = {setSearchValue}></Header>
    <Products searchValue = {searchValue}></Products>
    </>
  )
}

export default App
