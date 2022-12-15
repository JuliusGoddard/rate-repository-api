const { createApolloServerLambda } = require('./bundle/apolloServer');

const server = createApolloServerLambda();

exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
