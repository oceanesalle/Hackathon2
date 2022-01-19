import './searchBar.css';
import items from '../productsList';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  console.log(items.filter(item => item.utility.includes(searchValue.toLowerCase())))
  return(<div>
    <div className="diy-searchbar-container"><input type="text" className="diy-searchbar" placeholder="De quoi j'ai besoin pour installer :" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/></div>
    {searchValue === '' ? null : <div className="diy-search-result">{items.filter(item => item.utility.includes(searchValue.toLowerCase())).map(one => ( <ProductCard image={one.image} name={one.name} description={one.desc} price={one.price}/> ))}</div>}
</div>)



}

export default SearchBar;