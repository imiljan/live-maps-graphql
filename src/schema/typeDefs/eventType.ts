import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    body: String!
    img: String!
    address: String!
    hashtag: String
    createdAt: Date!
    deleted: Boolean!
    startAt: Date!
    endAt: Date
    lat: Float!
    long: Float!
    permanent: Boolean!
  }

  extend type Query {
    event: Event
  }
`;