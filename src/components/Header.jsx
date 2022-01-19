import React from 'react';
// import {BsCart3} from 'react-icons/bs';
// import logo from '../assets/mano.png';
import mobile from '../assets/MobileL.png'
import tablette from '../assets/Tablette.png'
import laptop from '../assets/Laptop.png'
import desktop from '../assets/Desktop.png'
import "./Header.css"

const Header = () => {
  return (

  <div>
  <img className="header_desktop" src={mobile} alt="Desktop"/>
  <img className="header_mobile" src={mobile} alt="Mobile"/>
  <img className="header_tablet" src={tablette} alt="Tablette"/>
  <img className="header_laptop" src={laptop} alt="Laptop"/>
  </div>
  );
};


export default Header;