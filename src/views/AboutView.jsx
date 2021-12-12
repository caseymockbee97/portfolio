import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import profileImage from "../assets/images/profileImage.jpeg";
import TextBoxComponent from "../components/TextBoxComponent";
import { Box } from "@mui/system";

const tab = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

const useStyles = makeStyles({
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "5px solid #302E2C",
    margin: "5px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function AboutView() {
  const classes = useStyles();
  return (
    <div>
      <Typography align="center" variant="h4" component="h2">
        About
      </Typography>
      <Box className={classes.imageContainer}>
        <img src={profileImage} alt="Casey Smiling" className={classes.image} />
      </Box>
      <TextBoxComponent>
        <Typography align="center">Casey</Typography>
        <Typography
          align="left"
          className={classes.marginTop}
          variant="h6"
          component="h3"
        >
          Who am I?
        </Typography>
        <Typography
          align="left"
          className={classes.marginBottom}
          variant="body2"
        >
          {tab}I am a full-stack software developer that is well versed in
          Javascript, React, Node.js, CSS, HTML5, Python, and Django. I have
          experience developing in SCRUM environments utilizing Git for version
          control. I'm eager to put my skills to use and develop them further,
          as well as learn new languages and skills.
        </Typography>
        <Typography
          align="left"
          className={classes.marginTop}
          variant="h6"
          component="h3"
        >
          Technical Skills
        </Typography>
        <Typography
          align="left"
          className={classes.marginBottom}
          variant="body2"
        >
          <List>
            <ListItem>{"JavaScript ES6 (proficient)"}</ListItem>
            <ListItem>{"React (proficient)"}</ListItem>
            <ListItem>{"Python 3 (proficient)"}</ListItem>
            <ListItem>{"HTML5 (proficient)"}</ListItem>
            <ListItem>{"CSS3 (proficient)"}</ListItem>
            <ListItem>{"Material UI (intermediate/proficient)"}</ListItem>
            <ListItem>{"Django (intermediate)"}</ListItem>
            <ListItem>{"TypeScript (basic)"}</ListItem>
            <ListItem>{"SQL (basic)"}</ListItem>
            <ListItem>{"Swift + SwiftUI (basic)"}</ListItem>
          </List>
        </Typography>
        <Typography
          align="left"
          className={classes.marginTop}
          variant="h6"
          component="h3"
        >
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography align="left" variant="subtitle1" component="h4">
                  Kenzie Academy
                </Typography>
              }
              secondary={
                <>
                  <Typography align="left" variant="body2">
                    {"Front-End Web Development Certification (Apr 2021)"}
                    <br />
                    {"Full-Stack Web Development Certification (Oct 2021)"}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography align="left" variant="subtitle1" component="h4">
                  Purdue University
                </Typography>
              }
              secondary={
                <>
                  <Typography align="left" variant="body2">
                    {"Hospitality and Tourism Management (B.S) (May 2020)"}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </TextBoxComponent>
    </div>
  );
}
