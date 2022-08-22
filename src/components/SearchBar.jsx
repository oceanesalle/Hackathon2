import './searchBar.css';
import items from '../productsList';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return(<div>
    <div className="diy-searchbar-container">
      <input type="text" className="diy-searchbar" placeholder="De quoi ai-je besoin pour installer :" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
    <div className='diy-suggestions'>
        <p>Suggestions:</p>
        <p onClick={()=> setSearchValue('baignoire')}> Baignoire </p>
        <p onClick={()=> setSearchValue('avion de chasse')}> Avion de chasse </p>
        <p onClick={()=> setSearchValue('carrelage')}> Carrelage </p>
        <p onClick={()=> setSearchValue('poêle à bois')}> Poêle à bois </p>
      </div>
    <div className={searchValue === '' ? 'searchbar-explanation' : 'hidden'}>
      <p><b>Vous n'êtes pas sûr de ce dont vous avez besoin pour vos travaux?</b></p>
      <p>Tapez ce que vous souhaitez faire dans la barre de recherche ci-dessus. Nous nous chargerons de vous proposer tous les produits nécessaires !</p>
    </div>
    {searchValue === '' ? null : <div className="diy-search-result">{items.filter(item => item.utility.includes(searchValue.toLowerCase())).map(one => ( <ProductCard image={one.image} name={one.name} description={one.desc} price={one.price} key={one.id}/> ))}</div>}  
</div>)



}

export default SearchBar;