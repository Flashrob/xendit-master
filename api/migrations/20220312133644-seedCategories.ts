import * as Sequelize from 'sequelize';

const categoriesData = [
  { name: 'computers' },
  { name: 'phones' },
  { name: 'tvs' },
  { name: 'accessories' },
  { name: 'gaming' },
];

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  for (const { name } of categoriesData) {
    // eslint-disable-next-line no-await-in-loop
    await sequelize.query(
      `
    INSERT INTO "Categories" ("name") VALUES ($name)`,
      { bind: { name }, type: Sequelize.QueryTypes.INSERT },
    );
  }

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DELETE FROM "Categories"`);

  console.log('Done rolling back!');
};
