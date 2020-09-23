import React from "react";
import { Link } from "react-router-dom";

import ToggleDarkTheme from '../ToggleDarkTheme/ToggleDarkTheme';
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

const HeaderMenu = ({ onToggleDarkTheme, isDarkTheme }) => (
  <div className="topnav" id="headerNav">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <Link to="/">Login</Link>
    <Link to="/">Sign up</Link>
    <Link to="/">Help</Link>
    <Link to="/">Became a host</Link>
    <Link to="/" className="toggle-dark-theme"><ToggleDarkTheme onToggleDarkTheme={onToggleDarkTheme} value={isDarkTheme}/></Link>
    <Link to="/" className="icon" onClick={toggleResponsiveMenu}>
      <i className="fa fa-bars hamburger"></i>
    </Link>
  </div>
);

export default HeaderMenu;
