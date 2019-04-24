import { gql } from 'apollo-server';

export const typeDefs = gql`
  type UserCheckin {
    id: ID!
    createdAt: Date!
    event: Event
    user: User
  }

  extend type Query {
    userCheckin(id: ID!): UserCheckin
  }
`;
