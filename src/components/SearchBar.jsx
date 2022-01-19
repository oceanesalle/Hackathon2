import './searchBar.css';
import items from '../productsList';
import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  console.log(items.filter(item => item.utility.includes(searchValue.toLowerCase())))
  return <div><input type="text" className="diy-searchbar" placeholder="De quoi j'ai besoin pour installer :" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/></div>;
}

export default SearchBar;