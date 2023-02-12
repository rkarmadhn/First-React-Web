import React from "react";
import Logo from "../../assets/logos.png"

export default function NavDesktop() {
  return (
    <div className="desktop-view flex justify-between items-center px-8 py-2 ">
      <div className="navbar-logos">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-items">
        <a href="">Home</a>
      </div>
    </div>
  );
}
