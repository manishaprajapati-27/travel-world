import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
  params: {
    hotel_id: "191605",
    arrival_date: "2024-02-22",
    departure_date: "2024-02-26",
    adults: "1",
    children_age: "1,17",
    room_qty: "10",
    languagecode: "en-us",
    currency_code: "EUR",
  },
  headers: {
    "X-RapidAPI-Key": "api_key",
    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  },
};

const HotelDetail = () => {
  const [loading, setLoading] = useState(true);
  const [hotelData, setHotelData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data);

        setHotelData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotelDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!hotelData) return null;

  return (
    <div>
      {/* Render hotel details here */}
      <pre>{JSON.stringify(hotelData, null, 2)}</pre>
    </div>
  );
};

export default HotelDetail;
