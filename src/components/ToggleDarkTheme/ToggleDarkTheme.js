import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import { ReactComponent as NightIcon } from "../../assets/images/night-icon.svg";
import { ReactComponent as SunnyIcon } from "../../assets/images/sunny-icon.svg";

const useStyles = createUseStyles({
  ToggleContainer: {
    width: "70px",
    backgroundColor: "#c4c4c4",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "32px",
    padding: "2px",
    height: "32px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    '& .night, & .sunny': { height: "1.5rem" },
    '& .toggle-button': {
      height: "32px",
      borderRadius: "18px",
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#ffffff",
      color: "white",
      padding: "8px 12px",
      minWidth: "unset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "32px",
      boxSizing: "border-box",
      position: "absolute",
      left: "40px",
      transition: "all 0.3s ease",
      '&.disabled': {
        left: "2px"
      }
    },
  },
});

const ToggleDarkTheme = () => {
  const [selected, setSelected] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.ToggleContainer} onClick={() => setSelected(!selected)}>
      <NightIcon className="night" />
      <div className={`toggle-button ${selected && "disabled"}`}></div>
      <SunnyIcon className="sunny" />
    </div>
  );
};

export default ToggleDarkTheme;
