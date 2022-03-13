import { Container } from 'inversify';

import { container as CategoryContainer } from './Category/index';
import { container as ExampleContainer } from './Example/index';
import { container as ProductContainer } from './Product/index';

export const container = Container.merge(
  ProductContainer,
  CategoryContainer,
  ExampleContainer,
);
