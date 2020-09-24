import React, { useState } from "react";
import { createTheming } from "react-jss";
import { Switch, Route, BrowserRouter as Router, } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { Header } from "components";
import { LightTheme, DarkTheme } from "themes";
import { HomePage } from "pages";

const ThemeContext = React.createContext({});
const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

const useStyles = createUseStyles({
    AppBackdrop: {
        content: "",
        padding: '1rem',
        display: 'block',
        position: 'absolute',
        left: 0, right: 0, top: 0, bottom: 0,
        background: ({theme}) => `rgba(0, 0, 0, ${theme.pageOpacity})`,
        zIndex: -1
    }
});

export const Backdrop = () => {
    const theme = useTheme()
    const classes = useStyles({ theme });
    return <div className={classes.AppBackdrop} />
}

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const onDarkThemeChanged = (isDarkTheme) => {
    setDarkTheme(isDarkTheme);
  };

  const renderer = (
    <Router>
        <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
            <Backdrop />
            <Header onDarkThemeChanged={onDarkThemeChanged} />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <div />
                </Route>
            </Switch>
        </ThemeProvider>
    </Router>
  );

  return renderer;
};

export { useTheme }
export default App;
