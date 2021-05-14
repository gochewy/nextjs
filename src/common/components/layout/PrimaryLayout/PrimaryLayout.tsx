import { memo } from "react";
import posthog from "posthog-js";
import {
  Button,
  Grid, makeStyles, Typography,
} from "@material-ui/core";
import Login from "../../../../modules/auth/components/Login";
import { useAppSelector } from "../../../../store";
import Navbar from "../../Toolbar/Navbar";
import config from "../../../../../../chewy.json";

export interface PrimaryLayoutProps {
  Component: any;
  pageProps: any;
}
const useStyles = makeStyles(() => ({
  loginPage: {
    width: '100%',
    minHeight: '100%',
  },
}));
const PrimaryLayout = memo(({ Component, pageProps }: PrimaryLayoutProps) => {
  const classes = useStyles();
  const isAuthed = useAppSelector(((state) => !!state.auth.token));
  const clientAuthed = useAppSelector(((state) => !!state.auth.clientAuthed));
  console.log(config);
  const isKeycloakEnabled = config.modules.auth.enabled;
  console.log(isKeycloakEnabled);
  if (!isKeycloakEnabled) {
    return (
      <Grid container justify="center" alignItems="center" className={classes.loginPage}>
        <Grid item>
          <h1>keycloak is not enabled</h1>
          <Button onClick={() => {
            posthog.capture('click button', { property: 'potatoes' });
          }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
  if (!isAuthed) {
    return (
      <Grid container justify="center" alignItems="center" className={classes.loginPage}>
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    );
  }
  return clientAuthed ? (
    <Grid>
      <Navbar />
      <Component {...pageProps} />
    </Grid>
  ) : null;
});

export default PrimaryLayout;
