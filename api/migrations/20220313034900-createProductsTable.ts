import * as Sequelize from 'sequelize';

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  await sequelize.query(
    `
      CREATE TABLE "Products" (
          "id" serial PRIMARY KEY,
          "name" varchar(50) NOT NULL,
          "price" integer NOT NULL,
          "CategoryId" integer REFERENCES "Categories" ("id"),
          "createdAt" timestamptz NOT NULL DEFAULT NOW(),
          "updatedAt" timestamptz NOT NULL DEFAULT NOW()
      )`,
  );

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DROP TABLE "Products"`);

  console.log('Done rolling back!');
};
