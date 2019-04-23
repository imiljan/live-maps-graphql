import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  extend type Query {
    getUser: User
  }
`;
