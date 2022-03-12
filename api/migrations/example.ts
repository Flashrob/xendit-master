import * as Sequelize from 'sequelize';

export const up = async (sequelize: Sequelize.Sequelize) => {
  console.log('Migrating...');

  await sequelize.query(
    `
    CREATE TABLE IF NOT EXISTS Foo (
        id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
        bar VARCHAR(255) NOT NULL
    )`,
    {
      type: Sequelize.QueryTypes.INSERT,
    },
  );

  console.log('Done migrating!');
};

export const down = async (sequelize: Sequelize.Sequelize) => {
  console.log('Rolling back...');

  await sequelize.query(`DROP TABLE Foo`);

  console.log('Done rolling back!');
};
