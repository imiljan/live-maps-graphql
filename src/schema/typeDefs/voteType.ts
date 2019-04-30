import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Vote {
    id: ID!
    sign: Int!
    createdAt: Date!
    event: Event
    user: User
  }

  extend type Query {
    vote(id: ID!): Vote
  }

  extend type Mutation {
    vote(eventId: ID!, sign: Int!): Boolean!
  }
`;
