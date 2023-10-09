import React from "react";
import { Link } from "react-router-dom";
import { peakmountain } from "../../constants/images";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { lineAnim } from "../../animation";

const HotelList = () => {
  return (
    <section className="section hotel-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by name, address, etc.."
                />
              </div>
              <div className="col-4">
                <button className="button">Find Now</button>
              </div>
            </div>
            <div className="hotels">
              <div className="card">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="image">
                      <img src={peakmountain} alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center buttons">
                      <a href="#" className="button">
                        Book Now
                      </a>
                      <a href="#" className="button">
                        View Details
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <Link to="#" className="text">
                      <div className="d-flex align-items-center head">
                        <h3>Peak Mountain View,</h3>
                        <span>401-451 Clay St, USA</span>
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
                    <p className="mb-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque quibusdam corporis natus dicta asperiores
                      perspiciatis odit at sunt ab eius!
                    </p>
                    <Link
                      to="#"
                      className="d-flex align-items-center link text-primary"
                    >
                      <FiMapPin className="icon" /> View On Map
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className="card">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="image">
                      <img src={peakmountain} alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center buttons">
                      <a href="#" className="button">
                        Book Now
                      </a>
                      <a href="#" className="button">
                        View Details
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <Link to="#" className="text">
                      <div className="d-flex align-items-center head">
                        <h3>Peak Mountain View,</h3>
                        <span>401-451 Clay St, USA</span>
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
                    <p className="mb-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque quibusdam corporis natus dicta asperiores
                      perspiciatis odit at sunt ab eius!
                    </p>
                    <Link
                      to="#"
                      className="d-flex align-items-center link text-primary"
                    >
                      <FiMapPin className="icon" /> View On Map
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className="card">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="image">
                      <img src={peakmountain} alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center buttons">
                      <a href="#" className="button">
                        Book Now
                      </a>
                      <a href="#" className="button">
                        View Details
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <Link to="#" className="text">
                      <div className="d-flex align-items-center head">
                        <h3>Peak Mountain View,</h3>
                        <span>401-451 Clay St, USA</span>
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
                    <p className="mb-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque quibusdam corporis natus dicta asperiores
                      perspiciatis odit at sunt ab eius!
                    </p>
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
          <div className="col-lg-4 col-md-12 col-sm-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelList;
