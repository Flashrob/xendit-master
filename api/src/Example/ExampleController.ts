import * as express from 'express';
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

@ApiPath({
  path: '/',
  name: 'hello world',
})
@controller('/')
export class ExampleController implements interfaces.Controller {
  @ApiOperationGet({
    description: 'Example endpoint',
    summary: 'Get hello world',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.STRING,
      },
    },
  })
  @httpGet('/')
  private index(
    @request() _req: express.Request,
    @response() _res: express.Response,
  ): string {
    return 'Hello World!';
  }
}
