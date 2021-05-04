import { memo } from 'react';
import {
    Box, Button, Grid,
} from '@material-ui/core';
import useLogin from '../../hooks/useLogin';

const Login = memo(() => {
    const login = useLogin();
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Grid container direction="column">
                    <Box alignSelf="center">
                        <img src="/logo.png" alt="X-Stack Logo"  />
                    </Box>
                    <Button onClick={login} variant="outlined">Login</Button>
                </Grid>
            </Grid>
        </Grid>
    );
});

export default Login;
