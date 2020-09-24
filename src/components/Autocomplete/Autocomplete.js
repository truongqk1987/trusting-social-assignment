import React, { useState } from "react";
import isEmpty from "lodash.isempty";

import { useTheme } from "../../App";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";
import { useStyles } from "./stylesheet";

const Options = ({ suggestList, classes, activeOption, onOptionClicked }) => (
  <ul className={classes.Options}>
    {suggestList.map((value, index) => (
      <li
        className={`option ${activeOption === index && "active"}`}
        key={value}
        onClick={onOptionClicked}
      >
        {value}
      </li>
    ))}
  </ul>
);

const AutocompleteInput = ({ suggestList, onSearchChanged, resetSuggestList }) => {
  const [userInput, setUserInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  const theme = useTheme();
  const classes = useStyles({ theme });

  const onChange = (event) => {
    onSearchChanged(event.target.value);
    setUserInput(event.target.value);
    setActiveOption(0);
    setShowOptions(true);
  };

  const onOptionClicked = (event) => {
    setShowOptions(false);
    setActiveOption(0);
    setUserInput(event.currentTarget.innerText);
    resetSuggestList();
  }

  const onKeyDown = (event) => {
    // ENTER
    if (event.keyCode === 13) {
      setUserInput(suggestList[activeOption])
      setActiveOption(0);
      setShowOptions(false);
      resetSuggestList();
    } else if (event.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (event.keyCode === 40) {
      if (activeOption === suggestList.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  }

  return (
    <>
      <div className={classes.SearchBox}>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
      </div>
      {!isEmpty(suggestList) && userInput && showOptions && (
        <Options
          {...{ classes, suggestList, showOptions, activeOption, userInput, onOptionClicked }}
        />
      )}
    </>
  );
};

export default AutocompleteInput;
