import React from "react";
import Toggle from "./Toggle";
import { AnimateSharedLayout, LayoutGroup } from "framer-motion";

const WeAreBest = () => {
  return (
    <section className="section we-are-best">
      <div className="container">
        <LayoutGroup>
          <Toggle title="We have the best Travel Packages">
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae nesciunt in. Molestiae obcaecati ad
                deserunt porro magni corrupti ut.
              </p>
            </div>
          </Toggle>
          <Toggle title="We have the best Travel Packages">
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae nesciunt in. Molestiae obcaecati ad
                deserunt porro magni corrupti ut.
              </p>
            </div>
          </Toggle>
          <Toggle title="We have the best Travel Packages">
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae nesciunt in. Molestiae obcaecati ad
                deserunt porro magni corrupti ut.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default WeAreBest;
