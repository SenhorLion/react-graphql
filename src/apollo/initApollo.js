import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
// NB: cross-fetch required to stop error:
// Invariant Violation:
//     fetch is not found globally and no fetcher passed, to fix pass a fetch for
//     your environment like https://www.npmjs.com/package/unfetch.

import 'cross-fetch/polyfill';
// TODO: Apollo - Use HoC to wrap compoents with apollo
// TODO: Apollo - Handle SSR
let apolloClient = null;

// TODO: Add GraphQL Endpoint
const BASE_API_URL = 'https://api.github.com/graphql';
const GITHUB_ACCESS_TOKEN = 'c0b67e05ad2d210c235fbf2c56adf17ae9c81ff3';

const httpLink = new HttpLink({
  uri: BASE_API_URL,
  headers: {
    authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
  }
});

// TODO: Apollo - Implement InMemoryCache options
const cache = new InMemoryCache();

function create() {
  return new ApolloClient({
    link: httpLink,
    cache
  });
}

export default function initApollo() {
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
