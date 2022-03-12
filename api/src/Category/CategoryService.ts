import { injectable } from 'inversify';

import Category from './persistence/Category';

@injectable()
export class CategoryService {
  async getCategories(): Promise<Category[]> {
    return await Category.findAll();
  }
}
