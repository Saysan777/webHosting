import React from "react";
import { useNavigate } from "react-router-dom";
import "../bootstrap/dist/css/bootstrap.min.css";
import "./css/Headerbar.css";

function Headerbar({ history }) {
  let navigate = useNavigate();
   const getColor = (curr) =>{
     if(history.location.pathname===curr){
       return "#1898FS";
     }
   }
  
  return (
    <div class="main">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2
          class="navbar-brand"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </h2>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a
                class="nav-link"
                href="#"
                onClick={() => {
                  navigate("/aboutme");
                }}
              >
                About me
              </a>
            </li>
            <li class="nav-item hello1">
              <a
                class="nav-link "
                href="#"
                onClick={() => {
                  navigate("/portfolio");
                }}
              >
                Portfolio
              </a>
            </li>
            <li class="nav-item hello2">
              <a
                class="nav-link "
                href="#"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Headerbar;
