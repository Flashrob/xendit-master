import { useLocalStorage } from '../common/hooks/useLocalStorage';
import { Product } from '../common/models/Product';

const makeCartItems = (cartProducts: Product[]) => {
  if (!cartProducts.length) return [];
  return cartProducts.map((product) => (
    <div key={`cart-${product.name}`}>{product.name}</div>
  ));
};

export const Cart = () => {
  const [cartProducts] = useLocalStorage('products', []);

  const cartItems = makeCartItems(cartProducts);
  return <div>{cartItems}</div>;
};
