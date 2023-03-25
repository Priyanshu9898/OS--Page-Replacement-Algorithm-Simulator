import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "10px",
  },
});

const RowResultMaker = (props) => {
  const classes = useStyles();

  let result = props.result;
  let index_arr = props.index_arr;
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

export default RowResultMaker;
