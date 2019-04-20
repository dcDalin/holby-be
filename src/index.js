import { ApolloServer } from 'apollo-server-express';
import to from 'await-to-js';
import express from 'express';
import ENV from './config';
import sequelize from './models';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = express();

app.disable('x-powered-by');

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('Holby Training Solutions'));

app.listen({ port: ENV.PORT }, async () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server ready at http://localhost:${ENV.PORT}${server.graphqlPath}`);
  /* eslint-disable no-console */
  let err = '';
  [err] = await to(sequelize.sync({ force: true }));

  if (err) {
    console.error(`Error: Cannot connect to database, ${err}`);
  } else {
    console.log('Connected to database');
  }
});
