import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import { useTheme } from '../../App';
import { ReactComponent as NightIcon } from "../../assets/images/night-icon.svg";
import { ReactComponent as SunnyIcon } from "../../assets/images/sunny-icon.svg";

const useStyles = createUseStyles({
  ToggleContainer: {
    width: "70px",
    backgroundColor: ({theme}) => theme.toggleThemeBackgroud,
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "32px",
    padding: "2px",
    height: "32px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    '& .night-icon, & .sunny-icon': { height: "1.5rem" },
    '& .night-icon': {
      fill: '#FFDB2D',
    },
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
      '&.night': {
        left: "2px"
      }
    },
  },
});

const ToggleDarkTheme = ({ onDarkThemeChanged }) => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme()
  const classes = useStyles({ theme });
  
  const onToggleClicked = () => {
    onDarkThemeChanged(!selected);
    setSelected(!selected);
  }

  return (
    <div className={classes.ToggleContainer} onClick={onToggleClicked}>
      <NightIcon className="night-icon" />
      <div className={`toggle-button ${!selected && "night"}`}></div>
      <SunnyIcon className="sunny-icon" />
    </div>
  );
};

export default ToggleDarkTheme;
