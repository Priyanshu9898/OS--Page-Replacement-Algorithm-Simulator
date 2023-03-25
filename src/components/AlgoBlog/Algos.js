import React, { useState } from "react";
import { Box, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Page from "./Page";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    color: "white",
    padding: "0 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    width: "100%",
    textAlign: "center",
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  headerText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  btn: {
    width: 150,
    height: 40,

    color: "white",
    borderBottom: "1px solid white",
    borderRadius: "5px     5px      0           0",
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
    },
  },
}));

const Algos = () => {
  let fifoContent = [
    "•	In this algorithm, a queue is maintained. The page which is assigned the frame first will be replaced first. In other words, the page which resides at the rare end of the queue will be replaced on every page fault. ",
    "•	However, FIFO is known to suffer from a problem known as Belady's anomaly which occurs when increasing the number of page frames results in an increase in the number of page faults for a given memory access pattern.",
    "•	Belady’s anomaly – Belady’s anomaly proves that it is possible to have more page faults when increasing the number of page frames while using the First in First Out (FIFO) page replacement algorithm.",
    "•	For example, if we consider reference string 3, 2, 1, 0, 3, 2, 4, 3, 2, 1, 0, 4 and 3 slots, we get 9 total page faults, but if we increase slots to 4, we get 10 page faults.",
  ];

  let oprContent = [
    "•	Optimal page replacement algorithm replaces the page which will not be referred for so long in future.",
    "•	Optimal page replacement is perfect, but it is practically impossible to implement because the pages that will not be used in future for the longest time cannot be predicted.",
    "•	 But it can be used as a benchmark as other algorithms are compared to this in terms of optimality.",
  ];

  let lruContent = [
    "•	‘Least Recently Used’ algorithm replaces the page which has not been referred for a long time i.e., the page least recently used is replaced.",
    "•	The idea is based on locality of reference. It works on the concept that the pages that are recently used in previous instructions are likely to be used in next instructions too. And the page that are used least recently less are likely to be used less in future.",
    "•	LRU page replacement algorithm follows the stack property and so, it does not suffer from Belady’s Anomaly. Hence, LRU is the preferred page replacement policy over FIFO.",
  ];

  let mruContent = [
    "•	‘Most Recently Used’ algorithm replaces the page which has been referred most recently.",
    "•	MRU page replacement algorithm also follows the stack property and so,it does not suffer from Belady’s Anomaly.",
    "•	For a Reference String consisting of repeated sequence of page numbers, MRU will be optimal algorithm. CPU may generate such a reference string when executing loops. This is because while executing loops, same set of instructions have to be executed again and again. In such case, MRU should be used.",
  ];

  const classes = useStyles();

  const [algo, setAlgo] = useState("FCFS");
  const [algoTitle, setAlgoTitle] = useState("FCFS (First Come First Serve):");
  const [algoContent, setAlgoContent] = useState(fifoContent);
  const [path, setPath] = useState("./images/fifo.jpg");
  const [selected, setSelected] = useState(1);

  const handleClickFcfs = (e) => {
    console.log("clicked FCFS");
    setAlgo("FCFS");
    setAlgoTitle("FCFS (First Come First Serve):");
    setAlgoContent(fifoContent);
    setPath("./images/fifo.jpg");
    setSelected(1);
  };

  const handleClickOpr = (e) => {
    console.log("clicked OPR");
    setAlgo("OPR");
    setAlgoTitle("OPR (Optimal Page Replacement):");
    setAlgoContent(oprContent);
    setPath("./images/OPR.jpg");
    setSelected(2);
  };
  const handleClickLru = (e) => {
    console.log("clicked LRU");
    setAlgo("LRU");
    setAlgoTitle("LRU (Least Recently Used):");
    setAlgoContent(lruContent);
    setPath("./images/LRU.jpg");
    setSelected(3);
  };
  const handleClickMru = (e) => {
    console.log("clicked MRU");
    setAlgo("MRU");
    setAlgoTitle("MRU (Most Recently Used):");
    setAlgoContent(mruContent);
    setPath("./images/MRU.jpg");
    setSelected(4);
  };

  const lists = [
    { id: 1, title: "FCFS", func: handleClickFcfs },
    { id: 2, title: "OPR", func: handleClickOpr },
    { id: 3, title: "LRU", func: handleClickLru },
    { id: 4, title: "MRU", func: handleClickMru },
  ];

  return (
    <>
      <Navbar />

      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography
            style={{ textAlign: "center", fontSize: 45 }}
            className={classes.headerText}
          >
            Page Replacement Techniques
          </Typography>
        </Box>
        <Box className={classes.links}>
          {lists.map((list, index) => {
            return (
              <>
                <Button
                  key={list.id}
                  className={classes.btn}
                  onClick={list.func}
                  style={{
                    backgroundColor: list.id === selected ? "#fa2c2c" : "",
                  }}
                >
                  {list.title}
                </Button>
              </>
            );
          })}
        </Box>

        <Box className={classes.content}>
          <Grid item xs={12} md={12} sm={12}>
            <Page algoName={algoTitle} content={algoContent} path={path} />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Algos;
