import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = express();

app.disable('x-powered-by');

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;
server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('Holby Training Solutions'));

app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
