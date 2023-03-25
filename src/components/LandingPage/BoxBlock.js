import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    border: "1px solid white",
    width: "40%",
    height: 220,
    borderRadius: "15px",
    marginTop: 20,
    marginBottom: 20,
    boxShadow: "5px 10px #f15550",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // justifyContent: "space-around",
    padding: "0 20px",
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
  },
  descr: {},
});

const BoxBlock = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container} xs={12} sm={12} md={5}>
        <Grid item container xs={12} md={12} sm={12} className={classes.box}>
          <Typography className={classes.header}>{props.title}</Typography>
          <Typography className={classes.descr}>{props.descr}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BoxBlock;
