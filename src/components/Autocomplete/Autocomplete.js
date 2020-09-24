import React from "react";
import { createUseStyles } from "react-jss";
import isEmpty from "lodash.isempty";

import { useTheme } from '../../App';
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
    background: ({ theme }) => theme.searchBoxBackground,
    margin: "10rem auto 0.125rem auto",
    ...SearchBoxLayout,
    padding: "0.75rem",
    "& > .search-icon": {
      width: "1.2rem",
      height: "1.2rem",
      color: ({ theme }) => theme.searchedTextColor
    },

    "& > .search-input": {
      border: "none",
      background: "transparent",
      padding: "0.15rem 0.75rem",
      flexGrow: 1,
      "&:focus": {
        outline: "none",
      },
      color: ({ theme }) => theme.searchedTextColor,
    },
  },
  "@media (max-width: 600px)": {
      SearchBox: {
          marginTop: '2rem',
      },
  },
  Options: {
    display: "block",
    listStyle: "none",
    ...SearchBoxLayout,
    margin: "auto",
    padding: 0,
    maxWidth: '31.5rem',

    '& > li.item': {
        padding: '0.75rem',
        background: ({ theme }) => theme.suggestItemBackground,
        color: ({ theme }) => theme.searchedTextColor,
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
  const theme = useTheme()
  const classes = useStyles({ theme });
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
