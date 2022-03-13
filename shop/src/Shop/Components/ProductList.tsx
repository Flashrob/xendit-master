import { Product } from '../../common/models/Product';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding-bottom: 50px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const makeProductCards = (products: Product[]) => {
  return products.map((product) => <ProductCard product={product} />);
};

export const ProductList = ({ products }: { products: Product[] }) => {
  if (!products.length) return null;
  const productCards = makeProductCards(products);
  return <Container>{productCards}</Container>;
};
