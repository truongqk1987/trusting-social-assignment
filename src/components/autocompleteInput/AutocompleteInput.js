import React from "react";
import { createUseStyles } from "react-jss";
import isEmpty from "lodash.isempty";

import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";

const SearchBoxLayout = {
  maxWidth: "30rem",
  minWidth: "8rem",
  padding: "0.5rem",
};

const useStyles = createUseStyles({
  SearchBox: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    margin: "2rem auto 0.5rem auto",

    ...SearchBoxLayout,

    "& > .search-icon": {
      width: "1.2rem",
      height: "1.2rem",
    },

    "& > .search-input": {
      border: "none",
      padding: "0.15rem 0.5rem",
      flexGrow: 1,
      "&:focus": {
        outline: "none",
      },
    },
  },
  Options: {
    display: "block",
    listStyle: "none",
    ...SearchBoxLayout,
    margin: "auto",
    padding: 0,
    maxWidth: '31rem',

    '& > li.item': {
        padding: '0.5rem',
        background: '#ffffff'
    }
  },
});

const Options = ({ values, classes }) => (
  <ul className={classes.Options}>
    {values.map((value, index) => (
      <li className="item" key={value} onClick={() => {}}>
        {value}
      </li>
    ))}
  </ul>
);

const AutocompleteInput = ({ suggestList, onChange, onKeyDown, value }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.SearchBox}>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>
      {!isEmpty(suggestList) && (
        <Options classes={classes} values={suggestList} />
      )}
    </>
  );
};

export default AutocompleteInput;
