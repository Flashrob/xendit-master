import * as sequelizeFixtures from 'sequelize-fixtures';
import { Sequelize } from 'sequelize-typescript';

export const createFromFixture = async (
  fixturePath: string,
  sequelize: Sequelize,
) => {
  try {
    await sequelizeFixtures.loadFile(fixturePath, sequelize.models);
  } catch (error) {
    console.log(error);
  }
};
