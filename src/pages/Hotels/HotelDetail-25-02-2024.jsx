import React from "react";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HotelDetails } from "../../Data";

const HotelDetailss = () => {
  const navigate = useNavigate(HotelDetails);
  console.log(navigate);
  // const url = navigate.location.pathname;
  const [hotels, setHotels] = useState();
  const [hotel, setHotel] = useState(null);

  useEffect;
  useEffect(() => {
    const currentHotel = hotels.filter((HotelDetails) => HotelDetails === url);
    setHotel(currentHotel[0]);
  }, [hotels, url]);
  console.log(hotel);
  return (
    // {hotel && (
    <section className="section hotel-details">
      <div className="container">
        <h1 className="heading">heyyyy..</h1>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="image">
              {/* <img src={hotel.image} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="award">
          {hotel.awards.map((award) => (
            <Award title={award.title} />
          ))}
        </div>
      </div>
    </section>
    // )}
  );
};

const Award = () => {
  return (
    <div className="award">
      <h4>Title</h4>
      <div className="line">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, harum
          quas illum fugit sunt excepturi.
        </p>
      </div>
    </div>
  );
};

export default HotelDetailss;
