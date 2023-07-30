import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
  ssrMode: true,
})

export default apolloClient;