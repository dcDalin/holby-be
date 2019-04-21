import { UserModel } from '../models';

export default {
  Query: {
    async allUsers() {
      const result = await UserModel.findAll();
      return result;
    },
  },
};
