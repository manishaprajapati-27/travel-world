import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { logo } from "../constants/images";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img src={logo} alt="Travel World" />
          </a>
          <div className="navbar-nav">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Hotel
            </a>
            <a href="#" className="nav-link">
              Place
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Packages
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
