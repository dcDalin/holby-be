import ENV from '.';

const SequelizeConfig = {
  development: {
    username: ENV.DB_USER,
    password: ENV.DB_PASS,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
  },
  production: {
    username: ENV.DB_USER,
    password: ENV.DB_PASS,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
  },
};

export default SequelizeConfig;
