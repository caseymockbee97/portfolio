import React from "react";
import { Toolbar, Box, Typography, SvgIcon, IconButton } from "@mui/material";
import MenuIcon from "../../assets/icons/MenuIcon";

export default function AppBarHeaderComponent(props) {
  const { handleClick, isClicked, classes, appBarTitle } = props;
  return (
    <Toolbar>
      <IconButton
        onClick={handleClick}
        sx={{ color: "rgba(255,255,255,.87)" }}
        color="inherit"
        aria-label={
          isClicked ? "Close Navigation Menu" : "Expand Navigation Menu"
        }
      >
        <SvgIcon
          className={isClicked && classes.navButtonClicked}
          fontSize="large"
        >
          <MenuIcon />
        </SvgIcon>
      </IconButton>
      <Box style={{ flexGrow: 1, marginLeft: "-51px" }}>
        <Typography align="center" variant="h3" component="h1">
          {appBarTitle}
        </Typography>
      </Box>
    </Toolbar>
  );
}
