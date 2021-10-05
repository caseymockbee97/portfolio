import { Typography } from "@mui/material";
import React from "react";
import TextBoxComponent from "../components/TextBoxComponent";

export default function ErrorView() {
  return (
    <>
      <TextBoxComponent>
        <Typography align="center" variant="h1" component="p">
          Error 404
        </Typography>
        <Typography align="center" component="p">
          It looks like this endpoint cannot be reached.
        </Typography>
      </TextBoxComponent>
    </>
  );
}
