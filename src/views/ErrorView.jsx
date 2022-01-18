import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import TextBoxComponent from "../components/TextBoxComponent";

export default function ErrorView(props) {
  const { setAppBarTitle } = props;

  useEffect(() => {
    setAppBarTitle("Error");
  }, [setAppBarTitle]);
  return (
    <>
      <TextBoxComponent>
        <Typography align="center" variant="h1" component="p">
          Error 404
        </Typography>
        <Typography align="center" component="p">
          It looks like that URL isn't 100% correct.
        </Typography>
      </TextBoxComponent>
    </>
  );
}
