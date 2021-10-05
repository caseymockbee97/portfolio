import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import TextBoxComponent from "./TextBoxComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fullWidth: {
    width: "95%",
  },

  marginBottom: {
    marginBottom: "5px",
  },
  marginTop: {
    marginTop: "5px",
  },
  buttonWidth: {
    width: "250px",
  },
  pointer: {
    cursor: "pointer",
  },
}));

export default function ProjectComponent(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <TextBoxComponent>
      <Box className={classes.root}>
        <Typography align="center" variant="h4" component="h3">
          {props.title}
        </Typography>
        <div className={clsx(classes.marginBottom, classes.marginTop)}>
          <ButtonGroup>
            <Button
              variant="contained"
              rel="noreferrer"
              target="_blank"
              href={props.live_URL}
            >
              View Project
              <OpenInNewIcon fontSize="small" />
            </Button>
            <Button
              variant="contained"
              rel="noreferrer"
              target="_blank"
              href={props.github_URL}
            >
              GitHub
              <OpenInNewIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <Typography className={classes.buttonWidth} variant="caption">
          {props.disclaimer}
        </Typography>
        <img
          className={clsx(classes.fullWidth, classes.marginBottom)}
          alt="Screenshot of Application"
          src={props.img}
        />
        <List>
          <Typography
            variant="h5"
            align="center"
            className={[classes.fullWidth, classes.pointer]}
            noWrap
            component="h4"
          >
            <ListItem onClick={handleClick}>
              Tech Stack {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
          </Typography>
          <Collapse in={isOpen}>
            <Typography align="center" className={classes.fullWidth}>
              {props.tech_stack.map((item) => (
                <ListItem id={item}>{item}</ListItem>
              ))}
            </Typography>
          </Collapse>
        </List>
        <Typography
          align="left"
          className={clsx(classes.fullWidth, classes.marginBottom)}
        >
          {props.description}{" "}
        </Typography>
      </Box>
    </TextBoxComponent>
  );
}
