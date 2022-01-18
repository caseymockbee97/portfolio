import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, .5)",
      // main: "#bcbcbc",
      contrastText: "rgba(255,255,255,.87)",
    },
    secondary: {
      main: "rgba(18,18,18,.8)",
      contrastText: "rgba(255,255,255,.87)",
    },
    text: {
      primary: "rgba(255,255,255,.87)",
    },
    disabledButton: "rgba(255,255,255,.87)",
  },
  background: "rgba(255,255,255,.87)",
  textBackground: "rgba(0,0,0,.3)",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
