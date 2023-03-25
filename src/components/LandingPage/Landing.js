import React from "react";
import { Box, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import BoxBlock from "./BoxBlock";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    color: "white",
    padding: "0 150px",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 35px",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 25px",
      width: "100%",
    },
  },
  main: {
    // padding: "0 100px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  headerComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    width: "65%",
  },

  headerText: {
    [theme.breakpoints.down("1200")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 42,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 38,
    },
  },
  imgBox: {
    width: "35%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "auto",
      padding: "0 20px",
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  video: {
    backgroundColor: "white",
    width: "90%",
    height: 350,
    border: "1px solid white",
    borderRadius: "20px",
  },
  img: {
    backgroundColor: "white",
    width: "90%",
    height: 350,
    objectFit: "cover",
    border: "1px solid white",
    borderRadius: "25px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "auto",
    },
  },

  cards: {
    width: "100%",
    marginTop: 40,
    // padding: "0 100px",
  },
  btn: {
    width: 250,
    height: 50,

    backgroundColor: "#ea5252",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
    [theme.breakpoints.down("sm")]: {
      width: "600px",
    },
  },
  btnComponent2: {
    marginTop: 60,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom: 20,
    },
  },
  btn2: {
    marginTop: 60,
    width: 600,
    height: 50,

    backgroundColor: "#ea5252",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    textDecoration: "none",
    color: "inherit",
  },
  pageAlgo: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  images: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  // iimg: {
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",

  //   },
  // },
  algoImages: {
    marginTop: 20,
    marginBottom: 20,
    // border: "1px solid white",
    // borderRadius: "30px",
    [theme.breakpoints.down("1300")]: {
      marginLeft: 20,
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  algImg: {
    width: "250px",
    height: 250,
    border: "1px solid white",
    borderRadius: "20px",
    // boxShadow: "5px 10px #f15550",
  },
  btnComponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.main}>
          <Grid container className={classes.headerComponent} xs={12} md={12}>
            <Grid item container xs={12} md={12}>
              {/* Header content */}
              <Grid item xs={12} md={8} className={classes.header}>
                <Box>
                  <Typography variant="h2" className={classes.headerText}>
                    Page Replacement Algorithms
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: 30 }}>
                    When a page fault occurs, the required page has to be
                    brought from the secondary memory. If all the frames of main
                    memory are already occupied, then a page has to be replaced.
                    The page replacement algorithm decides which memory page is
                    to be replaced.
                  </Typography>
                  <Box className={classes.btnComponent2}>
                    <Button style={{ color: "white" }} className={classes.btn}>
                      <Link to="/home" className={classes.link}>
                        <Typography style={{ color: "white" }}>
                          Go To Simulator
                        </Typography>
                        <img
                          src="./images/arrow-forward.png"
                          alt="arrow-forward"
                          style={{ marginLeft: 10 }}
                        />
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className={classes.imgBox}>
                <Box>
                  <img
                    src="./images/pageReplacement1.png"
                    alt="OS"
                    className={classes.img}
                  />
                  {/* <iframe
                  src="https://www.youtube.com/embed/1DklrGoAxDE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className={classes.video}
                ></iframe> */}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Box Block */}
          <Box className={classes.cards}>
            <Grid
              item
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <BoxBlock
                title="What is a page? "
                descr="For non-contiguous memory allocation, the Logical address Space is divided into fixed- size blocks, called pages."
              />
              <BoxBlock
                title="What is a frame? "
                descr="The Physical Address Space (Main Memory) is conceptually divided into a number of fixed-size blocks, called frames."
              />
              <BoxBlock
                title="What is paging? "
                descr="Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. "
              />
              <BoxBlock
                title="What is page fault? "
                descr="Page fault - A page fault occurs when a page referenced by the CPU is not found in the main memory."
              />
            </Grid>
          </Box>

          <Box className={classes.pageAlgo}>
            <Grid container xs={12} sm={12} md={12}>
              <Box
                style={{
                  alignText: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                <Typography
                  style={{ fontSize: 45, alignText: "center" }}
                  className={classes.title}
                >
                  The Page Replacement Algorithms
                </Typography>
              </Box>
              <Box className={classes.images}>
                <Grid item container xs={12} md={12} sm={12}>
                  <Grid item xs={12} md={3} sm={6} className={classes.iimg}>
                    <Box className={classes.algoImages}>
                      <img
                        src="./images/FCFS.png"
                        alt="FCFS"
                        className={classes.algImg}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3} sm={6} className={classes.iimg}>
                    <Box className={classes.algoImages}>
                      <img
                        src="./images/OPR.png"
                        alt="OPR"
                        className={classes.algImg}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3} sm={6} className={classes.iimg}>
                    <Box className={classes.algoImages}>
                      <img
                        src="./images/LRU.png"
                        alt="LRU"
                        className={classes.algImg}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3} sm={6} className={classes.iimg}>
                    <Box className={classes.algoImages}>
                      <img
                        src="./images/MRU.png"
                        alt="MRU"
                        className={classes.algImg}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>

          <Box className={classes.btnComponent}>
            <Button className={classes.btn2}>
              <Link to="/algo" className={classes.link}>
                <Typography style={{ color: "white" }}>Learn More</Typography>
                <img
                  src="./images/arrow-forward.png"
                  alt="arrow-forward"
                  style={{ marginLeft: 10 }}
                />
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
