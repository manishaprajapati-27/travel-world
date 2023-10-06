import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotels from "./pages/Hotels/Hotels";
import Places from "./pages/Places/Places";
import Packages from "./pages/Packages/Packages";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" element={<Home />} />
        <Route Component={Hotels} path="/hotels" element={<Hotels />} />
        <Route Component={Places} path="/places" element={<Places />} />
        <Route Component={About} path="/about" element={<About />} />
        <Route Component={Packages} path="/packages" element={<Packages />} />
      </Routes>
    </div>
  );
};

export default App;
