import React from "react";
import Bamza_108_Logo from "../../images/Bamza_108.png";
import "../Header/Header.css";

function Header() {
  return (
    <div className="Header">
      <img src={Bamza_108_Logo} className="Image108" />
      <h1 className="HeaderText">מפת החירום של 108</h1>
    </div>
  );
}

export default Header;
