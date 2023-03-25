import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import TableHeader from "./TableHeader";
import PieChart from "./PieChart";
const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",

    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    marginTop: 40,
    marginBottom: 40,
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      width: "100%",
      padding: "0 10px",
    },
  },
  result: {
    "& tr:nth-child(even)": {
      backgroundColor: "#273c3c",
    },
  },
  main: {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "10px",
  },
  summary: {
    textAlign: "center",
    marginTop: 30,
    border: "1px solid white",
    borderRadius: "25px",
  },
  header: {
    fontSize: 46,
    textAlign: "center",
  },
  sum: {
    padding: "40px",
  },
  sumText: {
    fontSize: 30,
    textAlign: "left",
  },
}));

const FIFO = (props) => {
  const classes = useStyles();

  const frames = props.frame;

  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) {
    arr.push(i + 1);
  }

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item, index) => {
          return (
            <th
              className={classes.main}
              style={{ backgroundColor: "#273c3c" }}
            >{`FRAME ${item}`}</th>
          );
        })}
      </>
    );
  };

  // Fifo algo code

  // Time complexity = O(page * frame)
  // Space Complexity = O(page)

  const fifoResultGiver = (frame, seq) => {
    let pageFaults = 0;

    let temp = [frame];

    let result = [];
    let index_arr = [];

    // Initialize every element to 1

    for (let i = 0; i < frame; i++) {
      temp[i] = -1;
    }

    // Iterate through sequence
    for (let i = 0; i < seq.length; i++) {
      let hit = false;
      let fault = false;
      let flag = 0;

      // Check if the element is in current array
      for (let j = 0; j < frame; j++) {
        if (seq[i] === temp[j]) {
          flag++;
          index_arr.push(j);
          pageFaults--;
          hit = true;
        }
      }
      pageFaults++;
      fault = true;
      if (pageFaults <= frame && flag === 0) {
        temp[i] = seq[i];
        index_arr.push(i);
      } else if (flag === 0) {
        let pageHitAndPageRatio = (pageFaults - 1) % frame;
        temp[pageHitAndPageRatio] = seq[i];
        index_arr.push(pageHitAndPageRatio);
      }

      // Initialize array and push every elements of our current array
      let elements = [];

      elements.push(`P${i + 1}   (${seq[i]})`);
      //printing elements
      for (let j = 0; j < frame; j++) {
        elements.push(temp[j]);
      }
      if (hit === true) {
        elements.push("HIT");
      } else if (fault === true) {
        elements.push("FAULT");
      }

      result.push(elements);
    }

    return { result, pageFaults, index_arr };
  };

  // Row maker

  const rowResultMaker = (frames, pageSeq) => {
    const { result, index_arr } = fifoResultGiver(frames, pageSeq);

    return (
      <>
        {result.map((item, index) => {
          let lastEle = item[item.length - 1];

          return (
            <tr>
              {item.map((i, ind) => {
                return (
                  <>
                    {ind !== index_arr[index] + 1 ? (
                      <>
                        <td
                          className={classes.main}
                          style={{
                            backgroundColor: `${
                              ind !== item.length - 1
                                ? "inherit"
                                : lastEle === "HIT"
                                ? "#7C99AC"
                                : "#FFCDDD"
                            }`,
                            border: `${
                              ind !== item.length - 1
                                ? "1px solid white"
                                : "1px solid black"
                            }`,
                            color: `${
                              ind !== item.length - 1 ? "inherit" : "black"
                            }`,
                          }}
                        >
                          {i}
                        </td>
                      </>
                    ) : (
                      <>
                        {lastEle === "HIT" ? (
                          <>
                            <td
                              className={classes.main}
                              style={{
                                backgroundColor: "rgb(105 228 0 / 86%)",
                              }}
                            >
                              {i}
                            </td>
                          </>
                        ) : (
                          <>
                            <td
                              className={classes.main}
                              style={{
                                backgroundColor: "#fa2c2c",
                              }}
                            >
                              {i}
                            </td>
                          </>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const { pageFaults } = fifoResultGiver(frames, pageSeq);
  const pageHits = pageSeq.length - pageFaults;
  return (
    <>
      <TableHeader
        // page={props.page}
        // frame={props.frame}
        // pageSeq={props.mainSeq}
        algoName={"FCFS (First Come First Serve)"}
      />

      <Box className={classes.table}>
        <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c", padding: "20px" }}
              >
                PAGES
              </th>
              {frameCreator(arr)}
              <th
                className={classes.main}
                style={{ backgroundColor: "#273c3c", padding: "20px" }}
              >
                RESULT
              </th>
            </tr>
          </thead>

          <tbody className={classes.result}>
            {rowResultMaker(frames, pageSeq)}
          </tbody>
        </table>
        <Box className={classes.summary}>
          <Box style={{ textAlign: "center", marginTop: 14 }}>
            <Typography className={classes.header}>Summary</Typography>
          </Box>
          <Box className={classes.sum}>
            <Typography className={classes.sumText}>
              Total Frames: {props.frame}
            </Typography>
            <Typography className={classes.sumText}>
              Total Pages: {props.seq.length}
            </Typography>
            <Typography className={classes.sumText}>
              Page Sequence: {props.mainSeq}
            </Typography>
            <Typography className={classes.sumText}>
              Page Hit: {pageHits}
            </Typography>
            <Typography className={classes.sumText}>
              Page Faults: {pageFaults}
            </Typography>
          </Box>

          <Box className={classes.chart}>
            <PieChart hit={pageHits} fault={pageFaults} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FIFO;
