import type { Sequelize } from 'sequelize';

type Service<Sequelize> = {
  start: (_sequelize: Sequelize) => Promise<Sequelize>;
  stop: (_sequelize: Sequelize) => Promise<void>;
};

const SequelizeService: Service<Sequelize> = {
  start: async (sequelize) => {
    try {
      await sequelize.authenticate();
      console.log('PSQL Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    return sequelize;
  },
  stop: async (sequelize) => {
    await sequelize.close();
    console.log('PSQL Connection has been closed.');
  },
};

export default SequelizeService;
