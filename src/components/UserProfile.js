import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const UserProfile = () => {
  const GET_USER_PROFILE = gql`
    {
      viewer {
        login
        name
      }
    }
  `;

  return (
    <Query query={GET_USER_PROFILE}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error, No GraphQL data to show yet.</p>;
        const { viewer } = data;
        return (
          <div>
            <h3>Github User:</h3>
            <p>Name: {viewer.name}</p>
            <p>User name: {viewer.login}</p>
          </div>
        );
      }}
    </Query>
  );
};

export default UserProfile;
