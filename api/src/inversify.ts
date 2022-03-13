import { Container } from 'inversify';

import { container as CategoryContainer } from './Category/index';
import { container as ExampleContainer } from './Example/index';
import { container as OrderContainer } from './Order/index';
import { container as ProductContainer } from './Product/index';

// can consider wildcard importing all containers from src/*/index.ts with addition of any more modules

export const container = Container.merge(
  ProductContainer,
  CategoryContainer,
  ExampleContainer,
  OrderContainer,
);
