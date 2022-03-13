import { Container } from 'inversify';

import { Types } from '../../common/types';
import PersistenceProduct from './persistence/Product';

const container = new Container();

container
  .bind<PersistenceProduct>(Types.PersistenceProduct)
  .to(PersistenceProduct);

export { container };
