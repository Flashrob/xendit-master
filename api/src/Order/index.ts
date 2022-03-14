import { Container } from 'inversify';

import { Types } from '../../common/types';
import { OrderController } from './OrderController';
import { OrderService } from './OrderService';
import PersistenceOrder from './persistence/Order';

const container = new Container();

container.bind<PersistenceOrder>(Types.PersistenceOrder).to(PersistenceOrder);
container.bind<OrderController>(Types.OrderController).to(OrderController);
container.bind<OrderService>(Types.OrderService).to(OrderService);

export { container };
