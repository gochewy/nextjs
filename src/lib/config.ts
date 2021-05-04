import getConfig from 'next/config';

interface Config {
    publicRuntimeConfig: {
        graphqlEndpoint: string;
        authEndpoint: string;
    };
    serverRuntimeConfig: {
        hasuraHttpSecret: undefined | string;
        hasuraAdminSecret: undefined | string;
    };
}

export const config: Config = getConfig();

export default config;
