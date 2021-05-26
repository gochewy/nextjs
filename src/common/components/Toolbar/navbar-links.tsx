import React from "react";
import {
  List, ListItem, makeStyles, Button,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {
  ExitToApp,
  HomeOutlined,
  ListAltOutlined,
  PostAddOutlined,
} from "@material-ui/icons";
import Link from "next/link";
import { useAppSelector } from "../../../store";
import useLogout from "../../../modules/auth/hooks/use-logout";

const useStyles = makeStyles({
  list: {
    fontSize: "14px",
    listStyle: "none",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    fontSize: "20px",
    display: "block",
    width: "auto",
    marginRight: "10px",
    justifyContent: "space-between",
    padding: "0",
    "&:hover,&:focus": {
      color: "lightblue",
      background: "transparent",
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  navLink: {
    color: "#555",
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#1dbf73",
      background: "rgba(200, 200, 200, 0.2)",
    },
  },
});

const NavbarLinks = () => {
  const isLogged = useAppSelector((state) => state.auth.isAuthed);
  const classes = useStyles();
  const logout = useLogout();
  const renderMenuNotLogged = () => (
    <List>
      <ListItem className={classes.listItem}>
        <Link href="/landing">
          <Button className={classes.navLink}>
            <HomeOutlined className={classes.icons} />
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <LockOpenIcon className={classes.icons} />
          Login
        </Button>
      </ListItem>
    </List>
  );

  const renderMenuLogged = () => (
    <List>
      <ListItem className={classes.listItem}>
        <Link href="/landing">
          <Button className={classes.navLink}>
            <HomeOutlined className={classes.icons} />
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/todos">
          <Button className={classes.navLink}>
            <ListAltOutlined className={classes.icons} />
            All Todos
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/addTodos">
          <Button className={classes.navLink}>
            <PostAddOutlined className={classes.icons} />
            Add Todos
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink} onClick={logout}>
          <ExitToApp className={classes.icons} />
          Logout
        </Button>
      </ListItem>
    </List>
  );

  return (
    <div className={classes.list}>
      {isLogged ? renderMenuLogged() : renderMenuNotLogged()}
    </div>
  );
};

export default NavbarLinks;
