import Sequelize from 'sequelize';
import ENV from '../config';
import UserModel from './user';

const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
});

const User = UserModel(sequelize, Sequelize);

export default sequelize;

export { User };
