import { IconAlignRight, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Logo from "../../assets/logos.png";

export default function NavMobile() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="mobile-view flex justify-between items-center p-2 ">
      <div className="navbar-logos">
        <img src={Logo} alt="" />
      </div>
      <div className={`navbar-items ${isOpen ? "show" : ""}`}>
        <div className="nav-btn">
          <button onClick={handleToggle}>
            <IconX />
          </button>
        </div>
        
        <a href="http://">Home</a>
        <a href="http://">About Us</a>
      </div>
      <div className="navbar-button">
        <button onClick={handleToggle} type="button">
          <IconAlignRight />
        </button>
      </div>
    </div>
  );
}
