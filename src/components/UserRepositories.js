import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const UserRepositories = () => {
  const GET_REPOSITORIES_OF_CURRENT_USER = gql`
    {
      viewer {
        repositories(
          first: 5
          orderBy: { direction: DESC, field: STARGAZERS }
        ) {
          edges {
            node {
              id
              name
              url
              descriptionHTML
              primaryLanguage {
                name
              }
              owner {
                login
                url
              }
              stargazers {
                totalCount
              }
              viewerHasStarred
              watchers {
                totalCount
              }
              viewerSubscription
            }
          }
        }
      }
    }
  `;

  return (
    <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error, No GraphQL data to show yet.</p>;
        const { viewer } = data;
        return (
          <div>
            <h3>Github User Repos:</h3>
            {viewer.repositories.edges.map(({ node }) => (
              <div key={node.id} className="RepositoryItem">
                <div className="RepositoryItem-title">
                  <h2>
                    <a href={node.url}>{node.name}</a>
                  </h2>

                  <div className="RepositoryItem-title-action">
                    {node.stargazers.totalCount} Stars
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default UserRepositories;
