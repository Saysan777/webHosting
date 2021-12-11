import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Body from "../components/Body.js";
import Homepage from "../components/Homepage";
import Pagenotfound from "../components/Pagenotfound";
import Aboutme from "../pages/Aboutme.js";
import Portfolio from "../pages/Portfolio";
import Contactme from "../pages/Contactme";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/Home" exact element={<Body />} />
          <Route path="/Homepage" exact element={<Homepage />} />
          <Route path="*" exact element={<Pagenotfound />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contactme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
