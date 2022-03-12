import { Container } from 'inversify';

import { Types } from '../../common/types';
import { CategoryController } from './CategoryController';
import { CategoryService } from './CategoryService';
import PersistenceCategory from './persistence/Category';

const container = new Container();

container
  .bind<PersistenceCategory>(Types.PersistenceCategory)
  .to(PersistenceCategory);
container
  .bind<CategoryController>(Types.CategoryController)
  .to(CategoryController);
container.bind<CategoryService>(Types.CategoryService).to(CategoryService);

export { container };
