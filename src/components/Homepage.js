import React from "react";
import "./css/Homepage.css";
import Footer from "./Footer";
import Headerbar from "./Headerbar";
import Aboutme from "../pages/Aboutme.js";
import "../bootstrap/dist/css/bootstrap.min.css";

export const Homepage = () => {
  return (
    <div>
      <Aboutme />
      <Footer />
    </div>
  );
};

export default Homepage;
