import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../constants/images";
import { FiHome, FiCoffee, FiPhone } from "react-icons/fi";
import { GiCommercialAirplane, GiInfo, GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to={"/"} className="logo">
            <img src={logo} alt="Travel World" />
          </Link>
          <div className="navbar-nav">
            <NavLink to={"/"} className="nav-link">
              <span>
                <FiHome />
              </span>
              Home
            </NavLink>
            <NavLink to={"/hotels"} className="nav-link">
              <span>
                <FiCoffee />
              </span>
              Hotels
            </NavLink>
            <NavLink to={"/places"} className="nav-link">
              <span>
                <GiCommercialAirplane />
              </span>
              Places
            </NavLink>
            <NavLink to={"/about"} className="nav-link">
              <span>
                <GiInfo />
              </span>
              About
            </NavLink>
            <NavLink to={"/packages"} className="nav-link">
              <span>
                <GiShoppingCart />
              </span>
              Packages
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              <span>
                <FiPhone />
              </span>
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
