import appRoot from 'app-root-path';
import config from 'config';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';

export const createTestSequelizeInstance = async () => {
  const root = appRoot.resolve('.');

  const db_user: string = config.get('postgres.user');
  const db_pwd: string = config.get('postgres.pwd');

  const sequelize = new Sequelize({
    database: 'arcfront_test',
    username: db_user,
    password: db_pwd,
    dialect: 'postgres',
    host: process.env.HOST || 'localhost',
    models: [path.join(root, 'dist/src/**/persistence/*.js')],
    logging: false,
  });

  // before running tests, we first drop all tables, then sync them again to always reset the data
  await sequelize.drop();
  await sequelize.sync({ logging: false });

  return sequelize;
};

export const createSequelizeInstance = () => {
  const root = appRoot.resolve('.');

  const db: string = config.get('postgres.db');
  const db_user: string = config.get('postgres.user');
  const db_pwd: string = config.get('postgres.pwd');

  const sequelize = new Sequelize({
    database: (process.env.DB as string) || db,
    username: (process.env.DB_USER as string) || db_user,
    password: (process.env.DB_PWD as string) || db_pwd,
    dialect: 'postgres',
    host: process.env.HOST || 'localhost',
    models: [path.join(root, 'dist/src/**/persistence/*.js')],
  });

  return sequelize;
};
