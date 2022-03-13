import { Product } from '../../common/models/Product';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';
import { useLocalStorage } from '../../common/hooks/useLocalStorage';

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

const makeProductCards = (
  products: Product[],
  cartProducts: Product[],
  setCartProducts: (input: unknown) => void,
) => {
  return products.map((product) => (
    <ProductCard
      key={product.name}
      product={product}
      cartProducts={cartProducts}
      setCartProducts={setCartProducts}
    />
  ));
};

export const ProductList = ({ products }: { products: Product[] }) => {
  const [cartProducts, setCartProducts] = useLocalStorage('products', []);
  if (!products.length) return null;
  const productCards = makeProductCards(
    products,
    cartProducts,
    setCartProducts,
  );
  return <Container>{productCards}</Container>;
};
