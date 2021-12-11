import React from "react";
import myphoto from "../components/img/myphoto.png";
import Headerbar from "../components/Headerbar";
import "./pagescss/Contact.css";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {MdOutgoingMail} from 'react-icons/md';

function Contactme() {
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
        <div className="card card2 col-6">
          <div className="card-body">
            <h5 className="card-title"> Contact me</h5>
            <div className="con">
              <a className="insta" href="https://www.instagram.com/saysan999/">
                <FaInstagram /> instagram
              </a>
              <a className="fb" href="https://www.facebook.com/zaraki.Aryal25/">
                <FaFacebook /> Facebook
              </a>
              <a
                className="lin"
                href="https://www.linkedin.com/in/alok-aryal-589a40216/"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                className="lin"
              >
                <MdOutgoingMail/> mail me: alokaryal32@gmail.com
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
