import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutHero />
    </motion.div>
  );
};

export default About;
