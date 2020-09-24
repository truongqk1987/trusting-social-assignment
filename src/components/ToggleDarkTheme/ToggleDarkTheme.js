import React, { useState } from "react";
import "./ToggleDarkTheme.css";
import { ReactComponent as NightIcon } from "../../assets/images/night-icon.svg";
import { ReactComponent as SunnyIcon } from "../../assets/images/sunny-icon.svg";

const ToggleDarkTheme = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="toggle-container" onClick={() => setSelected(!selected)}>
      <NightIcon height="18px" className="night" />
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>A</div>
      <SunnyIcon height="18px" className="sunny" />
    </div>
  );
};

export default ToggleDarkTheme;
