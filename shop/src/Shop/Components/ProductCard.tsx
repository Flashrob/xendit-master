import { Product } from '../../common/models/Product';
import styled from 'styled-components';
import { useLocalStorage } from '../../common/hooks/useLocalStorage';

const CardContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 20px auto;
  padding: 10px;
`;

const Header = styled.h1`
  color: #1d3ca2;
  font-weight: 600;
  font-family: Montserrat;
  text-align: center;
`;

const Price = styled.p`
  font-size: 16px;
`;

export const ProductCard = ({
  product,
  cartProducts,
  setCartProducts,
}: {
  product: Product;
  cartProducts: Product[];
  setCartProducts: (input: unknown) => void;
}) => {
  return (
    <CardContainer onClick={() => setCartProducts([...cartProducts, product])}>
      <Header>{product.name}</Header>
      <Price>{`SGD $${product.price}`}</Price>
    </CardContainer>
  );
};
