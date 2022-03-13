import { Product } from '../../common/models/Product';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

const ItemSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  display: inline;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItem = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  return (
    <Container key={`cart-${product.name}`}>
      <ItemWrapper>
        <ItemSpan>Product: {product.name}</ItemSpan>
        <ItemSpan>Price: {product.price}</ItemSpan>
        <ItemSpan>Quantity: {quantity}</ItemSpan>
      </ItemWrapper>
    </Container>
  );
};
