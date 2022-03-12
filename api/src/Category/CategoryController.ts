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
import { CategoryService } from './CategoryService';
import Category from './persistence/Category';

@ApiPath({
  path: '/categories',
  name: 'Categories controller',
})
@controller('/categories')
export class CategoryController implements interfaces.Controller {
  @inject(Types.CategoryService) private categoryService!: CategoryService;

  @ApiOperationGet({
    description: 'GET to retrieve all categories',
    summary: 'GET categories',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.STRING,
      },
    },
  })
  @httpGet('/')
  private getCategories(
    @request() _req: express.Request,
    @response() _res: express.Response,
  ): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
