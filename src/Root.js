/* eslint-disable react/display-name */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { initApollo } from './apollo';
import DefaultErrorBoundary from './DefaultErrorBoundary';

const apolloClient = initApollo();

export default props => {
  return (
    // <React.StrictMode>
    <DefaultErrorBoundary>
      <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
    </DefaultErrorBoundary>
    // </React.StrictMode>
  );
};
