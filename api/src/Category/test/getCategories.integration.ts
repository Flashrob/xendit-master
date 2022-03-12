import Bluebird from 'bluebird';
import { after, before, describe, it } from 'mocha';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';
import should from 'should';
import request from 'supertest';

import { app } from '../../../app';
import { createTestSequelizeInstance } from '../../../config/sequelize';
import { createFromFixture } from '../../../test/helpers';

describe('Category: getCategories', () => {
  let sequelize: Sequelize;
  before(async () => {
    sequelize = await createTestSequelizeInstance();

    await Bluebird.each(['categories'], async (model) => {
      await createFromFixture(
        path.join(__dirname, `fixtures/${model}.json`),
        sequelize,
      );
    });
  });

  after(() => {
    sequelize.close();
  });

  it('should return all categories', async () => {
    const response = await request(app)
      .get('/categories')
      .set('content-type', 'application/json')
      .expect(200);

    const categories = response.body;

    should.exist(categories);
    should(categories.length).eql(3);
  });
});
