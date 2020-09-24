import { createUseStyles } from "react-jss";

const SearchBoxLayout = {
  maxWidth: "30rem",
  minWidth: "8rem",
  padding: "0.5rem",
};

export const useStyles = createUseStyles({
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
      color: ({ theme }) => theme.searchedTextColor,
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
      marginTop: "2rem",
    },
  },
  Options: {
    display: "block",
    listStyle: "none",
    ...SearchBoxLayout,
    margin: "auto",
    padding: 0,
    maxWidth: "31.5rem",

    "& > li.option": {
      padding: "0.75rem",
      background: ({ theme }) => theme.suggestItemBackground,
      color: ({ theme }) => theme.searchedTextColor,
      "&.active": {
        background: "#3498DB",
        color: "#fff",
        border: "1px solid",
      },
    },
  },
});
