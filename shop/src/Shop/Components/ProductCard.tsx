import { Product } from '../../common/models/Product';
import styled from 'styled-components';

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

const AddToCartButton = styled.button`
  background-color: #4373fc;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding: 18px 25px;
  font-size: 16px;

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 3px 6px 0 rgb(26 51 130 / 20%);
  }
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
    <CardContainer>
      <Header>{product.name}</Header>
      <Price>{`SGD $${product.price}`}</Price>
      <AddToCartButton
        onClick={() => setCartProducts([...cartProducts, product])}
      >
        Add To Cart
      </AddToCartButton>
    </CardContainer>
  );
};
