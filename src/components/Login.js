import "./login.scss";
import { React, useState } from "react";
import axios from "axios";
import {Grid,Paper,TextField,Button,Typography,Avatar,} from "@material-ui/core";
import isEmail from 'validator/lib/isEmail';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {

    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }

    if(!isEmail(email)){
      setError((pre)=> "Email is not valid");
      return
    }

    const data = { email: email, password: password };
    axios
      .post("/api/login", data)
      .then((res) => {
        const data = JSON.stringify(res.data);
        if (res.status !== 404) {
          setEmail("");
          setPassword("");
          window.localStorage.setItem("user", data);
          setError("");
          navigate('/home');
        }
      })
      .catch((error) => {
        setError("User Not Found");
        console.log(error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} className="paper--style">
        <Grid align="center">
          <Avatar className="avatar__icon" />
          <h2>Login</h2>
        </Grid>
        <TextField
          className="login__fields--margin"
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          className="login__fields--margin"
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
          className="login__fields--margin"
          type="button"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => submitForm()}
        >
          Login
        </Button>
        <Typography className="login__fields--margin ">
          First Time User?
          <Link to="/Signup">Register Here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
