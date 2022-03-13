import * as express from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from 'inversify-express-utils';
import {
  ApiOperationGet,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';

import { Types } from '../../common/types';
import Product from './persistence/Product';
import { ProductService } from './ProductService';

@ApiPath({
  path: '/products',
  name: 'Products controller',
})
@controller('/products')
export class ProductController implements interfaces.Controller {
  @inject(Types.ProductService) private productService!: ProductService;

  @ApiOperationGet({
    description: 'GET to retrieve all products by CategoryId',
    summary: 'GET products by CategoryId',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.STRING,
      },
    },
  })
  @httpGet('/:CategoryId')
  private async getProductsByCategoryId(
    @request() req: express.Request,
    @response() _res: express.Response,
  ): Promise<Product[]> {
    const { CategoryId } = req.params;
    if (!CategoryId) throw new Error('Please provide a valid id');
    return await this.productService.getProductsByCategoryId(
      Number(CategoryId),
    );
  }
}
