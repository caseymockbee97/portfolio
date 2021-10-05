import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import resume from "../assets/pdfs/Master_Resume_2021.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import TextBoxComponent from "../components/TextBoxComponent";

const useStyles = makeStyles({
  buttonGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5px",
    position: "fixed",
    bottom: "10px",
  },
  cardPadding: {
    padding: "5px",
  },
});

export default function ResumeView() {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // used to check the page width
  const isMobile = useMediaQuery("(min-width:600px)");

  const download = (fileUrl, fileName) => {
    let a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleIncrement = () => {
    if (pageNumber + 1 <= numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <>
      <Typography align="center" variant="h4" component="h2">
        About
      </Typography>
      <TextBoxComponent>
        <Card className={classes.cardPadding}>
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page width={isMobile ? 600 : 300} pageNumber={pageNumber} />
          </Document>
        </Card>
      </TextBoxComponent>
      <Box className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => download(resume, "Master_Resume_2021.pdf")}
        >
          Download
        </Button>
        <ButtonGroup variant="contained" color="primary" size="small">
          <Button onClick={handleDecrement} disabled={pageNumber === 1}>
            <ArrowBackIcon />
          </Button>
          <Button disabled>
            {pageNumber} of {numPages}
          </Button>
          <Button onClick={handleIncrement} disabled={pageNumber === numPages}>
            <ArrowForwardIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
