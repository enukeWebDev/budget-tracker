import "./signup.scss";
import axios from 'axios';
import { React, useState } from "react";
import {Grid, Paper,TextField,Button,Typography,Avatar,} from "@material-ui/core";
import isEmail from 'validator/lib/isEmail';
import { Link,useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitForm = () => {
  
    if (email === "" || password === "" || firstName === "" || lastName === "") {
      setError("All Fields are required");
      return;
    }

    if(!isEmail(email)){
      setError((pre)=> "Email is not valid");
      return
    }

    const data = {email,password,firstName,lastName}
    axios
      .post("/api/register", data)
      .then((res) => {
        const data = JSON.stringify(res.data);
        if (res.status !== 400) {
          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
          console.log(data);
          window.localStorage.setItem("user", data);
          setError("");
          navigate('/home');
        }
      })
      .catch((error) => {
        setError("User already exists");
        console.log(error);
      });
  };

  return (
    <Grid>
      <Paper className="signup__paper--style">
        <Grid align="center">
          <Avatar className="avatar__icon" />
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          className="signup__fields--margin"
          label="First Name"
          placeholder="Enter Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          className="signup__fields--margin"
          label="Last Name"
          placeholder="Enter Your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          className="signup__fields--margin"
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          className="signup__fields--margin"
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        {error && <h3 className="error--red">{error}</h3>}
        <Button
          className="signup__fields--margin"
          type="button"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => submitForm()}
        >
          Sign Up
        </Button>
        <Typography className="signup__fields--margin ">
          Already have an account?
          <Link to="/">Login Here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Signup;
