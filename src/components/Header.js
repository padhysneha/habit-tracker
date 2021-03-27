import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Input,
  AppBar,
  Avatar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 36,
  },
  title: {
    flexGrow: 1,
  },
}));
//-----
function Header() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  console.log("user", user);
  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <IconButton color="inherit">
            <SideBar />
        </IconButton>
          
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login Info</MenuItem>
                <MenuItem onClick={handleClose}>Usage Tips</MenuItem>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>

              </Menu>
            </div>   
        </Toolbar>
      </AppBar>
      </div>
    <div>
      {user ? <h3>{user.name}</h3> : ""}
      <Toolbar />
      {user ? (
        <Button onClick={logout}>LogOut</Button>
      ) : (
        <Button component={Link} to="/auth">
          SignIn
        </Button>
      )}
    </div>
    </div>
  );
}

export default Header;
