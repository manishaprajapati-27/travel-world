import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import PageHero from "../../components/PageHero";
import AboutUs from "../Home/AboutUs";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PageHero title="About" />
      <AboutUs />
    </motion.div>
  );
};

export default About;
