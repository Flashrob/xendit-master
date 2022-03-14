import express from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  interfaces,
  request,
  requestBody,
  response,
} from 'inversify-express-utils';
import {
  ApiOperationPost,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';

import { Types } from '../../common/types';
import Product from '../Product/persistence/Product';
import { OrderService } from './OrderService';

@ApiPath({
  path: '/orders',
  name: 'Categories controller',
})
@controller('/orders')
export class OrderController implements interfaces.Controller {
  @inject(Types.OrderService) private orderService!: OrderService;

  @ApiOperationPost({
    description: 'POST to create an order',
    summary: 'POST order',
    parameters: {
      body: {
        properties: {
          id: {
            type: 'integer',
            required: false,
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.STRING,
      },
    },
  })
  @httpPost('/')
  private async createOrder(
    @request() _req: express.Request,
    @response() res: express.Response,
    @requestBody()
    body: { products: Partial<Product>[] },
  ) {
    const { products } = body;
    if (!products.length) return res.status(400).send('No products');

    return await this.orderService.createOrder(products);
  }
}
