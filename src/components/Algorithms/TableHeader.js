import React from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1a202c",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  descr: {
    marginTop: 30,
  },
  algo: {
    fontSize: 45,
  },
}));

const TableHeader = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.header}>
        <Typography className={classes.algo}>{props.algoName}</Typography>
      </Box>
      {/* <Box className={classes.descr}>
        <Typography variant="h6">Frames: {props.frame}</Typography>
        <Typography variant="h6">Pages: {props.page}</Typography>
        <Typography variant="h6">Page Sequence: {props.pageSeq}</Typography>
      </Box> */}
    </Box>
  );
};

export default TableHeader;
