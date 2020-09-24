import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import ToggleDarkTheme from "../ToggleDarkTheme/ToggleDarkTheme";
import { ReactComponent as Logo } from "../../assets/images/airbnb-logo.svg";

const useStyles = createUseStyles({
  HeaderMenu: {
    "& > .topnav": {
      overflow: "hidden",
      display: 'flex',
      alignItems: 'center',
      "& a": {
        display: "block",
        color: "#ffffff",
        padding: "0.25rem 1.25rem",
        textDecoration: "none",
        "&:hover, &:active": {
          backgroundColor: "transparent",
          color: "#ffffff",
        },

        "&.logo-container": {
          flexGrow: 1,
          paddingLeft: 0,
          "& .logo": {
            height: "2rem",
            width: "2rem",
          },
        },
        "&.icon": {
          paddingRight: 0,
          display: "none",
          "& .hamburger": {
            fontSize: "1.5rem",
          },
        },
      },
    },
    
  },
  "@media (max-width: 600px)": {
    HeaderMenu: {
      "& > .topnav a": {
        display: 'none',
        "&:first-child": {
          display: "block",
        },
        "&.icon": {
          float: "right",
          display: "block",
        },
      },
      "& > .topnav.isShowedHamburgerMenu": {
        position: "relative",
        flexDirection: 'column',
        alignItems: 'unset',
        "& .icon": {
          position: "absolute",
          right: 0,
          top: 0,
        },
        "& a": {
          display: "block ",
          textAlign: "left",
          padding: '0.5rem 0.25rem',
        },
      },
    }
    
  },
});


const HeaderMenu = ({ onToggleDarkTheme, isDarkTheme }) => {
  const classes = useStyles();
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
            onToggleDarkTheme={onToggleDarkTheme}
            value={isDarkTheme}
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
