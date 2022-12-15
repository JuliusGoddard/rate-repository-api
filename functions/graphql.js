import { createApolloServer } from './bundle/apolloServer';

const server = createApolloServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
