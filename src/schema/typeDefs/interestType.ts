import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Interest {
    id: ID!
    name: String!
    description: String!
    color: String!
    userInterests: [UserInterest]!
    events: [Event]!
  }

  extend type Query {
    interest(id: ID!): Interest
    interests: [Interest]!
  }
`;
