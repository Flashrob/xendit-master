import * as Sequelize from 'sequelize';

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  await sequelize.query(
    `
      CREATE TABLE "Orders" (
          "id" serial PRIMARY KEY,
          "createdAt" timestamptz NOT NULL DEFAULT NOW(),
          "updatedAt" timestamptz NOT NULL DEFAULT NOW()
      )`,
  );

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DROP TABLE "Orders"`);

  console.log('Done rolling back!');
};
