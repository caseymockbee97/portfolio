import { CssBaseline, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// components
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";
// views
import AboutView from "./views/AboutView";
import ContactMeView from "./views/ContactMeView";
import ErrorView from "./views/ErrorView";
import ProjectsView from "./views/ProjectsView";
import ResumeView from "./views/ResumeView";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.background,
    minHeight: "100vh",
    minWidth: "100vw",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <AppBarComponent />
      <Toolbar />
      <Switch>
        <Route exact path="/resume">
          <ResumeView />
        </Route>
        <Route exact path="/projects">
          <ProjectsView />
        </Route>
        <Route exact path="/contact">
          <ContactMeView />
        </Route>
        <Route exact path="/about">
          <AboutView />
        </Route>
        <Route exact path="/">
          <AboutView />
        </Route>
        <Route exact path="*">
          <ErrorView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
