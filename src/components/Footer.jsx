import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants/images";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer pt-4 pb-0 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={logo} className="logo" alt="Travel World" />
            <p className="mb-3 text-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              sed, fugiat excepturi non officiis nisi.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text">
              <h5>Quick Links</h5>
              <div className="links">
                <Link href="Hotels" className="text-link">
                  <LuDot /> Hotels
                </Link>
                <Link href="/places" className="text-link">
                  <LuDot /> Places
                </Link>
                <Link href="/about" className="text-link">
                  <LuDot /> About
                </Link>
                <Link href="/packages" className="text-link">
                  <LuDot /> Packages
                </Link>
                <Link href="/contact" className="text-link">
                  <LuDot /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy text-center">
        <p className="text-light">© 2024 - Travel World - Design by Manisha</p>
      </div>
    </footer>
  );
};

export default Footer;
