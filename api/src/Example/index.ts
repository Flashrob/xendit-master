import { Container } from 'inversify';

import { Types } from '../../common/types';
import { ExampleController } from './ExampleController';

const container = new Container();

container
  .bind<ExampleController>(Types.ExampleController)
  .to(ExampleController);

export { container };
