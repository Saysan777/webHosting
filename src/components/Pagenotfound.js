import React from "react";
import { useNavigate, useLocation } from "react-router";
import "./css/Pagenot.css";
import oops from "./img/oops.png";

export const Pagenotfound = () => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="pagenot">
      <img className="oops" src={oops} width="600px" height="400px" />
      <h3>Hey there! Sorry, "{location.pathname}" page is not found.</h3>
      <button
        className="btn1"
        onClick={() => {
          navigate("/");
        }}
      >
        Go back?
      </button>
    </div>
  );
};

export default Pagenotfound;
