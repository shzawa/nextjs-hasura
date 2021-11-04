import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT =
  'https://nextjs-hasura-api-shzawa.herokuapp.com/v1/graphql';

export const gqlClient = new GraphQLClient(API_ENDPOINT, {
  headers: {},
});
