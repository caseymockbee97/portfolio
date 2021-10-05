import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.textBackground,
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerTextBox: {
    padding: "5px",
    maxWidth: "600px",
  },
}));
export default function TextBoxComponent({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box className={classes.innerTextBox}>{children}</Box>
    </Box>
  );
}
