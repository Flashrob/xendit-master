import { injectable } from 'inversify';

import Category from '../Category/persistence/Category';
import Product from './persistence/Product';

@injectable()
export class ProductService {
  async getProductsByCategoryId(CategoryId: number): Promise<Product[]> {
    return await Product.findAll({
      include: [
        {
          model: Category,
          where: {
            id: CategoryId,
          },
          required: true,
        },
      ],
    });
  }
}
