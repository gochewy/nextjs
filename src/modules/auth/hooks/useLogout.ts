import * as ls from 'local-storage';
import keycloak from '../../../lib/keycloak';
import { actions} from '../../../slices/auth';
import { useAppDispatch } from '../../../store';
import {LOCAL_REFRESH_TOKEN_KEY, LOCAL_TOKEN_KEY} from "../../../common/constants";
const useLogout = () => {
    const dispatch = useAppDispatch();

    return () => {
        ls.set(LOCAL_TOKEN_KEY, '');
        ls.set(LOCAL_REFRESH_TOKEN_KEY, '');
        dispatch(actions.setAuthState({
            isAuthed: false,
            token: '',
            userId: '',
            email: '',
            firstName: '',
            lastName: '',
        }));
        keycloak.logout();
    };
};

export default useLogout;
