import { AppBar } from "@mui/material";

import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import AppBarHeaderComponent from "./AppBarHeaderComponent";
import AppBarNavigationComponent from "./AppBarNavigationComponent";

const useStyles = makeStyles((theme) => ({
  removeTextDecoration: {
    textDecoration: "none",
  },
  navLink: {
    "&:hover": {
      textDecoration: "underLine",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingLeft: "8px",
    },
  },
  navButtonClicked: {
    transform: "scaleX(-1)",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function AppBarComponent() {
  const classes = useStyles();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked((prev) => !prev);

  return (
    <HideOnScroll>
      <AppBar>
        <AppBarHeaderComponent
          handleClick={handleClick}
          isClicked={isClicked}
          classes={classes}
        />
        {isClicked && (
          <AppBarNavigationComponent
            handleClick={handleClick}
            classes={classes}
          />
        )}
      </AppBar>
    </HideOnScroll>
  );
}
