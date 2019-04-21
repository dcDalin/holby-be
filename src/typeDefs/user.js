import { gql } from 'apollo-server-express';

export default gql`
  # Users Queries
  extend type Query {
    # Find one user by their id (must match exactly)
    allUsers: [User]
  }
  extend type Mutation {
    signOut: Boolean
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
  }
`;
