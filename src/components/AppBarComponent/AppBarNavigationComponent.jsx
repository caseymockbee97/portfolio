import React from "react";
import { Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppBarNavigationComponent(props) {
  const { handleClick, classes } = props;
  return (
    <Toolbar>
      <Box style={{ flexGrow: 1 }}>
        <Link
          onClick={handleClick}
          to="/about"
          className={classes.removeTextDecoration}
        >
          <Typography color="textPrimary" className={classes.navLink}>
            About
          </Typography>
        </Link>
        <Link
          onClick={handleClick}
          to="/projects"
          className={classes.removeTextDecoration}
        >
          <Typography color="textPrimary" className={classes.navLink}>
            Projects
          </Typography>
        </Link>
        <Link
          onClick={handleClick}
          to="/resume"
          className={classes.removeTextDecoration}
        >
          <Typography color="textPrimary" className={classes.navLink}>
            Resume
          </Typography>
        </Link>
        <Link
          onClick={handleClick}
          to="/contact"
          className={classes.removeTextDecoration}
        >
          <Typography color="textPrimary" className={classes.navLink}>
            Contact Me
          </Typography>
        </Link>
      </Box>
    </Toolbar>
  );
}
