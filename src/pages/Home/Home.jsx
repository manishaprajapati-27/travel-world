import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import HeroSection from "./HeroSection";
import Destination from "./Destination";
import Offers from "./Offers";
import AboutUs from "./AboutUs";
import WeAreBest from "./WeAreBest";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HeroSection />
      <Destination />
      <Offers />
      <AboutUs />
      <WeAreBest />
    </motion.div>
  );
};

export default Home;
