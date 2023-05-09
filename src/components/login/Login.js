import React from "react";
import "./Login.css";
import {
  FormControl,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import GoogleIcon from "../../assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
import TwitterIcon from "../../assets/TwitterIcon.webp"
import FacebookIcon from "../../assets/Facebook-logo.png"
const Login = () => {
  return (
    <div className="container">
      <div className=" form-box">
        <Typography variant="h3">Login</Typography>
        <FormControl  style = {{marginBlock:"30px"}}>
          <TextField label="Email" required variant="outlined" style = {{marginBlock:"20px"}}/>
          <TextField label="Username" required variant="outlined"  style = {{marginBlock:"20px"}}/>
          <TextField
            label="Password"
            required
            variant="outlined"
            type="password"
            style = {{marginBlock:"20px"}}
          />
          <a href="#">Forgot Password ??</a>
          <Button variant="contained" style = {{marginBlock:"30px"}}>Login</Button>
          <div className="icons">
          <img src={GoogleIcon}></img>
          <img src={FacebookIcon}></img>
          <img src= {TwitterIcon}></img>
        </div>
        </FormControl>
       
      </div>
    </div>
  );
};

export default Login;
