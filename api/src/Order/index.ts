import { Container } from 'inversify';

import { Types } from '../../common/types';
import PersistenceOrder from './persistence/Order';

const container = new Container();

container.bind<PersistenceOrder>(Types.PersistenceOrder).to(PersistenceOrder);

export { container };
