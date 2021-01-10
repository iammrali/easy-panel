import { StylesProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { style } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider jss={style}>
        <App />
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
