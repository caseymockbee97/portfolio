import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import resume from "../assets/pdfs/MasterResumeCaseyMockbee.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
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
  roundedCorners: {
    borderRadius: "10px",
  },
});

export default function ResumeView(props) {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { setAppBarTitle } = props;

  useEffect(() => {
    setAppBarTitle("Resume");
  }, [setAppBarTitle]);

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
      <TextBoxComponent>
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page width={isMobile ? 600 : 300} pageNumber={pageNumber} />
        </Document>
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgba(0,0,0,.3)" }}
          >
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
