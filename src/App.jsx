import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import axios from "axios";
import Hotels from "./pages/Hotels/Hotels";
import Places from "./pages/Places/Places";
import Packages from "./pages/Packages/Packages";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HotelDetail from "./pages/Hotels/HotelDetail";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  console.log(location);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setHotels(response.data);
        // setHotels(response.data.slice(0, 5));
        console.log(response.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.path}>
          <Route Component={Home} path="/" element={<Home />} />
          <Route Component={Hotels} path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          <Route Component={Places} path="/places" element={<Places />} />
          <Route Component={About} path="/about" element={<About />} />
          <Route Component={Packages} path="/packages" element={<Packages />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
