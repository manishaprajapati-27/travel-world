import React from "react";
import { icon2, about1, about2, about3, about4 } from "../../constants/images";

const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-6">
                <div className="images">
                  <img src={about1} className="mb-1" alt="" />
                  <img src={about3} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="images mt-4">
                  <img src={about2} className="mb-1" alt="" />
                  <img src={about4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="text">
              <h5 className="sub-heading">Our Travel World</h5>
              <h2 className="heading mb-1">Welcome To Travel World</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                deserunt voluptatem corporis quo exercitationem adipisci. Iste
                laborum quibusdam sequi, dicta consequuntur nemo consequatur
                dolor esse.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info">
                    <div className="row d-flex align-items-center icon-row">
                      <div className="col-3">
                        <div className="icon">
                          <img src={icon2} alt="plane" />
                        </div>
                      </div>
                      <div className="col-9">
                        <h4>Travel Arrangements</h4>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis modi iure non.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info">
                    <div className="row d-flex align-items-center icon-row">
                      <div className="col-3">
                        <div className="icon">
                          <img src={icon2} alt="plane" />
                        </div>
                      </div>
                      <div className="col-9">
                        <h4>Travel Arrangements</h4>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis modi iure non.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info">
                    <div className="row d-flex align-items-center icon-row">
                      <div className="col-3">
                        <div className="icon">
                          <img src={icon2} alt="plane" />
                        </div>
                      </div>
                      <div className="col-9">
                        <h4>Travel Arrangements</h4>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis modi iure non.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="info">
                    <div className="row d-flex align-items-center icon-row">
                      <div className="col-3">
                        <div className="icon">
                          <img src={icon2} alt="plane" />
                        </div>
                      </div>
                      <div className="col-9">
                        <h4>Travel Arrangements</h4>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis modi iure non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
