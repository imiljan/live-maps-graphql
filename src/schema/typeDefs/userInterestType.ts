import { gql } from 'apollo-server';

export const typeDefs = gql`
  type UserInterest {
    id: ID!
  }

  extend type Query {
    userInterest: UserInterest
  }
`;
