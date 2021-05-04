import { OperationDefinitionNode } from 'graphql';
import fetch from 'cross-fetch';
import {
    ApolloClient, ApolloLink, HttpLink, InMemoryCache, split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { store } from '../../store';

const httpEndpoint = 'http://localhost:5000';
const httpLink = new HttpLink({
    uri: `${httpEndpoint}/v1/graphql`,
    fetch,
    headers: process.browser ? {} : {
        'x-hasura-admin-secret': 'password',
    },
});

const wsEndpoint = `ws${httpEndpoint?.slice(4)}`;

const subscriptionClient = process.browser
    ? new SubscriptionClient(`${wsEndpoint}/v1/graphql`, {
        reconnect: true,
        connectionParams: () => {
            const { token } = store.getState().auth;
            return ({
                headers: {
                    authorization: token ? `Bearer ${token}` : '',
                },
            });
        },
    })
    : null;

const wsLink = process.browser
    ? new WebSocketLink(subscriptionClient)
    : null;

export const reconnectWSLink = () => {
    subscriptionClient.close(false);
};

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = process.browser ? split(
    // split based on operation type
    ({ query }) => {
        const node: any = getMainDefinition(query);
        const typedNode: OperationDefinitionNode = node;
        const { kind, operation } = typedNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
) : httpLink;

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local store if it exists
    const { token } = store.getState().auth;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

// Instantiate client
export const client = new ApolloClient({
    link: ApolloLink.from([
        authLink,
        link,
    ]),
    cache: process.browser
        // eslint-disable-next-line no-underscore-dangle
        ? (new InMemoryCache().restore((window as any).__APOLLO_STATE__ || {}))
        : new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'cache-first',
        },
    },
});

export default client;
