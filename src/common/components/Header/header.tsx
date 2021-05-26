import React from "react";
import {
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactTyped from "react-typed";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#eef2f5",
    height: "30vh",
    maxHeight: "1000px",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    justifyContent: "center",
    alignContent: 'start',
  },
  subHeader: {
    margin: 0,
    maxWidth: 540,
    padding: "0 0 0 30px",
    paddingTop: "5vh",
    width: "auto",
  },
  intro: {
    fontSize: 40,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    color: "#1f2229",
    textAlign: "left",
    fontWeight: 700,
    paddingBottom: 20,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Grid container className={classes.subHeader} md={6} xs={12}>
          <Typography
            className={classes.intro}
            variant="h3"
            align="center"
          >
            <ReactTyped
              strings={["Manage your todos anywhere", "Web or mobile"]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
