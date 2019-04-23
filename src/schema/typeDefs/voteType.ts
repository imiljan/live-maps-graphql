import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Vote {
    id: ID!
    sign: Int!
    createdAt: Date!
  }

  extend type Query {
    vote: Vote
  }
`;
