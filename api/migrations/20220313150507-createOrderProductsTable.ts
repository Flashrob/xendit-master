import * as Sequelize from 'sequelize';

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  await sequelize.query(
    `
      CREATE TABLE "OrderProducts" (
          "OrderId" integer REFERENCES "Orders" ("id"),
          "ProductId" integer REFERENCES "Products" ("id"),
          "quantity" integer NOT NULL,
          "createdAt" timestamptz NOT NULL DEFAULT NOW(),
          "updatedAt" timestamptz NOT NULL DEFAULT NOW(),
          PRIMARY KEY ("OrderId", "ProductId")
      )`,
  );

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DROP TABLE "OrderProducts"`);

  console.log('Done rolling back!');
};
