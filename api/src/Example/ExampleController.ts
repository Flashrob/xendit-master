import * as express from 'express';
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from 'inversify-express-utils';

@controller('/')
export class ExampleController implements interfaces.Controller {
  @httpGet('/')
  private index(
    @request() _req: express.Request,
    @response() _res: express.Response,
  ): string {
    return 'Hello World!';
  }
}
