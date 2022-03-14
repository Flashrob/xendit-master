import Bluebird from 'bluebird';
import { after, before, describe, it } from 'mocha';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';
import should from 'should';
// import should from 'should';
import request from 'supertest';

import { app } from '../../../app';
import { createTestSequelizeInstance } from '../../../config/sequelize';
import { createFromFixture } from '../../../test/helpers';

describe('Order: createOrder', () => {
  let sequelize: Sequelize;
  before(async () => {
    sequelize = await createTestSequelizeInstance();

    await Bluebird.each(['categories', 'products'], async (model) => {
      await createFromFixture(
        path.join(__dirname, `fixtures/${model}.json`),
        sequelize,
      );
    });
  });

  after(() => {
    sequelize.close();
  });

  it('should create order and return ok', async () => {
    const response = await request(app)
      .post('/orders')
      .set('content-type', 'application/json')
      .send({ products: [{ id: 1 }, { id: 2 }] })
      .expect(200);

    const responseBody = response.body;
    should.exist(responseBody);
    should.exist(responseBody.id);
  });

  it('should throw error on empty payload', async () => {
    const response = await request(app)
      .post('/orders')
      .send({ products: [] })
      .set('content-type', 'application/json')
      .expect(400);

    const error = response.error as { status: number; text: string };

    should.exist(error);
    should(error.text).eql('No products');
  });
});
