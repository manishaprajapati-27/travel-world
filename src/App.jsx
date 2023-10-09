import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotels from "./pages/Hotels/Hotels";
import Places from "./pages/Places/Places";
import Packages from "./pages/Packages/Packages";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import HotelDetail from "./pages/Hotels/HotelDetail";

// Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.path}>
          <Route Component={Home} path="/" element={<Home />} />
          <Route Component={Hotels} path="/hotels" element={<Hotels />} />
          <Route
            Component={HotelDetail}
            path="/hotels/:id"
            element={<HotelDetail />}
          />
          <Route Component={Places} path="/places" element={<Places />} />
          <Route Component={About} path="/about" element={<About />} />
          <Route Component={Packages} path="/packages" element={<Packages />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
