import React from "react";
import Login from "./screens/Login/Login";
import Specialization from "./screens/Specialization/Specialization";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import Preferances from "./screens/Preferances/Preferances";
import colors from "./colors";
import Dashboard from "./screens/Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    danger: colors.danger,
    white: colors.white,
    error: colors.danger,
    black: {
      main: "#000",
    },
  },
  overrides: {
    MuiTypography: {
      h6: {
        fontWeight: "bold",
      },
    },
  },
});

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        {/* <Specialization /> */}
        {/* <Preferances /> */}
        <Switch>
          <Route path="/specialization">
            <Specialization />
          </Route>
          <Route path="/preferances">
            <Preferances />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route strict path="/">
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
