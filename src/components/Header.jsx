import "./header.css";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img
          className="logo"
          src="https://i.imgur.com/oVcUeRx.png"
          alt="logo"
        />
        <input className="searchBar" placeholder="Recherche un produit, une marque ou un conseil"/>
        <p className="login-text">Identifiez-vous</p>
        <p className="header-icon">
          <BsCart3 />
        </p>
      </div>
      <div className="header-container-mobile">
        <div className="header-upper-part">
          <img
            className="logo"
            src="https://i.imgur.com/oVcUeRx.png"
            alt="logo"
          />
          <p className="login-text">Identifiez-vous</p>
          <p className="header-icon">
            <BsCart3 />
          </p>
        </div>
        <input className="searchBar" placeholder="Recherche un produit, une marque ou un conseil"/>
      </div>
    </>
  );
};

export default Header;