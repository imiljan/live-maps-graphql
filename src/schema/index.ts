import { gql, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

import { resolvers as userResolver } from './resolvers/userResolver';
import { typeDefs as userType } from './typeDefs/userType';

const typeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, userType],
  resolvers: merge(userResolver),
});

export default schema;
