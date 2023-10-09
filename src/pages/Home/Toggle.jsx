import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { righthandicon } from "../../constants/images";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <motion.div
        layout
        className="accordian"
        onClick={() => setToggle(!toggle)}
      >
        <motion.div layout className="head">
          <h4 className="d-flex align-items-center">
            <img src={righthandicon} alt="" />
            {title}
          </h4>
        </motion.div>
        {toggle ? children : ""}
      </motion.div>
    </>
  );
};

export default Toggle;
