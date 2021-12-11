import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/body.css";
import myphoto from "./img/myphoto.png";

export const Body = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className = "mh1"> Welcome to my page</h1>
      <div className="mid1">
        <img className="img" src={myphoto} width="230px" height="200px" />
        <p>
          Name:Alok Aryal
          <br /> Currently pursuing Bachelors in CSIT
        </p>
        <p></p>
      </div>
      <button
        className="btn"
        onClick={() => {
          navigate("/Homepage");
        }}
      >
        My Portfolio
      </button>
    </div>
  );
};

export default Body;
