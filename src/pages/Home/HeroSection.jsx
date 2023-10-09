import React from "react";
import { hero } from "../../constants/images";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const HeroSection = () => {
  //   const titleAnim = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1, transition: { duration: 2 } },
  //   };
  //   const textAnim = {
  //     hidden: { x: 100 },
  //     show: {
  //       x: 0,
  //       transition: {
  //         duration: 2,
  //         ease: "easeOut",
  //         staggerChildren: 1,
  //         when: "beforeChildren",
  //       },
  //     },
  //   };

  return (
    <section className="hero">
      <div className="image">
        <img src={hero} alt="Travel World" />
      </div>
      <motion.div
        className="text"
        // variants={textAnim}
        // initial="hidden"
        // animate="show"
      >
        <motion.h4 variants={titleAnim}>Travel & Adventure</motion.h4>
        <motion.h2 className="heading" variants={titleAnim}>
          Enjoy Your Life Travel & Explore
        </motion.h2>
        <motion.h5 variants={titleAnim}>
          Enjoy The Awesome View Of Nature
        </motion.h5>
      </motion.div>
    </section>
  );
};

export default HeroSection;
