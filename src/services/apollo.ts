import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const GET_REPOS_BY_USERNAME = gql`
  query ReposByUsername($userName: String!) {
    user(login: $userName) {
      login
      name
      avatarUrl
      bio
      location
      repositories(first: 50) {
        edges {
          node {
            id
            description
            homepageUrl
            nameWithOwner
            owner {
              login
            }
            url
            languages(first: 10) {
              edges {
                node {
                  name
                  color
                }
                size
              }
            }
          }
        }
      }
    }
  }
`;

export default client;
