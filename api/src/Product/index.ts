import { Container } from 'inversify';

import { Types } from '../../common/types';
import PersistenceProduct from './persistence/Product';
import { ProductController } from './ProductController';
import { ProductService } from './ProductService';

const container = new Container();

container
  .bind<PersistenceProduct>(Types.PersistenceProduct)
  .to(PersistenceProduct);
container
  .bind<ProductController>(Types.ProductController)
  .to(ProductController);
container.bind<ProductService>(Types.ProductService).to(ProductService);

export { container };
