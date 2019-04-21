import { UserModel } from '../models';

const resolvers = {
  Query: {
    // Fetch all users
    async allUsers() {
      const result = await UserModel.findAll();
      return result;
    },
    // Fetch user by id
    async fetchUser(_, { id }) {
      const result = await UserModel.findByPk(id);
      if (!result) {
        throw new Error(`User with the ID ${id} does not exist.`);
      }
      return result;
    },
  },
};

export default resolvers;
