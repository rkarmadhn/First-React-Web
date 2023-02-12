import React from "react";
import "./Navigation.css";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md w-full">
      <NavDesktop />
      <NavMobile />
    </nav>
  );
}
