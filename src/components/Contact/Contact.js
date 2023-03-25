import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { Box, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { db } from "../../firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
  },

  box: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    padding: "0 70px",
    marginTop: 60,
    width: 600,
    height: "69vh",
    border: "1px solid white",
    borderRadius: "25px",
    backgroundColor: "#1a202c",
    [theme.breakpoints.down("md")]: {
      width: "600",
      height: "80vh",
      border: "1px solid white",
      borderRadius: "30px",
      padding: "0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "45vh",
      border: "none",
      // padding: "12px",
      padding: "0 10px",
    },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    //   border: "none",
    //   padding: "12px",
    // },
  },
  headerText: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
  },
  label: {
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  inp: {
    marginTop: 10,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  input: {
    padding: "5px 10px",
    color: "black",
    marginTop: 5,
    width: 450,
    border: "1px solid black",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px",
      width: "300",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  boxBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#f15550",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    "&:hover": {
      backgroundColor: "#fa2c2c",
    },
  },
}));

const Contact = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    error: null,
    loading: false,
  });

  const { name, email, message, error, loading } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    setData({ ...data, loading: true, error: false });

    if (name === "" || email === "" || message === "") {
      setData({ ...data, error: "Please fill in all fields", loading: false });
    } else if (
      !email.includes("@") ||
      name.length < 3 ||
      email.length < 6 ||
      message.length < 5
    ) {
      setData({
        ...data,
        error: "Please Enter in all fields correctly",
        loading: false,
      });
    } else {
      const colref = collection(db, "contact");
      const newDoc = addDoc(colref, {
        name,
        email,
        message,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log(newDoc);

      setData({
        email: "",
        name: "",
        message: "",
        error: null,
        loading: false,
      });
      navigate("/");
    }
  };

  const changeHandler = (e) => {
    setData({
      ...data,
      error: null,
      loading: false,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <Grid item container xs={12} md={12} sm={12}>
        <Box className={classes.container}>
          <Box className={classes.box}>
            <Box style={{ marginTop: 30 }}>
              <Typography className={classes.headerText}>
                Let's Get in Touch
              </Typography>
            </Box>
            <Grid item container xs={12} md={12} sm={12}>
              <Box className={classes.form}>
                <form onSubmit={handleSubmit}>
                  <Box className={classes.inp}>
                    <Typography className={classes.label}>Name</Typography>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={changeHandler}
                      placeholder="Enter Your Name"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inp}>
                    <Typography className={classes.label}>Email</Typography>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                      placeholder="Enter Your Email"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inp}>
                    <Typography className={classes.label}>
                      Tell Us About Yourself
                    </Typography>
                    <textarea
                      type="text"
                      name="message"
                      value={message}
                      onChange={changeHandler}
                      placeholder="Enter Your Message"
                      className={classes.input}
                    />
                  </Box>
                  {error ? (
                    <>
                      <Typography
                        style={{
                          color: "red",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  ) : (
                    <></>
                  )}
                  <Box className={classes.boxBtn}>
                    <Button className={classes.btn} onClick={handleSubmit}>
                      <Typography style={{ color: "white", fontSize: 18 }}>
                        {loading ? "Submiting..." : "Submit"}
                      </Typography>
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Contact;
