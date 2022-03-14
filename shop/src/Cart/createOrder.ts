import { postData } from '../common/helpers/postData';
import { Order } from '../common/models/Order';
import { Product } from '../common/models/Product';

export const createOrder = async (cartProducts: Product[]) => {
  const order = await postData<Order>('http://localhost:3000/orders', {
    products: cartProducts,
  });
  if (!order) console.error('Something went wrong');
  return order;
};
