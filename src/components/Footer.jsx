import React from "react";
import desktop1 from "../assets/img/desktop_1.png";
import desktop2 from "../assets/img/desktop_2.png";
import laptop1 from "../assets/img/laptop_1.png";
import laptop2 from "../assets/img/laptop_2.png";
import tablet1 from "../assets/img/tablet_1.png";
import tablet2 from "../assets/img/tablet_2.png";
import mobile1 from "../assets/img/mobile_1.png";
import mobile2 from "../assets/img/mobile_2.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <img className="footer_desktop" src={desktop1} alt="footer1" />
      <img className="footer_desktop" src={desktop2} alt="footer2" />
      <img className="footer_laptop" src={laptop1} alt="footer1" />
      <img className="footer_laptop" src={laptop2} alt="footer2" />
      <img className="footer_tablet" src={tablet1} alt="footer1" />
      <img className="footer_tablet" src={tablet2} alt="footer2" />
      <img className="footer_mobile" src={mobile1} alt="footer1" />
      <img className="footer_mobile" src={mobile2} alt="footer2" />
    </div>
  );
};

export default Footer;
