import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as swagger from 'swagger-express-ts';

import { swaggerOptions } from './services/swaggerOptions';
import { container as ExampleContainer } from './src/Example/index';

const server = new InversifyExpressServer(ExampleContainer);

server.setConfig((app) => {
  app.use(bodyParser.json());
  app.use('/api-docs/swagger', express.static('swagger'));
  app.use(
    '/api-docs/swagger/assets',
    express.static('node_modules/swagger-ui-dist'),
  );
  app.use(swagger.express(swaggerOptions));
});

console.log('Starting server...');
const app = server.build();

app.listen(3000, 'localhost');
console.log('Server started!');

export { app };
