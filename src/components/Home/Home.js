import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import FIFO from "../Algorithms/FIFO";
import OPR from "../Algorithms/OPR";
import LRU from "../Algorithms/LRU";
import MRU from "../Algorithms/MRU";
// Components

import Navbar from "../Navigation/Navbar";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // maxWidth: "100%",
    // height: "100vh",
    backgroundColor: "#1a202c",
    // padding: "0 200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  box1: {
    marginTop: 60,
    width: 800,
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    borderRadius: "25px",
    backgroundColor: "#1a202c",
    [theme.breakpoints.between("1200", "1400")]: {
      width: "800",
      height: "80vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      border: 0,
      padding: "0 10px",
      borderRadius: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      border: 0,
      padding: "0 10px",
      borderRadius: 0,
    },
  },
  header: {
    // marginTop: 20,
    marginBottom: 15,
  },

  // Main Component
  inputBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // padding: "0 10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // padding: "0 10px",
    },
  },

  lable: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    height: 30,
    borderRadius: 5,
    padding: "0 10px",
    height: 40,

    color: "black",
    border: "1px solid #red",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  btns: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    marginRight: 30,
    backgroundColor: "#f15550",
    color: "white",
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
  },
  errorMsg: {
    color: "#ff3030",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [frame, setFrame] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [seq, setSeq] = useState([]);
  const [result, setResult] = useState("");
  const [seqArr, setSeqArr] = useState([]);

  const frameHanadler = (e) => {
    setFrame(e.target.value);
    // if (Number.isInteger(e.target.value)) {
    //   setError(null);
    // } else {
    //   setError("Please enter a valid positive integer");
    // }
  };

  const seqHandler = (e) => {
    setSeq(e.target.value);

    let Text = e.target.value;
    Text = Text.replace(/ {1,}/g, " ");
    Text = Text.trim();

    let arr = Text.split(" ");

    setSeqArr(arr);
    // setError(null);
    console.log("main seq arr ", seqArr);
  };

  // const inputChecker = (e) => {};

  const handleClickFcfs = async (e) => {
    console.log("FIFO");

    if (frame < 0) {
      setError("Frames can not be Negative");
    } else if (frame === 0 || seq.length === 0) {
      setError("Please fill all the fields");
    } else {
      try {
        // if (seqArr.length !== page) {
        //   setError("Please enter the correct number of page sequence");
        // }

        let isNeagtive = false;
        for (let i = 0; i < seqArr.length; i++) {
          if (parseInt(seqArr[i]) < 0) {
            isNeagtive = true;
            break;
          }
        }

        if (isNeagtive) {
          setError(
            "Negative number and float number is not allowed in Page Sequence"
          );
        } else {
          setError(null);
          setResult("fifo");
        }
      } catch (e) {}
    }
  };

  const handleClickLru = () => {
    console.log("LRU");
    if (frame < 0) {
      setError("Frames can not be Negative");
    } else if (frame === 0 || seq.length === 0) {
      setError("Please fill all the fields");
    } else {
      try {
        // if (seqArr.length !== page) {
        //   setError("Please enter the correct number of page sequence");
        // }

        let isNeagtive = false;

        for (let i = 0; i < seqArr.length; i++) {
          if (parseInt(seqArr[i]) < 0) {
            isNeagtive = true;
            break;
          }
        }

        if (isNeagtive) {
          setError(
            "Negative number and float number is not allowed in Page Sequence"
          );
        } else {
          setError(null);
          setResult("lru");
        }
      } catch (e) {}
    }
  };
  const handleClickMru = () => {
    console.log("MRU");
    if (frame < 0) {
      setError("Frames can not be Negative");
    } else if (frame === 0 || seq.length === 0) {
      setError("Please fill all the fields");
    } else {
      try {
        // if (seqArr.length !== page) {
        //   setError("Please enter the correct number of page sequence");
        // }

        let isNeagtive = false;
        for (let i = 0; i < seqArr.length; i++) {
          if (parseInt(seqArr[i]) < 0) {
            isNeagtive = true;
            break;
          }
        }

        if (isNeagtive) {
          setError(
            "Negative number and float number is not allowed in Page Sequence"
          );
        } else {
          setError(null);
          setResult("mru");
        }
      } catch (e) {}
    }
  };

  const handleClickOpr = () => {
    console.log("OPR");

    if (frame < 0) {
      setError("Frames can not be Negative");
    } else if (frame === 0 || seq.length === 0) {
      setError("Please fill all the fields");
    } else {
      try {
        // if (seqArr.length !== page) {
        //   setError("Please enter the correct number of page sequence");
        // }

        let isNeagtive = false;

        for (let i = 0; i < seqArr.length; i++) {
          if (parseInt(seqArr[i]) < 0) {
            isNeagtive = true;
            break;
          }
        }

        let len = seqArr.length;

        if (isNeagtive) {
          setError(
            "Negative number and float number is not allowed in Page Sequence"
          );
        } else {
          setError(null);
          setResult("opr");
        }
      } catch (e) {}
    }
  };

  const handleReset = () => {
    console.log("RESET");
    setFrame(0);

    setSeq("");
    setResult("none");
    setError(null);
  };

  const buttons = [
    { key: 1, title: "FCFS", func: handleClickFcfs },
    { key: 2, title: "OPR", func: handleClickOpr },
    { key: 3, title: "LRU", func: handleClickLru },
    { key: 4, title: "MRU", func: handleClickMru },
    { key: 5, title: "RESET", func: handleReset },
  ];

  return (
    <>
      {/* Navbar here */}
      <Navbar />

      <Box className={classes.container}>
        {/* Header  */}
        <Box className={classes.box1}>
          <Box className={classes.header}>
            <Typography variant="h3">
              {/* Page Replacement Algorithm */}
              Simulator
            </Typography>
          </Box>

          {/* Main Component */}
          <Box className={classes.mainComponent}>
            <form>
              <Box className={classes.inputBox}>
                <Typography variant="h6" className={classes.label}>
                  Enter Number of Frames
                </Typography>
                <input
                  type="number"
                  className={classes.input}
                  id="frame"
                  name="frame"
                  value={frame}
                  onChange={frameHanadler}
                />
              </Box>

              <Box className={classes.inputBox}>
                <Typography variant="h6" className={classes.label}>
                  Enter The Page Sequence
                </Typography>

                <input
                  type="text"
                  className={classes.input}
                  id="seq"
                  name="seq"
                  value={seq}
                  onChange={seqHandler}
                />
              </Box>

              <Box className={classes.btns}>
                {buttons.map((btn, index) => {
                  return (
                    <>
                      <Button
                        key={btn.key}
                        className={classes.btn}
                        onClick={btn.func}
                      >
                        {btn.title}
                      </Button>
                    </>
                  );
                })}
              </Box>

              {error ? (
                <>
                  <p className={classes.errorMsg}>{error}</p>
                </>
              ) : (
                <></>
              )}

              {/* <hr /> */}
            </form>
          </Box>
        </Box>

        {/* Result */}

        <Box className={classes.result}></Box>

        {/* Result ends here */}
        {result === "fifo" && error === null ? (
          <>
            <FIFO frame={frame} seq={seqArr} mainSeq={seq} />
          </>
        ) : (
          <></>
        )}
        {result === "opr" ? (
          <>
            <OPR frame={frame} seq={seqArr} mainSeq={seq} />
          </>
        ) : (
          <></>
        )}
        {result === "lru" ? (
          <>
            <LRU frame={frame} seq={seqArr} mainSeq={seq} />
          </>
        ) : (
          <></>
        )}
        {result === "mru" ? (
          <>
            <MRU frame={frame} seq={seqArr} mainSeq={seq} />
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Home;
