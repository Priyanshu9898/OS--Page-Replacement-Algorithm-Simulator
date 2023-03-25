import React from "react";
import { Grid, Typography, makeStyles, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 60px",
    },
  },
  para: {
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      display: "flex",

      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },

  imgBox: {
    marginTop: 40,
  },
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: 40,
    marginTop: 20,

    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   height: 400,
    //   objectFit: "contain",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    //   hright: 400,
    //   objectFit: "contain",
    // },
  },
  algoname: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
}));

const Page = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 35,
              marginTop: 50,
            }}
            className={classes.algoname}
          >
            {props.algoName}
          </Typography>
        </Box>
        <Box className={classes.descr}>
          {props.content.map((item, index) => {
            return (
              <>
                <Box className={classes.para}>
                  <Typography style={{ color: "white", fontSize: 18 }}>
                    {item}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>

        <Box className={classes.imgBox}>
          <Typography style={{ color: "white", fontSize: 22 }}>
            Example:
          </Typography>

          <img src={props.path} alt={props.algoName} className={classes.img} />
        </Box>
      </Box>
    </>
  );
};

export default Page;
