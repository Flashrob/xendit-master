import { injectable } from 'inversify';
import { groupBy } from 'lodash';

import Product from '../Product/persistence/Product';
import Order from './persistence/Order';
import OrderProduct from './persistence/OrderProduct';

@injectable()
export class OrderService {
  async createOrder(products: Partial<Product>[]): Promise<Order> {
    const order = await Order.create();

    const productsById = Object.entries(groupBy(products, 'id'));

    this.createOrderProducts(order.id, productsById);

    return order;
  }

  private createOrderProducts(
    OrderId: number,
    productsById: [string, Partial<Product>[]][],
  ) {
    productsById.forEach(async (productKey) => {
      const [key, products] = productKey;
      const quantity = products.length;
      await OrderProduct.create({
        OrderId,
        ProductId: Number(key),
        quantity,
      });
    });
  }
}
