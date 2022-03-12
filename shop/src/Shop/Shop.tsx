import { useCategories } from './categories';

export const Shop = () => {
  const categories = useCategories();
  console.log(categories);
  return <h1>This is the shop!</h1>;
};
