import dotEnv from 'dotenv';

dotEnv.config();

const ENV = {
  PORT: process.env.PORT || '4000',

  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: process.env.DB_PORT || '3306',
  DB_NAME: process.env.DB_NAME || 'defaultDB',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || 'password',
  DB_DIALECT: process.env.DB_DIALECT || 'postgres',
};

export default ENV;
