import { Product } from '../common/models/Product';
import { CartItem } from './Components/CartItem';
import { groupBy } from 'lodash';

export const makeCartItems = (cartProducts: Product[]) => {
  if (!cartProducts.length) return [];
  const cartItemsById = Object.entries(groupBy(cartProducts, 'id'));

  const cartItems = cartItemsById.map((entry) => {
    const product = entry[1][0];
    const quantity = entry[1].length;
    return <CartItem product={product} quantity={quantity} />;
  });

  const totalBill = cartItemsById.reduce((acc, entry) => {
    const product = entry[1][0];
    const quantity = entry[1].length;
    return acc + product.price * quantity;
  }, 0);

  return [cartItems, totalBill];
};
