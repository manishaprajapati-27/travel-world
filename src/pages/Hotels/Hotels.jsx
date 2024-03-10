import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import PageHero from "../../components/PageHero";
import HotelList from "./HotelList";

const Hotels = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PageHero title="Hotels" />
      <HotelList />
    </motion.div>
  );
};

export default Hotels;
