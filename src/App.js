import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navs from "./components/Navbar";
import Footers from "./components/Footer";
import Home from "./pages/Home";
import Announcement from "./pages/Announcements";
import Services from "./pages/Service";
import Benefit from "./pages/Benefits";
import Hospitals from "./pages/Hospital";
import Claim from "./pages/Claims";
import Quickl from "./pages/QuickLink";

function App() {
  return (
    <div className="">
      <Navs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="announcements" element={<Announcement />} />
        <Route path="service" element={<Services />} />
        <Route path="benefits" element={<Benefit />} />
        <Route path="hospital" element={<Hospitals />} />
        <Route path="claim" element={<Claim />} />
        <Route path="quicklink" element={<Quickl />} />
      </Routes>

      <Footers />
    </div>
  );
}

export default App;
