import { gql } from 'apollo-server';

export const typeDefs = gql`
  type UserInterest {
    id: ID!
    interest: Interest
    user: User
  }

  extend type Query {
    userInterest: UserInterest
  }
`;
