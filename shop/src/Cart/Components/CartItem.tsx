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
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: #d6515b;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding: 5px 25px;
  font-size: 16px;

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 3px 6px 0 rgb(26 51 130 / 20%);
  }
`;

export const CartItem = ({
  product,
  quantity,
  cartProducts,
  setCartProducts,
}: {
  product: Product;
  quantity: number;
  cartProducts: Product[];
  setCartProducts: (input: unknown) => void;
}) => {
  const removeCartItem = (productId: number) => {
    const filteredCartProducts = cartProducts.filter((product) => {
      return product.id !== productId;
    });
    setCartProducts(filteredCartProducts);
  };

  return (
    <Container key={`cart-${product.name}`}>
      <ItemWrapper>
        <ItemSpan>Product: {product.name}</ItemSpan>
        <ItemSpan>Price: {product.price}</ItemSpan>
        <ItemSpan>Quantity: {quantity}</ItemSpan>
        <RemoveButton onClick={() => removeCartItem(product.id)}>
          Remove
        </RemoveButton>
      </ItemWrapper>

    </Container>
  );
};
