import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import PageHero from "../../components/PageHero";

const Places = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PageHero title="Places" />
    </motion.div>
  );
};
export default Places;
