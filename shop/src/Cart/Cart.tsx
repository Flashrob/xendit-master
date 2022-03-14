import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../common/hooks/useLocalStorage';
import {
  Container,
  Headline,
  Title,
  Total,
  Paragraph,
  Content,
  NoItems,
  CheckoutButton,
} from './Cart.sc';
import { createOrder } from './createOrder';
import { makeCartItems } from './makeCartItems';

export const Cart = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useLocalStorage('products', []);

  const [cartItems, totalBill] = makeCartItems(cartProducts, setCartProducts);
  return (
    <Container>
      <Headline>
        <Title>Shopping Cart</Title>
        <Paragraph>Please check your items before checking out</Paragraph>
      </Headline>
      <Content>
        {cartItems && (
          <>
            <div>{cartItems}</div>
            <Total>Total: {totalBill}</Total>
            <CheckoutButton
              onClick={async () => {
                const order = await createOrder(cartProducts);
                navigate('/payment', {
                  state: { orderId: order.id, total: totalBill },
                });
                localStorage.removeItem('products');
              }}
            >
              Checkout
            </CheckoutButton>
          </>
        )}
        {!cartItems && <NoItems>No items in cart</NoItems>}
      </Content>
    </Container>
  );
};
