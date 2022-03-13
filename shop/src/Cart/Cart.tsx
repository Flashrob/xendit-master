import { useLocalStorage } from '../common/hooks/useLocalStorage';
import {
  Container,
  Headline,
  Title,
  Total,
  Paragraph,
  Content,
} from './Cart.sc';
import { makeCartItems } from './makeCartItems';

export const Cart = () => {
  const [cartProducts] = useLocalStorage('products', []);

  const [cartItems, totalBill] = makeCartItems(cartProducts);
  return (
    <Container>
      <Headline>
        <Title>Shopping Cart</Title>
        <Paragraph>Please check your items before checking out</Paragraph>
      </Headline>
      <Content>
        <div>{cartItems}</div>
        <Total>Total: {totalBill}</Total>
      </Content>
    </Container>
  );
};
