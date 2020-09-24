import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useStyles } from './stylesheet';
import { useTheme } from '../../App';
import ToggleDarkTheme from "../ToggleDarkTheme/ToggleDarkTheme";
import { ReactComponent as Logo } from "../../assets/images/airbnb-logo.svg";

const HeaderMenu = ({ onDarkThemeChanged }) => {
  const theme = useTheme()
  const classes = useStyles({ theme });
  const [ isShowedHamburgerMenu, setShowHamburgerMenu ] = useState('');

  const toggleResponsiveMenu = () => {
    setShowHamburgerMenu(!isShowedHamburgerMenu);
  };

  return (
    <div className={classes.HeaderMenu}>
      <div className={`topnav ${isShowedHamburgerMenu && 'isShowedHamburgerMenu'}`} id="headerNav">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <Link to="/" className="toggle-dark-theme">
          <ToggleDarkTheme
            onDarkThemeChanged={onDarkThemeChanged}
          />
        </Link>
        <Link to="/">Became a host</Link>
        <Link to="/">Help</Link>
        <Link to="/">Sign up</Link>
        <Link to="/">Login</Link>
        <Link to="/" className="icon" onClick={toggleResponsiveMenu}>
          <i className="fa fa-bars hamburger"></i>
        </Link>
      </div>
    </div>
  );
};




export default HeaderMenu;
