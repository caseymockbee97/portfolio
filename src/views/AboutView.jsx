import React, { useEffect } from "react";
import clsx from "clsx";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import profileImage from "../assets/images/profileImage.jpeg";
import TextBoxComponent from "../components/TextBoxComponent";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "5px",
    filter: "drop-shadow(0 0 4px #000000)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    textIndent: "20pt",
  },
});

export default function AboutView(props) {
  const classes = useStyles();
  const { setAppBarTitle } = props;

  useEffect(() => {
    setAppBarTitle("About");
  }, [setAppBarTitle]);
  return (
    <div>
      <Box className={classes.imageContainer}>
        <img src={profileImage} alt="Casey Mockbee" className={classes.image} />
      </Box>
      <TextBoxComponent>
        <Typography align="center" variant="h4" component="h2">
          Casey Mockbee
        </Typography>
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
          className={clsx(classes.marginBottom, classes.description)}
          variant="body2"
        >
          I am a full-stack software developer that is well versed in
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
            <ListItem>{"JavaScript ES6"}</ListItem>
            <ListItem>{"React.js"}</ListItem>
            <ListItem>{"Python 3"}</ListItem>
            <ListItem>{"HTML5"}</ListItem>
            <ListItem>{"CSS3"}</ListItem>
            <ListItem>{"Material UI"}</ListItem>
            <ListItem>{"Django"}</ListItem>
            <ListItem>{"SQL"}</ListItem>
            <ListItem>{"Swift + SwiftUI"}</ListItem>
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
                  <Typography
                    align="left"
                    variant="body2"
                    color="primary.contrastText"
                  >
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
                  <Typography
                    align="left"
                    variant="body2"
                    color="primary.contrastText"
                  >
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
