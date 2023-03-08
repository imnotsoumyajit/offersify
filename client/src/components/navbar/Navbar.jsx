import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Offersify</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Offersify Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;