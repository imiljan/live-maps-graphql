import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
    userInterests: [UserInterest]!
    votes: [Vote]!
    userCheckins: [UserCheckin]!
  }

  type LoginResponse {
    ok: Boolean!
    token: String
  }

  type RegisterResponse {
    ok: Boolean!
    user: User
  }

  extend type Query {
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    register(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): RegisterResponse!
    login(username: String!, password: String!): LoginResponse!
  }
`;
