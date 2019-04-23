import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
  }

  extend type Query {
    user: User
  }
`;
