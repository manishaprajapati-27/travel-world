import React from "react";
import { Link } from "react-router-dom";
import { heropages } from "../constants/images";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const PageHero = ({ title }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="hero-section bg-light-alt">
      <div className="image">
        <img src={heropages} alt="Travel World" />
      </div>
      <div className="text">
        <h2 className="heading">{title}</h2>
        <div className="breadcrumb d-flex align-items-center justify-content-center">
          <p>
            <Link to={"/"} className="link">
              Home
            </Link>
          </p>
          <span>/</span>
          <p>{title}</p>
        </div>
        <button className="back" onClick={goBack}>
          <MdKeyboardDoubleArrowLeft /> Go Back
        </button>
      </div>
    </section>
  );
};

export default PageHero;
