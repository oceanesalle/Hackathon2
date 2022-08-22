import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Soldes">Soldes</Link>
        </li>
        <li>
          <Link to="/Bonsplans">Bons plans</Link>
        </li>
        <li>
          <Link to="/Meilleursventes">Meilleurs ventes</Link>
        </li>
        <li>
          <Link to="/Diy">DIY</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;