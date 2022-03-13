import express from 'express';
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

@ApiPath({
  path: '/orders',
  name: 'Categories controller',
})
@controller('/orders')
export class OrderController implements interfaces.Controller {
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
  private createOrder(
    @request() _req: express.Request,
    @response() _res: express.Response,
    @requestBody() body: any,
  ) {
    console.log('body', body);
    return 'works';
  }
}
