import React from "react";
import { Link } from "react-router-dom";
import { heropages } from "../../constants/images";

const AboutHero = () => {
  return (
    <section className="hero-section bg-light-alt">
      <div className="image">
        <img src={heropages} alt="Travel World" />
      </div>
      <div className="text">
        <h2 className="heading">About</h2>
        <div className="breadcrumb d-flex align-items-center justify-content-center">
          <p>
            <Link to={"/"} className="link">
              Home
            </Link>
          </p>
          <span>/</span>
          <p>About</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
