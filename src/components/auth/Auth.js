import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Icon from "./Icon";
import { useHistory } from "react-router-dom";
import {
  Button,
  Paper,
  AppBar,
  Avatar,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); //when we change the prev state we should have a callback function
  };

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Google sign in error", error);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form} action="" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autofocus
                    half
                  />
                  <Input
                    name="lastname"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                    xs={6}
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              className={classes.submit}
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <GoogleLogin
              clientId="1047349734454-l3ppalfne54t38mujrgios00mp0b6uuh.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                  startIcon={<Icon />}
                >
                  Google Sign In{" "}
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Grid container justify="flex-end">
              <Grid items>
                <Button fullWidth onClick={switchMode}>
                  {isSignup
                    ? "Already have an account ? Sign In"
                    : "Dont have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Auth;
