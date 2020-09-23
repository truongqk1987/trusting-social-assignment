import React from 'react';
import './ToggleDarkTheme.css';
import { ReactComponent as NightIcon } from '../../assets/images/night-icon.svg';
import { ReactComponent as SunnyIcon } from '../../assets/images/sunny-icon.svg';


const ToggleDarkTheme = ({ onToggleDarkTheme, value }) => {
  return <>
    <input
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
      checked={value}
      readOnly
    />
    <label
      className="react-switch-label"
      htmlFor={`react-switch-new`}
      onClick={onToggleDarkTheme}
    >
      <NightIcon />
      <span className={`react-switch-button`} />
      <SunnyIcon />
    </label>
</>
}

export default ToggleDarkTheme;