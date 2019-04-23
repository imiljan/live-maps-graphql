import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from 'typeorm';

import schema from './schema';

const server = new ApolloServer({ schema });

const app = express();

createConnection()
  .then(() => {
    server.applyMiddleware({ app: app });

    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );

    // server.listen(4000).then(({ url }: { url: any }) => {
    //   console.log(`🚀  Server ready at ${url}`);
    // });
  })
  .catch((e) => console.log(e));
