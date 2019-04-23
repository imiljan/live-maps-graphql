import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Interest {
    id: ID!
    name: String!
    description: String!
    color: String!
  }

  extend type Query {
    interest: Interest
  }
`;
