import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as swagger from 'swagger-express-ts';

import { createSequelizeInstance } from './config/sequelize';
import SequelizeService from './services/SequelizeService';
import { swaggerOptions } from './services/swaggerOptions';
import { container } from './src/inversify';

const sequelize = createSequelizeInstance();

SequelizeService.start(sequelize);

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(cors());
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

export { app, sequelize };
