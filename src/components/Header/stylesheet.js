import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  HeaderMenu: {
    "& > .topnav": {
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      "& a": {
        display: "block",
        color: ({ theme }) => theme.textPrimaryColor,
        padding: "0.25rem 1.25rem",
        textDecoration: "none",
        "&:hover, &:active": {
          backgroundColor: "transparent",
          color: ({ theme }) => theme.textPrimaryColor,
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
        display: "none",
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
        flexDirection: "column",
        alignItems: "unset",
        "& .icon": {
          position: "absolute",
          right: 0,
          top: 0,
        },
        "& a": {
          display: "block ",
          textAlign: "left",
          padding: "0.5rem 0.25rem",
        },
      },
    },
  },
});
