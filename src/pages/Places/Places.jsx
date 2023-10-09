import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import PlacesHero from "./PlacesHero";

const Places = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PlacesHero />
    </motion.div>
  );
};
export default Places;
