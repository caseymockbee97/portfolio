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
          {tab}I am a full-stack software engineering student seeking employment
          as a software developer. I am well versed in Javascript, Python, Git,
          and React. I have experience working with Node.js and Django. I'm also
          eager to learn new skills and languages. During my time at Kenzie
          Academy I have completed projects on my own as well as in teams. When
          working in teams we utilized Scrum Teams in which I have filled the
          roles of Product Owner and Scrum Master.
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
            <ListItem>{"JavaScript ES6 (intermediate/proficient)"}</ListItem>
            <ListItem>{"React (intermediate/proficient)"}</ListItem>
            <ListItem>{"Python 3 (intermediate/proficient)"}</ListItem>
            <ListItem>{"Django (intermediate)"}</ListItem>
            <ListItem>{"HTML5 (intermediate/proficient)"}</ListItem>
            <ListItem>{"CSS3 (intermediate/proficient)"}</ListItem>
            <ListItem>{"Swift + SwiftUI (basic)"}</ListItem>
            <ListItem>{"Material UI (intermediate)"}</ListItem>
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
