import React from "react";
import {
  tajmahel,
  eiffel,
  northamerica,
  southamerica,
  huapi,
  phiphi,
} from "../../constants/images";

const Destination = () => {
  return (
    <section className="section destination">
      <div className="container">
        <h2 className="heading mb-2">We Provide Top Destinations</h2>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={tajmahel} alt="Taj Mahel" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>India</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={eiffel} alt="Eiffel Tour" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>Europe</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={northamerica} alt="North America" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>North America</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={southamerica} alt="South America" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>South America</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={huapi} alt="Huapi National Park" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>Argentina</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="card">
              <div className="image">
                <img src={phiphi} alt="Taj Mahel" />
                <span className="batch">5 Tours</span>
              </div>
              <div className="text">
                <a href="#">
                  <h4>Thailand</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
