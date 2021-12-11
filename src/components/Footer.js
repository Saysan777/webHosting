import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="foot1">
        <h3>
          Contact me:
          <a href="https://www.instagram.com/saysan999/"> Instagram </a> |
          <a href="https://www.facebook.com/zaraki.Aryal25/"> Facebook </a> |
          <a href="https://www.linkedin.com/in/alok-aryal-589a40216/"> LinkedIn </a>
          <span className="pa1">
            Built with <a href="https://reactjs.org/" className="rea">`react`</a>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
