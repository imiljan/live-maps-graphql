import { gql, makeExecutableSchema } from 'apollo-server';
import { GraphQLScalarType, Kind } from 'graphql';
import { merge } from 'lodash';

import { resolvers as eventResolver } from './resolvers/eventResolver';
import { resolvers as interestResolver } from './resolvers/interestResolver';
import { resolvers as userCheckinResolver } from './resolvers/userCheckinResolver';
import { resolvers as userInterestResolver } from './resolvers/userInterestResolver';
import { resolvers as userResolver } from './resolvers/userResolver';
import { resolvers as voteResolver } from './resolvers/voteResolver';
import { typeDefs as eventType } from './typeDefs/eventType';
import { typeDefs as interestType } from './typeDefs/interestType';
import { typeDefs as userCheckinType } from './typeDefs/userCheckinType';
import { typeDefs as userInterestType } from './typeDefs/userInterestType';
import { typeDefs as userType } from './typeDefs/userType';
import { typeDefs as voteType } from './typeDefs/voteType';

const typeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  scalar Date
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    //  parseValue: gets invoked to parse client input that was passed through variables.
    parseValue(value) {
      console.log('ParseValue: ' + value);
      return new Date(value); // value from the client
    },
    // serialize: gets invoked when serializing the result to send it back to a client.
    serialize(value) {
      console.log('Serialize: ' + value);
      return value; // value sent to the client
    },
    // parseLiteral: gets invoked to parse client input that was passed inline in the query.
    parseLiteral(ast) {
      // still not sure when this gets invoked
      console.log('Parse literal: ' + ast.kind);
      console.log('Kind: ' + Kind.INT);
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    eventType,
    interestType,
    userCheckinType,
    userInterestType,
    userType,
    voteType,
  ],
  resolvers: merge(
    resolvers,
    eventResolver,
    interestResolver,
    userCheckinResolver,
    userInterestResolver,
    userResolver,
    voteResolver
  ),
});

export default schema;
