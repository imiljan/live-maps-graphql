import { gql } from 'apollo-server';

export const typeDefs = gql`
  type UserCheckin {
    id: ID!
    createdAt: Date!
  }

  extend type Query {
    userCheckin: UserCheckin
  }
`;
