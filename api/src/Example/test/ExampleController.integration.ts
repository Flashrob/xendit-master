import { after, before, describe, it } from 'mocha';
import { Sequelize } from 'sequelize-typescript';
import should from 'should';
import request from 'supertest';

import { app } from '../../../app';
import { createTestSequelizeInstance } from '../../../config/sequelize';

describe('Example', () => {
  let sequelize: Sequelize;
  before(async () => {
    sequelize = await createTestSequelizeInstance();
  });

  after(() => {
    sequelize.close();
  });

  it('should return hello world', async () => {
    const response = await request(app)
      .get('/')
      .set('content-type', 'application/json')
      .expect(200);

    should(response.text).eql('Hello World!');
  });
});
