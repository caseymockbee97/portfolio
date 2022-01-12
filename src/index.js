import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#385C61",
      contrastText: "#FAEBDA",
    },
    secondary: {
      main: "#E8DBCC",
      contrastText: "#302E2C",
    },
    text: {
      primary: "#302E2C",
    },
  },
  background: "#FAEBDA",
  textBackground: "#E8DBCC",
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
