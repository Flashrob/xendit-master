import appRoot from 'app-root-path';
import bluebird from 'bluebird';
import config from 'config';
import * as fs from 'fs';
import * as path from 'path';
import { Sequelize } from 'sequelize';
import Umzug from 'umzug';

const createSequelizeInstance = () => {
  const db: string = config.get('postgres.db');
  const db_user: string = config.get('postgres.user');
  const db_pwd: string = config.get('postgres.pwd');

  const sequelize = new Sequelize(
    (process.env.DB as string) || db,
    (process.env.DB_USER as string) || db_user,
    (process.env.DB_PW as string) || db_pwd,
    {
      host: process.env.HOST || 'localhost',
      dialect: 'postgres',
    },
  );
  return sequelize;
};

const format = (i: string | number) =>
  parseInt(i as string, 10) < 10 ? '0' + i : i;

const getCurrentDateTime = () => {
  const date = new Date();
  return [
    date.getUTCFullYear(),
    format(date.getUTCMonth() + 1),
    format(date.getUTCDate()),
    format(date.getUTCHours()),
    format(date.getUTCMinutes()),
    format(date.getUTCSeconds()),
  ].join('');
};

const migrateUp = async (umzug: Umzug.Umzug) => {
  await umzug.up();
};

const migrateDown = async (umzug: Umzug.Umzug) => {
  await umzug.down();
};

const createMigration = (name: string) => {
  const root = appRoot.resolve('.');
  const migrationsPath = path.join(root, 'migrations');
  const exampleMigration = path.join(migrationsPath, 'example.ts');
  const newMigrationFileName = `${getCurrentDateTime()}-${name}.ts`;
  const newMigration = path.join(migrationsPath, newMigrationFileName);
  fs.copyFileSync(exampleMigration, newMigration);
  console.log(`New migration created at: ${newMigrationFileName}`);
};

const createUmzugInstance = (sequelize: Sequelize) => {
  return new Umzug({
    migrations: {
      path: path.join(__dirname, 'migrations'),
      params: [sequelize],
      pattern: /^\d+[\w-]+\.js$/,
    },
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize,
    },
  });
};

const main = async () => {
  const sequelize = createSequelizeInstance();
  const umzug = createUmzugInstance(sequelize);

  try {
    const command = process.argv[2];
    const name = process.argv[3] || 'task';
    switch (command) {
      case 'up':
        await migrateUp(umzug);
        break;
      case 'down':
        await migrateDown(umzug);
        break;
      case 'create':
        await createMigration(name);
        break;
      default:
        console.log('Invalid command. Valid commands are: up, down, create');
    }
  } finally {
    sequelize.close();
  }
};

export const updateEnum = async (
  sequelize: Sequelize,
  enumName: string,
  tableName: string,
  columnName: string,
  valueMap: Array<string[]>,
) => {
  console.log(`Updating enum ${enumName}`);

  await sequelize.query(`
  ALTER TABLE "${tableName}"
  ALTER COLUMN "${columnName}"
  TYPE VARCHAR(255)
  USING "${columnName}::text"`);

  await sequelize.query(`DROP TYPE "${enumName}"`);

  const newValues: string[] = [];
  await bluebird.each(valueMap, async (valueArr) => {
    await sequelize.query(`
    UPDATE "${tableName}"
    SET "${columnName}" = '${valueArr[1]}'
    WHERE "${columnName}" = '${valueArr[0]}'`);

    newValues.push(valueArr[1]);
  });

  await sequelize.query(`CREATE TYPE ${enumName} AS ENUM (:values)`, {
    replacements: { values: newValues },
  });

  await sequelize.query(`
  ALTER TABLE "${tableName}"
  ALTER COLUMN "${columnName}"
  TYPE "${enumName}" USING ("${columnName}"::${enumName})
  `);
};

main();
