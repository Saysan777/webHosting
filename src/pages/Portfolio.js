import React from "react";
import "../bootstrap/dist/css/bootstrap.min.css";
import Headerbar from "../components/Headerbar";
import "./pagescss/Portfolio.css";
import myphoto from "../components/img/myphoto.png";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBook,
  FaGithub,
} from "react-icons/fa";

function Portfolio() {
  return (
    <div>
      <Headerbar />
      <div className="row col-12">
        <div className="card card11 col-4 ">
          <img className="card-img-top" src={myphoto} />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p>Name: Alok Aryal </p>
            <p>Age: 22</p>
            <p>Address: Satungal, Kathmandu</p>
            <p></p>
          </div>
        </div>

        <div className="card22 col-6">
          <h1> Technologies i am familiar with</h1>
          <div className="main">
            <div>
              <FaHtml5 className="html" /> <br />
              <p className="para1">HTML</p>
            </div>

            <div className="f1">
              <FaCss3 className="css" /> <br />
              <p className="para2">CSS</p>
            </div>

            <div className="f2">
              <FaJs className="Js" />
              <p className="para3">JS </p>
            </div>
          </div>

          <div className="main2">
            <div>
              <FaReact className="react" />
              <p className="para4">React</p>
            </div>

            <div>
              <FaNodeJs className="node" />
              <p className="para5">Node</p>
            </div>
          </div>
          <div className="main3">
            <div>
              <p className="resume">
                <FaBook />
                <a href="">resume</a>
              </p>
            </div>
            <div>
              <p className="git">
                <FaGithub />
                <a href="https://github.com/Saysan777">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
