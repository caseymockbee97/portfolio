import { CssBaseline, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// components
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";
// views
import AboutView from "./views/AboutView";
import ContactMeView from "./views/ContactMeView";
import ErrorView from "./views/ErrorView";
import ProjectsView from "./views/ProjectsView";
import ResumeView from "./views/ResumeView";
// assets
import backgroundImage from "./assets/images/BackGround.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
}));

function App() {
  const classes = useStyles();
  const [appBarTitle, setAppBarTitle] = useState("About");
  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <AppBarComponent appBarTitle={appBarTitle} />
      <Toolbar />
      <Switch>
        <Route exact path="/resume">
          <ResumeView setAppBarTitle={setAppBarTitle} />
        </Route>
        <Route exact path="/projects">
          <ProjectsView setAppBarTitle={setAppBarTitle} />
        </Route>
        <Route exact path="/contact">
          <ContactMeView setAppBarTitle={setAppBarTitle} />
        </Route>
        <Route exact path="/about">
          <AboutView setAppBarTitle={setAppBarTitle} />
        </Route>
        <Route exact path="/">
          <AboutView setAppBarTitle={setAppBarTitle} />
        </Route>
        <Route exact path="*">
          <ErrorView setAppBarTitle={setAppBarTitle} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
