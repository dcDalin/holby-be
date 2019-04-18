import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import ENV from './config';
import sequelize from './models';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = express();

app.disable('x-powered-by');

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;
server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('Holby Training Solutions'));

app.listen({ port: ENV.PORT }, () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  /* eslint-disable no-console */
  sequelize
    .authenticate()
    .then(() => {
      /* eslint-disable no-console */
      console.log('Connection has been established successfully.');
      /* eslint-disable no-console */
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error('Unable to connect to the database:', err);
      /* eslint-disable no-console */
    });
});
