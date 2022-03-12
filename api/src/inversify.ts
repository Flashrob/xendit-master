import { Container } from 'inversify';

import { container as CategoryContainer } from './Category/index';
import { container as ExampleContainer } from './Example/index';

export const container = Container.merge(CategoryContainer, ExampleContainer);
