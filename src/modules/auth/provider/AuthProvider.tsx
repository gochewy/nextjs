import keycloak from "../../../lib/keycloak";
import {useCallback, useEffect} from "react";
import jwtDecode from 'jwt-decode';
import * as ls from 'local-storage';

import {useAppDispatch} from "../../../store";
import {actions} from "../../../slices/auth";
import {LOCAL_REFRESH_TOKEN_KEY, LOCAL_TOKEN_KEY} from "../../../common/constants";
import {useInserUserOnLoginMutation} from "../../../generated/graphql";
import {reconnectWSLink} from "../../../common/graphql/client";

const useKeycloakInitialize = () => {
    useEffect(() => {
        const token = ls.get(LOCAL_TOKEN_KEY) || '';
        const refreshToken = ls.get(LOCAL_REFRESH_TOKEN_KEY) || '';
        keycloak?.init({ token, refreshToken });
    },[])
}

const useOnAuthSuccess = () => {
    const dispatch = useAppDispatch();
    const [insertUser] = useInserUserOnLoginMutation();
    useEffect(() => {
        keycloak.onAuthSuccess = async () => {
            await keycloak.updateToken(300);
            const keycloakToken = keycloak.token;
            const decoded: any = jwtDecode(keycloakToken);
            console.log(decoded);
            const firstName = decoded?.given_name;
            const lastName = decoded?.family_name;
            const username = decoded?.preferred_username;
            const userId = decoded?.sub;
            const email = decoded?.email;
            const authStatus = keycloakToken && decoded.exp > new Date().getTime() /1000;
            await dispatch(actions.setAuthState({
                isAuthed: authStatus,
                token: keycloakToken,
                firstName,
                userId,
                email,
                lastName,
            }));

            await insertUser({
                    variables: {
                        username,
                        email
                    }
                })
            ls.set(LOCAL_TOKEN_KEY, keycloakToken);
            ls.set(LOCAL_REFRESH_TOKEN_KEY, keycloak.refreshToken);

            reconnectWSLink();
            dispatch(actions.setAuthState({
                clientAuthed: true
            }))
        };
        return () => {
            keycloak.onAuthSuccess = () => undefined;
        }
    })
}

let lastTime = (new Date()).getTime();

const useTokenRefresh = () => {
    const dispatch = useAppDispatch();
    const wakeupInterval = 1000 * 30;

    const refreshToken = useCallback(async () => {
        if (keycloak?.token) {
            await keycloak.updateToken(300);
            ls.set(LOCAL_TOKEN_KEY, keycloak.token);
            ls.set(LOCAL_REFRESH_TOKEN_KEY, keycloak.refreshToken || '');
            dispatch(actions.setAuthState({ token: keycloak.token }));
        }
    }, [dispatch]);

    useEffect(() => {
        const t = setInterval(async () => {
            await refreshToken();
        }, 1000 * 60 * 2);
        //         minutes ^
        return () => {
            clearInterval(t);
        };
    }, [refreshToken]);

    useEffect(() => {
        const t = setInterval(async () => {
            const time = (new Date()).getTime();
            if (time - lastTime > wakeupInterval) {
                await refreshToken();
            }
            lastTime = time;
        }, 1000 * 5);

        return () => {
            clearInterval(t);
        };
    }, [refreshToken, wakeupInterval]);
};
const AuthProvider = ({
    children
}) => {
    useKeycloakInitialize();
    useOnAuthSuccess();
    useTokenRefresh();

    return children;
}

export default AuthProvider;