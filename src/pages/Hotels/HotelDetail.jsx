import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import "../../../public/data.json";

const HotelDetail = ({ hotel }) => {
  return (
    <section className="section hotel-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            {/* <div className="row"></div> */}
            <div className="hotels">
              <div className="card">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="image">
                      <img src={hotel.photo2} alt={hotel.hotel_name} />
                    </div>
                    <div className="d-flex align-items-center justify-content-center buttons">
                      <button onClick={() => window.history.back()}>
                        Go Back
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <Link to="#" className="text">
                      <div className="d-flex align-items-center head">
                        <h3>{hotel.hotel_name},</h3>
                        <span>
                          {hotel.city}, {hotel.country}
                        </span>
                      </div>
                      <div className="d-flex align-items-center breadcrumb">
                        <p>
                          <i>Batchelor</i>
                        </p>
                        <span className="text-secondary">|</span>
                        <p>
                          <i>Romance</i>
                        </p>
                      </div>
                    </Link>
                    <p className="mb-1">{hotel.overview}</p>
                    <div className="rates">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <span>({hotel.star_rating} ratings)</span>
                    </div>
                    <Link
                      to="#"
                      className="d-flex align-items-center link text-primary"
                    >
                      <FiMapPin className="icon" /> View On Map
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="gallery">
              <h2 className="heading mb-1">Latest Gallery</h2>
              <motion.div className="line" variants={lineAnim}></motion.div>
              <div className="gallery-card">
                <div className="row">
                  <div className="col-4">
                    <img src={peakmountain} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="text">
                      <h5>Praesent Eget Placerat</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi neque eligendi doloremque. Ad unde similique
                        temporibus sint natus, adipisci voluptatum, reiciendis
                        maiores placeat recusandae accusantium laudantium.
                        Corrupti architecto ut id laudantium distinctio illum
                        similique, officiis pariatur sequi magnam, illo aut!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-card">
                <div className="row">
                  <div className="col-4">
                    <img src={peakmountain} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="text">
                      <h5>Praesent Eget Placerat</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi neque eligendi doloremque. Ad unde similique
                        temporibus sint natus, adipisci voluptatum, reiciendis
                        maiores placeat recusandae accusantium laudantium.
                        Corrupti architecto ut id laudantium distinctio illum
                        similique, officiis pariatur sequi magnam, illo aut!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-card">
                <div className="row">
                  <div className="col-4">
                    <img src={peakmountain} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="text">
                      <h5>Praesent Eget Placerat</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi neque eligendi doloremque. Ad unde similique
                        temporibus sint natus, adipisci voluptatum, reiciendis
                        maiores placeat recusandae accusantium laudantium.
                        Corrupti architecto ut id laudantium distinctio illum
                        similique, officiis pariatur sequi magnam, illo aut!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HotelDetail;
