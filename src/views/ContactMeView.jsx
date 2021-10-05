import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import TextBoxComponent from "../components/TextBoxComponent";
import { Link } from "@mui/material";

export default function ContactMeView() {
  return (
    <>
      <Typography align="center" variant="h4" component="h2">
        Contact Me
      </Typography>
      <TextBoxComponent>
        <Typography align="left" variant="h6" component="h3">
          Email
        </Typography>
        <Typography align="left">
          <List>
            <ListItem>
              <Link
                target="_blank"
                underline="hover"
                href="mailto: caseymockbee97@gmail.com"
              >
                {"caseymockbee97@gmail.com"}
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography align="left" variant="h6" component="h3">
          GitHub
        </Typography>
        <Typography align="left">
          <List>
            <ListItem>
              <Link
                target="_blank"
                underline="hover"
                href="https://github.com/caseymockbee97"
              >
                {"https://github.com/caseymockbee97"}
              </Link>
            </ListItem>
          </List>
        </Typography>
        <Typography align="left" variant="h6" component="h3">
          LinkedIn
        </Typography>
        <List>
          <ListItem>
            <Typography align="left">
              <Link
                target="_blank"
                underline="hover"
                href="https://www.linkedin.com/in/casey-mockbee/"
              >
                {"https://www.linkedin.com/in/casey-mockbee/"}
              </Link>
            </Typography>
          </ListItem>
        </List>
      </TextBoxComponent>
    </>
  );
}
