import React from "react";
import earth from "../images/Earth.png";

export default function Navbar() {
  return (
    <nav className="navigation">
      <img src={earth} alt="Earth logo" className="nav--logo" />
      <h3 className="nav--title">my travel journal.</h3>
    </nav>
  );
}
