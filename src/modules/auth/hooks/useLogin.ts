import keycloak from '../../../lib/keycloak';

const useLogin = () => () => {
    keycloak.login();
};

export default useLogin;
