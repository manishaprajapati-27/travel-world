import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import HotelHero from "./HotelHero";
import HotelList from "./HotelList";

const Hotels = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HotelHero />
      <HotelList />
    </motion.div>
  );
};

export default Hotels;
