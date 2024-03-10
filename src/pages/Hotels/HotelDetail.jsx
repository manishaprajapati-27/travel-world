import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import PageHero from "../../components/PageHero";
import OwlCarousel from "react-owl-carousel";
import { lineAnim } from "../../animation";
import { peakmountain } from "../../constants/images";

const HotelDetail = () => {
  const { id } = useParams(); // For Extract the id parameter from the url
  const [hotel, setHotel] = useState(null); // Use useState for hold hotel detail

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        // Fetching hotel details based on the id parameter
        const response = await axios.get(`/data.json`); // Assuming your API endpoint is /data.json
        const selectedHotel = response.data.find(
          (hotel) => hotel.hotel_id === parseInt(id)
        );
        setHotel(selectedHotel);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotel();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PageHero title={hotel.hotel_name} inTitle="Hotels" />
      <section className="section hotel-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="hotel-detail">
                <div className="text">
                  <h3>{hotel.hotel_name}</h3>
                  <span>
                    {hotel.city}, {hotel.country}, {hotel.continent_name}
                  </span>
                </div>
                <OwlCarousel
                  className="hotel-carousel"
                  items={1}
                  loop
                  margin={10}
                  nav
                  dots={false}
                >
                  <div className="item">
                    <div className="image">
                      <img src={hotel.photo2} alt={hotel.hotel_name} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="image">
                      <img src={hotel.photo3} alt={hotel.hotel_name} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="image">
                      <img src={hotel.photo4} alt={hotel.hotel_name} />
                    </div>
                  </div>
                  <div className="item">
                    <div className="image">
                      <img src={hotel.photo5} alt={hotel.hotel_name} />
                    </div>
                  </div>
                </OwlCarousel>

                <div className="d-flex align-items-center breadcrumb mb-1">
                  <p>
                    <i>Batchelor</i>
                  </p>
                  <span className="text-secondary">|</span>
                  <p>
                    <i>Romance</i>
                  </p>
                </div>
                <div className="rates">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span>({hotel.star_rating} ratings)</span>
                </div>
                <p className="mb-1">{hotel.overview}</p>
                <div className="time">
                  <p>CheckIn Time : {hotel.checkin}</p>
                  <p>CheckOut Time : {hotel.checkout}</p>
                </div>
                <Link
                  to="#"
                  className="d-flex align-items-center link text-primary"
                >
                  <FiMapPin className="icon" /> View On Map
                </Link>
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
                          elit. Animi neque eligendi doloremque. Ad unde
                          similique temporibus sint natus, adipisci voluptatum,
                          reiciendis maiores placeat recusandae accusantium
                          laudantium. Corrupti architecto ut id laudantium
                          distinctio illum similique, officiis pariatur sequi
                          magnam, illo aut!
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
                          elit. Animi neque eligendi doloremque. Ad unde
                          similique temporibus sint natus, adipisci voluptatum,
                          reiciendis maiores placeat recusandae accusantium
                          laudantium. Corrupti architecto ut id laudantium
                          distinctio illum similique, officiis pariatur sequi
                          magnam, illo aut!
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
                          elit. Animi neque eligendi doloremque. Ad unde
                          similique temporibus sint natus, adipisci voluptatum,
                          reiciendis maiores placeat recusandae accusantium
                          laudantium. Corrupti architecto ut id laudantium
                          distinctio illum similique, officiis pariatur sequi
                          magnam, illo aut!
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
    </motion.div>
  );
};

export default HotelDetail;
