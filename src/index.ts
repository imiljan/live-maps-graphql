import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';

import schema from './schema';
import { getUser } from './util/auth';

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    // get the user token from the headers
    // authorization: Bearer <token>
    const token = req.headers.authorization || '';
    if (token === '') {
      return { user: null };
    }
    // try to retrieve a user with the token
    const user = await getUser(token.split(' ')[1]);
    // add the user to the context
    return { user };
  },
});

createConnection()
  .then(() => {
    server.listen(4000).then(({ url }: { url: any }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((e) => console.log(e));
