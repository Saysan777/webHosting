import React from "react";
import "./pagescss/Aboutme.css";
import myphoto from "../components/img/myphoto.png";
import Headerbar from "../components/Headerbar";
import "../bootstrap/dist/css/bootstrap.min.css";

function Aboutme() {
  return (
    <div>
      <Headerbar />
      <div className="row col-12">
        <div className="card card1 col-4 ">
          <img className="card-img-top" src={myphoto} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="para1">Name: Alok Aryal </p>
            <p className="para2">Age: 22</p>
            <p className="para3">Address: Satungal, Kathmandu</p>
            <p></p>
          </div>
        </div>

        <div className="card card2 col-6">
          <div className="card-body">
            <h5 className="card-title"> About Me</h5>
            <p className="para1">
              <strong>Name</strong>: Alok Aryal
            </p>
            <p className="para2">
              <strong>Degree </strong>: Currently pursuing Bachelors in CSIT
            </p>
            <p className="para3">
              Hello, My name is <strong>Alok aryal</strong> and i am currently
              studying Bachelor in CSIT from ACHS college. I am a front end web
              developer. Hopefully, I will be a full stack developer somewhere
              in the near future. I definitely do love the idea of coding so
              want to persue frontend developer as career for me.
            </p>
            <p className="para4">
              <strong>University</strong>: Tribhuvan University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
