import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';

import schema from './schema';

const server = new ApolloServer({ schema });

createConnection()
  .then(() => {
    server.listen(4000).then(({ url }: { url: any }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((e) => console.log(e));
