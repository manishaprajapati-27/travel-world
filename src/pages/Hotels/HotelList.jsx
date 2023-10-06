import React from "react";
import { Link } from "react-router-dom";
import { peakmountain } from "../../constants/images";
import { FiMapPin } from "react-icons/fi";

const HotelList = () => {
  return (
    <section className="section hotel-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by name, address, etc.."
                />
              </div>
              <div className="col-3">
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
        </div>
      </div>
    </section>
  );
};

export default HotelList;
