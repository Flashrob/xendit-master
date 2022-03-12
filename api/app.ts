import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';

import { container as ExampleContainer } from './src/Example/index';

const server = new InversifyExpressServer(ExampleContainer);

console.log('Starting server...');
const app = server.build();

app.listen(3000, 'localhost');
console.log('Server started!');

export { app };
