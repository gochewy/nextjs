import { memo } from "react";
import {
  Button,
  Grid, makeStyles,
} from "@material-ui/core";
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
const PrimaryLayout = memo(() => {
  const classes = useStyles();
  console.log(config);
  const isKeycloakEnabled = config.modules.auth.enabled;
  console.log(isKeycloakEnabled);

  return (
    <Grid container justify="center" alignItems="center" className={classes.loginPage}>
      <Grid item>
        <h1>keycloak is not enabled</h1>
        <Button>Submit</Button>
      </Grid>
    </Grid>
  );
});

export default PrimaryLayout;
