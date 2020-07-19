import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { ThemeProvider } from "@material-ui/core/styles";
import { history, theme } from "./lib";
import App from "./App";

const root = document.querySelector("#root");

const render = () => {
  if (root) {
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>,
      root
    );
  }
};

render();
