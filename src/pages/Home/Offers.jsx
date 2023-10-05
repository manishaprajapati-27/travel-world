import React from "react";
import { pattern1, pattern2, offer1 } from "../../constants/images";

const Offers = () => {
  return (
    <section className="section offers pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={offer1} alt="" />
              <div className="info">
                <img src={pattern1} className="pattern1" alt="" />
                <div className="text">
                  <h5>Attraction & Tours</h5>
                  <h3>Special Offers</h3>
                  <h6>Save up to 40%</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={offer1} alt="" />
              <div className="info even-info">
                <img src={pattern2} className="pattern1" alt="" />
                <div className="text">
                  <h5>Attraction & Tours</h5>
                  <h3>Special Offers</h3>
                  <h6>Save up to 40%</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={offer1} alt="" />
              <div className="info">
                <img src={pattern1} className="pattern1" alt="" />
                <div className="text">
                  <h5>Attraction & Tours</h5>
                  <h3>Special Offers</h3>
                  <h6>Save up to 40%</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={offer1} alt="" />
              <div className="info even-info">
                <img src={pattern2} className="pattern1" alt="" />
                <div className="text">
                  <h5>Attraction & Tours</h5>
                  <h3>Special Offers</h3>
                  <h6>Save up to 40%</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
