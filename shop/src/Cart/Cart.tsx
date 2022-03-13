import { useLocalStorage } from '../common/hooks/useLocalStorage';
import {
  Container,
  Headline,
  Title,
  Total,
  Paragraph,
  Content,
  NoItems,
} from './Cart.sc';
import { makeCartItems } from './makeCartItems';

export const Cart = () => {
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
          </>
        )}
        {!cartItems && <NoItems>No items in cart</NoItems>}
      </Content>
    </Container>
  );
};
