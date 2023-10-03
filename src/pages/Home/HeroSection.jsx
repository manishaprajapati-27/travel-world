import React from "react";
import hero from "../../assets/images/hero/hero.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="image">
        <img src={hero} alt="Travel World" />
      </div>
      <div className="text">
        <h4>Travel & Adventure</h4>
        <h2 className="heading">Enjoy Your Life Travel & Explore</h2>
        <h5>Enjoy The Awesome View Of Nature</h5>
      </div>
    </section>
  );
};

export default HeroSection;
