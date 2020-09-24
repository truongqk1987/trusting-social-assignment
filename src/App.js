import React, { useState } from "react";
import { createTheming } from "react-jss";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { LightTheme, DarkTheme } from "./themes";
import { HomePage } from "./pages";

const ThemeContext = React.createContext({});
const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const onDarkThemeChanged = (isDarkTheme) => {
    setDarkTheme(isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <Header onDarkThemeChanged={onDarkThemeChanged} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export { useTheme }
export default App;
