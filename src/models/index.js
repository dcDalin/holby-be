import Sequelize from 'sequelize';
import ENV from '../config';

const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
});

export default sequelize;
