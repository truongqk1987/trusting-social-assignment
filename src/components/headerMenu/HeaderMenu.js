import React from "react";
import { Link } from "react-router-dom";

import "./HeaderMenu.css";
import { ReactComponent as Logo } from "../../assets/images/airbnb-logo.svg";

const toggleResponsiveMenu = () => {
  var headerNavElem = document.getElementById("headerNav");
  if (headerNavElem.className === "topnav") {
    headerNavElem.className += " responsive";
  } else {
    headerNavElem.className = "topnav";
  }
};

const HeaderMenu = () => (
  <div className="topnav" id="headerNav">
    <Link className="logo-container">
      <Logo alt="close bubble" className="logo" />
    </Link>
    <Link to="/">Login</Link>
    <Link to="/">Sign up</Link>
    <Link to="/">Help</Link>
    <Link to="/">Became a host</Link>
    <Link to="/" className="icon" onClick={toggleResponsiveMenu}>
      <i class="fa fa-bars hamburger"></i>
    </Link>
  </div>
);

export default HeaderMenu;
