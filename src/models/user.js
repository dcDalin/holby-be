const UserModel = (sequelize, type) => {
  return sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: type.STRING,
    lastName: type.STRING,
    email: type.STRING,
    password: type.STRING,
  });
};

export default UserModel;
