import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import TextBoxComponent from "../components/TextBoxComponent";
import { Link } from "@mui/material";

export default function ContactMeView(props) {
  const { setAppBarTitle } = props;

  useEffect(() => {
    setAppBarTitle("Contact");
  }, [setAppBarTitle]);
  return (
    <>
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
                color="#fff"
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
                color="#fff"
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
                color="#fff"
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
