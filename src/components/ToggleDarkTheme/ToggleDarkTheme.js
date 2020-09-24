import React, { useState } from "react";

import { useTheme } from "App";
import { ReactComponent as NightIcon } from "assets/images/night-icon.svg";
import { ReactComponent as SunnyIcon } from "assets/images/sunny-icon.svg";

import { useStyles } from "./stylesheet";

const ToggleDarkTheme = ({ onDarkThemeChanged }) => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme });

  const onToggleClicked = () => {
    onDarkThemeChanged(!selected);
    setSelected(!selected);
  };

  const renderer = (
    <div className={classes.ToggleContainer} onClick={onToggleClicked}>
      <NightIcon className="night-icon" />
      <div className={`toggle-button ${!selected && "night"}`}></div>
      <SunnyIcon className="sunny-icon" />
    </div>
  );

  return renderer;
};

export default ToggleDarkTheme;
