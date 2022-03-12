import { Container } from 'inversify';

import { Types } from '../../common/types';
import PersistenceCategory from './persistence/Category';

const container = new Container();

container
  .bind<PersistenceCategory>(Types.PersistenceCategory)
  .to(PersistenceCategory);

export { container };
