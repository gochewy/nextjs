import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLinks from "./navbar-links";

const useStyles = makeStyles(() => ({
  menuContainer: {
    width: 250,
  },
  container: {
    maxHeight: "50px",
    flex: "1",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
  appBar: {
    backgroundColor: "#c0f0c9",
    boxShadow: "none",
    color: "black",
  },
  links: {
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Grid item className={classes.links}>
            {' '}
            <NavbarLinks />
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
